'use client'

import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = (error: string) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration. Please try again later."
      case "AccessDenied":
        return "Access denied. You don't have permission to sign in."
      case "Verification":
        return "The verification link is no longer valid. Please request a new one."
      default:
        return "An error occurred during authentication. Please try again."
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error ? getErrorMessage(error) : "An unknown error occurred"}
          </p>
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link href="/auth/signin">
              Try Again
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 