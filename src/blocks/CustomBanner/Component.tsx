import type { Page } from '@/payload-types'
import Link from 'next/link'

type Props = Extract<Page['layout'][0], { blockType: 'customBanner' }>

export const CustomBannerBlock = ({ links }: Props) => {
  return (
    <div
      style={{
        marginTop: '-8rem',
        backgroundImage: 'url(https://kyanon.digital/wp-content/uploads/2021/05/bg-thanh-tich.jpg)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col items-center text-white capitalize">
        <div style={{ paddingTop: '6.5rem', paddingBottom: '23px' }} className="text-5xl font-bold">
          <h1>{links?.[links.length - 1].link.label}</h1>
        </div>
        <div style={{ paddingBottom: '5.75rem' }} className="flex">
          {links?.map((items, index) => {
            return (
              <>
                <Link href={items.link.url ?? ''} target={items.link.newTab ? '_blank' : '_self'}>
                  {items.link.label}
                </Link>
                {index < links.length - 1 && (
                  <div
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRight: '2px solid #fff',
                      borderTop: '2px solid #fff',
                      transform: 'rotate(45deg)',
                    }}
                    className="m-2"
                  ></div>
                )}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
