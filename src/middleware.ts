import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdmin = token?.role === "ADMIN"
    const isUser = token?.role === "USER"

    // Protect admin routes
    if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/auth/signin", req.url))
    }

    // Protect user routes
    if (
      (req.nextUrl.pathname.startsWith("/profile") ||
        req.nextUrl.pathname.startsWith("/orders") ||
        req.nextUrl.pathname.startsWith("/cart")) &&
      !isUser &&
      !isAdmin
    ) {
      return NextResponse.redirect(new URL("/auth/signin", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/orders/:path*", "/cart/:path*"],
} 