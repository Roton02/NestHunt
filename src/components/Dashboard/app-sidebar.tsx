'use client'

import * as React from 'react'
import {  LogOut, Settings2, SquareTerminal, Home, User } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'
import { Button } from '../ui/button'

// Define a type for the role
type Role = 'admin' | 'landlord' | 'tenant'

// This is sample data.
const role: Role = 'tenant' 
const data = {
  user: {
    name: 'Roton',
    email: 'roton01@gmail.com',
    avatar: '.jpg',
  },

  navMain: [
    ...((role as Role) === 'admin'
      ? [
          {
            title: 'Admin Dashboard',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
              { title: 'Manage Users', url: '#' },
              { title: 'Reports', url: '#' },
              { title: 'System Settings', url: '#' },
            ],
          },
        ]
      : []),

    ...((role as Role) === 'landlord'
      ? [
          {
            title: 'Landlord Panel',
            url: '#',
            icon: Home,
            isActive: true,
            items: [
              { title: 'My Properties', url: '#' },
              { title: 'Tenant Requests', url: '#' },
              { title: 'Payment Reports', url: '#' },
            ],
          },
        ]
      : []),

    ...((role as Role) === 'tenant'
      ? [
          {
            title: 'Tenant Dashboard',
            url: '#',
            icon: User,
            isActive: true,
            items: [
              { title: 'My Rent', url: '/dashboard/tenant/order' },
              { title: 'Payment History', url: '#' },
              { title: 'Support', url: '#' },
            ],
          },
        ]
      : []),

    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        { title: 'General', url: '#' },
        { title: 'Profile', url: '#' },
        { title: 'Logout', url: '#' },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Button className=' flex  items-center gap-2'>
          <LogOut /> Log out
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}