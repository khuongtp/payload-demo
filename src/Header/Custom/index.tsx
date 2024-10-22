import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const HeaderCustom = ({ header }: { header: HeaderType }) => {
  const dropdownArrow = {
    border: 'solid #323232',
    borderWidth: '0 1px 1px 0',
    padding: '2px',
    display: 'inline-block',
    transform: 'rotate(45deg)',
    marginLeft: '8px',
  }

  const rightArrowImage = {
    backgroundImage:
      'url(https://kyanon.digital/wp-content/themes/softek/vtm/assets/images/arrow-3.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center',
  }

  const dropdownItems = {
    padding: '10px 20px 10px 30px',
    display: 'block',
  }

  const navigation = {
    padding: '22px 10px',
  }

  const { logo, navItems, buttonItems } = header
  const DEFAULT_LOGO = '/api/media/file/kyanon-logo.png'
  const url = typeof logo === 'string' ? DEFAULT_LOGO : (logo?.url ?? DEFAULT_LOGO)
  const params = useParams()
  const slugCurrent = params.slug

  return (
    <>
      <header
        className="sticky bg-white"
        style={{
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ margin: '0 104px' }}>
          <div className="flex relative items-center">
            <div className="flex-shrink-0 absolute" style={{ top: '14px' }}>
              <a href="#">
                <img src={url} width={133} height={33} />
              </a>
            </div>

            <nav className="flex-grow" style={{ marginRight: '20px' }}>
              <ul
                className="flex text-xs font-bold justify-end relative"
                style={{ color: '#323232', lineHeight: '1.5rem' }}
              >
                {navItems?.map((items, i) => {
                  return (
                    <li
                      className={`relative capitalize ${items.dropdownItems?.length ? 'group' : null}`}
                      style={navigation}
                      key={i}
                    >
                      <Link
                        href={items.link.url ?? '#'}
                        target={items.link.newTab ? '_blank' : '_self'}
                        className={`hover:text-[#f14e4a] ${
                          slugCurrent == items.link.url ? 'text-[#f14e4a]' : null
                        } `}
                      >
                        {items.link.label}
                        {items.dropdownItems?.length ? <i style={dropdownArrow}></i> : null}
                      </Link>

                      {items.dropdownItems?.length ? (
                        <ul
                          className="absolute bg-white capitalize hidden group-hover:block"
                          style={{ top: '100%', minWidth: '285px', left: '-6px' }}
                        >
                          {items.dropdownItems.map((items, i) => {
                            return (
                              <li
                                key={i}
                                className="hover:bg-[#f0413c] hover:text-white"
                                style={rightArrowImage}
                              >
                                <Link
                                  href={items.link.url ?? '#'}
                                  target={items.link.newTab ? '_blank' : '_self'}
                                  style={dropdownItems}
                                >
                                  {items.link.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      ) : null}
                    </li>
                  )
                })}
              </ul>
            </nav>

            {buttonItems?.map((items) => {
              return (
                <div className="flex-shrink-0">
                  <Link
                    href={items.url ?? '#'}
                    className="uppercase font-bold"
                    style={{
                      fontSize: '12px',
                      lineHeight: '30px',
                      background: 'linear-gradient(to right,#ba1419 0%,#ed4f5c 100%)',
                      color: '#fff',
                      padding: '4px 18px',
                      borderRadius: '0.25rem',
                      display: 'block',
                      letterSpacing: '-0.25px',
                      marginLeft: '7px',
                    }}
                  >
                    {items.label}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </header>
    </>
  )
}
