import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const DEFAULT_LOGO = '/api/media/file/kyanon-logo.png'

const styles = {
  rightArrowImage: {
    backgroundImage:
      'url(https://kyanon.digital/wp-content/themes/softek/vtm/assets/images/arrow-3.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center',
  },
  header: {
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
}

export const HeaderCustom = ({ header }: { header: HeaderType }) => {
  const { logo, navItems, buttonItems } = header
  const url = typeof logo === 'string' ? DEFAULT_LOGO : (logo?.url ?? DEFAULT_LOGO)
  const { slug: slugCurrent } = useParams()

  return (
    <header className="sticky bg-white" style={styles.header}>
      <div className="mx-[104.5px]">
        <div className="flex items-center relative">
          <div className="flex-shrink-0">
            <Link href="/" className="flex-shrink-0">
              <Image src={url} width={133} height={33} alt="Logo" />
            </Link>
          </div>

          <nav className="flex-grow mr-5">
            <ul className="flex text-xs font-bold justify-end relative text-[#323232] leading-6">
              {navItems?.map((item, index) => (
                <li
                  className={`relative capitalize px-[10px] py-[22px] ${item.dropdownItems?.length ? 'group' : ''}`}
                  key={index}
                >
                  <Link
                    href={item.link.url ?? '#'}
                    target={item.link.newTab ? '_blank' : '_self'}
                    className={`hover:text-[#f14e4a] ${slugCurrent === item.link.url ? 'text-[#f14e4a]' : ''}`}
                  >
                    {item.link.label}
                    {item.dropdownItems?.length ? (
                      <i className="border-solid border-gray-800 border-r border-b p-0.5 inline-block transform rotate-45 ml-2"></i>
                    ) : (
                      ''
                    )}
                  </Link>

                  {item.dropdownItems?.length ? (
                    <ul
                      className="absolute bg-white capitalize hidden group-hover:block"
                      style={{ top: '100%', minWidth: '285px', left: '-6px' }}
                    >
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <li
                          key={dropdownIndex}
                          className="hover:bg-[#f0413c] hover:text-white"
                          style={styles.rightArrowImage}
                        >
                          <Link
                            className="py-[10px] pr-5 pl-[30px] block"
                            href={dropdownItem.link.url ?? '#'}
                            target={dropdownItem.link.newTab ? '_blank' : '_self'}
                          >
                            {dropdownItem.link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {buttonItems?.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <Link
                href={item.url ?? '#'}
                className="uppercase font-bold text-xs leading-[30px] bg-gradient-to-r from-[#ba1419] to-[#ed4f5c] text-white px-[18px] py-[4px] rounded block tracking-[-0.25px] ml-[7px]"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
