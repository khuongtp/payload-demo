import React from 'react'

import type { Page } from '@/payload-types'
import Link from 'next/link'
import { HomeContent } from './Content'
import { HomeFeature } from './Feature'

type Props = Extract<Page['layout'][0], { blockType: 'customContent' }>

export const CustomContentBlock: React.FC<
  {
    id?: string
  } & Props
> = (props) => {
  const { columns } = props
  return (
    <>
      <HomeContent />
      <HomeFeature />
      {columns?.map((col, index) => {
        const { link, contentLogo } = col
        const DEFAULT_LOGO = '/api/media/file/content.png'
        const url = typeof contentLogo === 'string' ? DEFAULT_LOGO : (contentLogo?.url ?? '')

        return (
          <div className="flex mx-40 my-20">
            <div className="flex-1">
              <div
                className="font-bold opacity-50 mt-7 tracking-widest"
                style={{ fontSize: '14px', color: '#12022F' }}
              >
                <span>PERFECT DESIGN</span>
              </div>
              <div className="tracking-tighter font-bold text-5xl mt-6">
                <span>Landing Design Templates for Your Startup</span>
              </div>
              <div
                className="mt-10 text-lg"
                style={{ color: '#594D6D', letterSpacing: '-0.4px', maxWidth: '445px' }}
              >
                <p>
                  With a team of highly experienced designers, we have done it carefully and simply.
                  The components work together to create a beautiful landing. It is essential
                  template for designers
                </p>
              </div>
              <button
                className="font-bold text-base py-4 px-24 mt-16 capitalize"
                style={{
                  letterSpacing: '-0.36px',
                  color: link?.appearance === 'outline' ? '#12022F' : 'white',
                  backgroundColor: link?.appearance === 'outline' ? '#FFDDA9' : 'black',
                  borderRadius: '28px',
                }}
              >
                <Link href={link?.url ?? '#'} target={link?.newTab ? '_blank' : ''}>
                  {link?.label}
                </Link>
              </button>
            </div>
            <div className="flex-1 ml-32">
              <img
                src={url}
                alt=""
                style={{
                  objectFit: 'contain',
                  borderRadius: '32px',
                  height: '540px',
                  width: '540px',
                }}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}
