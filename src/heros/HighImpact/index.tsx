'use client'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import BannerRight from 'src/access/images/banner-right-home.png'
import "./style.css"
import Image from 'next/image'

export const HighImpactHero = ({ links, media, richText }: Page['hero']) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative -mt-[10.4rem] flex items-center   text-white" data-theme="dark">
      <div className="container mb-8 z-10 relative flex items-center">
        <div className="max-w-[38rem]">
          {richText && <RichText className="mb-6 banner-text" content={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div>
          <Image src={BannerRight} alt="banner right" style={{marginLeft: 100}}/>
        </div>
      </div>
      <div className="min-h-[85vh] select-none">
        {media && typeof media === 'object' && (
          <React.Fragment>
            <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
