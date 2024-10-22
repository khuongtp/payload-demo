'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderButton } from './Button'
import { HeaderNav } from './Nav'
import { HeaderCustom } from './Custom'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const buttonItems = header?.buttonItems || []

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  if (header.headerTypes?.enableCustomHeader) {
    return <HeaderCustom header={header} />
  } else {
    return (
      <header
        className="container relative z-20 py-8 flex justify-between"
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <Link href="/">
          <Logo header={header} />
        </Link>
        <HeaderNav header={header} />

        <div className="flex items-center gap-12 font-bold">
          {buttonItems.map(({ ...props }, i) => {
            return <HeaderButton key={i} {...props} />
          })}
        </div>
      </header>
    )
  }
}
