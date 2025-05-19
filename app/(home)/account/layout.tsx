'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  User,
  Package,
  MapPin,
  Settings,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const navigation = [
  {
    name: 'Profile',
    href: '/account',
    icon: User,
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: Package,
  },
  {
    name: 'Addresses',
    href: '/account/addresses',
    icon: MapPin,
  },
  {
    name: 'Settings',
    href: '/account/settings',
    icon: Settings,
  },
]

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Account</h2>
            <p className="text-sm text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <Separator />
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
          <Separator />
          <Button
            variant="ghost"
            className="w-full justify-start space-x-3"
            onClick={() => {
              // TODO: Implement sign out
              console.log('Sign out')
            }}
          >
            <LogOut className="h-4 w-4" />
            <span>Sign out</span>
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
} 