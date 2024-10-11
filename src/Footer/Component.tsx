import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Footer } from '@/payload-types'
import { FooterNav } from './Nav'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()

  const footerItems = footer?.footerItems || []
  const DEFAULT_LOGO =
    'https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg'
  const logo = footer?.footerLogo ?? DEFAULT_LOGO
  const logoURL = typeof logo === 'string' ? logo : (logo?.url ?? '')

  return (
    <footer
      className="border-t border-border dark:bg-card text-white"
      style={{ backgroundColor: 'hsla(260, 74%, 30%, 1)' }}
    >
      {/* <footer className="border-t border-border bg-black dark:bg-card text-white"> */}
      {/* <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <picture>
            <img
              alt="Payload Logo"
              className="max-w-[6rem] invert-0"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
            />
          </picture>
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div> */}
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {navItems.map(({ ...props }, i) => {
            return <FooterNav key={i} {...props} />
          })}
        </div>
      </div> */}

      <div className="mx-auto pt-20">
        <div className="flex">
          <div className="flex justify-center ml-40">
            <img src={logoURL} alt="" style={{ objectFit: 'contain', height: '24px' }} />
          </div>
          <div className="ml-48 flex">
            {footerItems.map(({ ...items }, i) => {
              return <FooterNav key={i} {...items} />
            })}
          </div>

          <div className="flex flex-col ml-7">
            <div className="font-bold">
              <p>Follow Us</p>
            </div>
            <div className="flex mt-8">
              <a href="#" className="hover:text-gray-400 mr-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.9146" cy="11.9144" r="11.9146" fill="#007AB9" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.36057 5.09082C6.38634 5.09082 5.74896 5.73032 5.74896 6.57054C5.74896 7.39291 6.36787 8.05089 7.32319 8.05089H7.34167C8.33502 8.05089 8.95264 7.39291 8.95264 6.57054C8.93374 5.73032 8.33502 5.09082 7.36057 5.09082ZM19.0335 12.8732V17.7853H16.1856V13.2024C16.1856 12.0517 15.7744 11.2658 14.7432 11.2658C13.9563 11.2658 13.4889 11.7949 13.2824 12.3072C13.2074 12.4903 13.1881 12.7445 13.1881 13.0013V17.7851H10.34C10.34 17.7851 10.3782 10.0231 10.34 9.21967H13.1883V10.4335C13.1856 10.438 13.1824 10.4424 13.1793 10.4468C13.1757 10.4518 13.1721 10.4567 13.1694 10.4615H13.1883V10.4335C13.5668 9.8511 14.2418 9.01854 15.7551 9.01854C17.6287 9.01854 19.0335 10.2427 19.0335 12.8732ZM8.76532 17.7853H5.91824V9.21967H8.76532V17.7853Z"
                    fill="#F1F2F2"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400 mr-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4.36769C23.1075 4.76923 22.1565 5.03538 21.165 5.16462C22.185 4.54 22.9635 3.55846 23.3295 2.37538C22.3785 2.95692 21.3285 3.36769 20.2095 3.59692C19.3065 2.61077 18.0195 2 16.6155 2C13.8915 2 11.6985 4.26769 11.6985 7.04769C11.6985 7.44769 11.7315 7.83231 11.8125 8.19846C7.722 7.99385 4.1025 5.98308 1.671 2.92C1.2465 3.67538 0.9975 4.54 0.9975 5.47077C0.9975 7.21846 1.875 8.76769 3.183 9.66462C2.3925 9.64923 1.617 9.41385 0.96 9.04308C0.96 9.05846 0.96 9.07846 0.96 9.09846C0.96 11.5508 2.6655 13.5877 4.902 14.0569C4.5015 14.1692 4.065 14.2231 3.612 14.2231C3.297 14.2231 2.979 14.2046 2.6805 14.1369C3.318 16.1354 5.127 17.6046 7.278 17.6523C5.604 18.9954 3.4785 19.8046 1.1775 19.8046C0.774 19.8046 0.387 19.7862 0 19.7354C2.1795 21.1769 4.7625 22 7.548 22C16.602 22 21.552 14.3077 21.552 7.64C21.552 7.41692 21.5445 7.20154 21.534 6.98769C22.5105 6.27692 23.331 5.38923 24 4.36769Z"
                    fill="#03A9F4"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400 mr-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733C24 5.40541 18.6274 0 12 0Z"
                    fill="#1877F2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6711 15.4688L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4688H16.6711Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400 mt-0.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.562 3.08105V3.08005C15.123 1.05605 11.941 0.300046 8.89801 0.930046C10.146 2.69905 11.28 4.54005 12.277 6.44905C14.165 5.56905 15.941 4.43405 17.562 3.08105Z"
                    fill="#EC407A"
                  />
                  <path
                    d="M14.275 10.831V10.83C16.552 10.363 18.921 10.319 21.269 10.709C21.2 8.25802 20.278 6.02202 18.783 4.29102C17.018 5.77802 15.078 7.01002 13.017 7.97302C13.469 8.91202 13.887 9.86402 14.275 10.831Z"
                    fill="#EC407A"
                  />
                  <path
                    d="M10.678 7.09705C9.64702 5.14205 8.48002 3.25605 7.17702 1.45605C4.08902 2.69405 1.74902 5.38205 0.986023 8.68105C4.31502 8.82305 7.61002 8.26905 10.678 7.09705Z"
                    fill="#EC407A"
                  />
                  <path
                    d="M12.605 11.2569C12.247 10.3759 11.86 9.5079 11.446 8.6499C8.086 9.9589 4.546 10.5909 0.745002 10.3859C0.588002 13.1959 1.498 15.6809 3.138 17.6259C5.608 14.5589 8.929 12.3609 12.605 11.2569Z"
                    fill="#EC407A"
                  />
                  <path
                    d="M14.905 12.453V12.454C15.722 14.734 16.363 17.078 16.834 19.467C19.152 17.868 20.77 15.342 21.176 12.425C19.074 12.053 16.95 12.069 14.905 12.453H14.905Z"
                    fill="#EC407A"
                  />
                  <path
                    d="M4.354 18.8451H4.355C7.4 21.4281 11.63 22.0141 15.262 20.3521C14.791 17.7911 14.105 15.2851 13.22 12.8511C9.765 13.8611 6.643 15.9351 4.354 18.8451Z"
                    fill="#EC407A"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-20" style={{ width: '1100px' }}></div>

        <div className="text-center text-gray-400 py-12">
          © 2020 CaDesign. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
