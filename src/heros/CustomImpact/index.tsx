'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'
import Link from 'next/link'

export const CustomImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div
      className="relative -mt-[10.4rem] pt-[11.25rem] flex items-end text-black"
      data-theme="light"
    >
      <div className="container mb-8 z-10 relative flex justify-center">
        <div className="max-w-[45.625rem] text-center">
          {richText && <RichText className="mb-20" content={richText} enableGutter={false} />}
          <div style={{ height: 'auto', maxWidth: '350px', margin: 'auto' }}>
            {links?.map(({ link }, i) => {
              return (
                <button
                  key={i}
                  className="p-4 rounded-3xl"
                  style={
                    link.appearance === 'outline'
                      ? {
                          backgroundColor: 'hsla(36, 100%, 83%, 1)',
                          width: '21rem',
                          fontWeight: 700,
                        }
                      : {
                          backgroundColor: 'red',
                          width: '21rem',
                          fontWeight: 700,
                        }
                  }
                >
                  <Link href={link.url || ''} target={link.newTab ? '_blank' : ''}>
                    {link.label}
                  </Link>
                </button>
              )
            })}

            <div className="pt-4" style={{ fontSize: '14px' }}>
              Learn more...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
