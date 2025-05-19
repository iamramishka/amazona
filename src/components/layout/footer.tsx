import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const categories = [
    { name: "T-shirts", href: "/category/t-shirts" },
    { name: "Jeans", href: "/category/jeans" },
    { name: "Shoes", href: "/category/shoes" },
  ]

  const customerService = [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "FAQs", href: "/faqs" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ]

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Categories
            </h3>
            <ul className="mt-4 space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Customer Service
            </h3>
            <ul className="mt-4 space-y-4">
              {customerService.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Amazona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 