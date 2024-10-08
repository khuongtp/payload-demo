'use client'

import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

export const HeaderNav = ({ header }: { header: HeaderType }) => {
  const navItems = header?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
