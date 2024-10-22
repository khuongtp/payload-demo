import type { Page } from '@/payload-types'
import Link from 'next/link'

type Props = Extract<Page['layout'][0], { blockType: 'customBanner' }>

const BACKGROUND_IMAGE_URL = 'https://kyanon.digital/wp-content/uploads/2021/05/bg-thanh-tich.jpg'

export const CustomBannerBlock: React.FC<Props> = ({ links }) => {
  const lastLink = links?.[links.length - 1]?.link

  return (
    <div
      className="text-white bg-cover bg-center bg-repeat -mt-48"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="mx-auto px-[90px]">
        <div className="pt-[172px] pb-[23px] px-[15px]">
          <div className="flex items-center justify-center">
            <h1 className="font-bold capitalize text-[50px] leading-[58px]">{lastLink?.label}</h1>
          </div>
        </div>
        <div className="pt-0 px-[15px] pb-[92px]">
          <div className="flex items-center justify-center text-base capitalize leading-[28px]">
            {links?.map((item, index) => (
              <>
                <Link href={item.link.url ?? ''} target={item.link.newTab ? '_blank' : '_self'}>
                  {item.link.label}
                </Link>
                {index < links.length - 1 && (
                  <div className="w-[7px] h-[7px] border-r-2 border-t-2 border-white transform rotate-45 m-3" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
