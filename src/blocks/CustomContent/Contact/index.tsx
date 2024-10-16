'use client'
import Link from 'next/link'
import React from 'react'

export const ContactBanner = (props) => {
  const formInput = {
    padding: '0 20px',
    height: '55px',
    backgroundColor: '#fafafa',
    color: '#696969',
    width: '100%',
    marginBottom: '10px',
    border: '1px solid #d0dcec',
  }

  return (
    <>
      <div
        style={{
          marginTop: '-8rem',
          backgroundImage:
            'url(https://kyanon.digital/wp-content/uploads/2021/05/bg-thanh-tich.jpg)',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col items-center text-white capitalize">
          <div
            style={{ paddingTop: '6.5rem', paddingBottom: '23px' }}
            className="text-5xl font-bold"
          >
            <h1>contact us</h1>
          </div>
          <div style={{ paddingBottom: '5.75rem' }} className="flex">
            <Link href={'#'}>home</Link>
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
            <Link href={'#'}>contact us</Link>
          </div>
        </div>
      </div>

      <section style={{ margin: '112px 105px 0' }}>
        <section
          style={{
            backgroundImage: 'url(https://kyanon.digital/wp-content/uploads/2021/06/bg_05.png)',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex pt-20">
            <div className="p-5 relative" style={{ flex: '0 0 47%' }}>
              <div className="absolute" style={{ top: '30%' }}>
                <img
                  src="https://kyanon.digital/wp-content/uploads/2021/05/image_03.png"
                  alt=""
                  width={480}
                  height={425}
                />
              </div>
            </div>
            <div className="p-5 capitalize" style={{ flex: '0 0 53%' }}>
              <div className="font-semibold text-lg" style={{ color: '#f0413c' }}>
                <h6>Get the X-factor your business needs</h6>
              </div>
              <div
                className="text-4xl font-semibold my-5"
                style={{ lineHeight: '3rem', color: '#323232' }}
              >
                <h2>We deliver the solutions that matter! Ask us Now</h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Your Name*" size={40} style={formInput} />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Business Phone Number*"
                      size={40}
                      style={{ ...formInput }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email*"
                      size={40}
                      style={{ ...formInput }}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Message*"
                      size={40}
                      style={{ ...formInput }}
                    />
                  </div>

                  <div
                    className="capitalize text-lg font-semibold my-4"
                    style={{ color: 'rgba(50, 50, 50, .8)' }}
                  >
                    <h4>Do you have any budget in mind?</h4>
                  </div>

                  <div className="relative mt-8 pt-5 mb-5">
                    <span
                      className="absolute"
                      style={{
                        width: '82%',
                        height: '5px',
                        backgroundColor: '#c4c4c4',
                        transform: 'translate(-50%, 0)',
                        top: '0',
                        left: '50%',
                      }}
                    ></span>
                  </div>

                  <div className="relative">
                    <input type="text" placeholder="File Upload <2MB" readOnly style={formInput} />
                    <input type="file" id="file-input" style={{ display: 'none' }} />
                    <label
                      htmlFor="file-input"
                      className="absolute"
                      style={{
                        padding: '10px 15px',
                        top: '5px',
                        right: '5px',
                        border: '1px solid #d0dcec',
                      }}
                    >
                      Browser
                    </label>
                  </div>
                  <div className="mt-5">
                    <button
                      className="py-3 px-6 font-semibold capitalize hover:shadow"
                      style={{
                        background:
                          'linear-gradient(90deg, #ba1419 -4.27%, #f0413c 50.32%, #f0413c 103.65%);',
                        color: '#fff',
                        borderRadius: '4px',
                      }}
                    >
                      send message
                      <span
                        className="inline-block capitalize"
                        style={{
                          backgroundImage:
                            'url(https://kyanon.digital/wp-content/themes/softek/vtm/assets/images/arrow-1.svg)',
                          height: '10px',
                          width: '50px',
                          marginLeft: '10px',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative"
          style={{
            backgroundImage:
              'url(https://kyanon.digital/wp-content/uploads/2021/05/element-bgd-1.png)',
          }}
        >
          <div
            className="absolute"
            style={{
              backgroundImage: 'url(https://kyanon.digital/wp-content/uploads/2021/06/bg_04.png)',
              backgroundSize: '250px auto',
              backgroundPosition: 'bottom right',
              width: '100%',
              height: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="py-20 relative">
            <div className="flex flex-col" style={{ padding: '10px' }}>
              <div className="font-semibold text-lg" style={{ color: '#f0413c' }}>
                <h6>Contact us</h6>
              </div>
              <div className="font-semibold capitalize pb-3" style={{ fontSize: '2.25rem' }}>
                <h2>get in touch</h2>
              </div>
            </div>

            <div>
              <div className="flex">
                <div
                  className="flex flex-col flex-1"
                  style={{ padding: '15px 0 0 10px', fontSize: '14px' }}
                >
                  <div className="font-semibold mb-5 uppercase" style={{ color: '#F0413CCC' }}>
                    <span>vietnam</span>
                  </div>
                  <div className="mb-5">
                    <p>
                      <strong>Office 01:</strong> 294-296 Truong Sa, Ward 2, Phu Nhuan District,
                      HCMC
                    </p>
                  </div>
                  <div className="mb-5">
                    <p>
                      <strong>Office 02:</strong> 09 Hoa Cau, Ward 7, Phu Nhuan District, HCMC
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.528 12.5909L15.0108 10.1967C14.1117 9.34167 12.5834 9.68373 12.2238 10.7953C11.9541 11.5649 11.0551 11.9924 10.246 11.8214C8.44795 11.3938 6.02061 9.17065 5.57111 7.375C5.3014 6.6054 5.84081 5.75033 6.64992 5.49384C7.81864 5.15181 8.17825 3.69819 7.27923 2.84312L4.76199 0.448913C4.04278 -0.149638 2.96397 -0.149638 2.33466 0.448913L0.626529 2.07355C-1.0816 3.7837 0.806332 8.31558 5.0317 12.3344C9.25706 16.3533 14.0218 18.2345 15.8199 16.5243L17.528 14.8996C18.1573 14.2156 18.1573 13.1895 17.528 12.5909Z"
                        fill="#323232"
                      ></path>
                    </svg>
                    <a href="tel:(+84) 283 5171 080">(+84) 283 5171 080 </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9326 6.77138L18.0009 10.908V2.46008L11.9326 6.77138Z"
                        fill="#323232"
                      ></path>
                      <path d="M0 2.46008V10.908L6.06836 6.77138L0 2.46008Z" fill="#323232"></path>
                      <path
                        d="M16.8757 0H1.12544C0.564062 0 0.118556 0.451267 0.0341797 1.03233L9.00055 7.40224L17.9669 1.03233C17.8825 0.451267 17.437 0 16.8757 0Z"
                        fill="#323232"
                      ></path>
                      <path
                        d="M10.9005 7.50402L9.30865 8.63461C9.21415 8.70133 9.10727 8.73408 8.99927 8.73408C8.89127 8.73408 8.78439 8.70133 8.68989 8.63461L7.098 7.50281L0.0351562 12.3199C0.121782 12.8962 0.565038 13.3438 1.12417 13.3438H16.8744C17.4335 13.3438 17.8768 12.8962 17.9634 12.3199L10.9005 7.50402Z"
                        fill="#323232"
                      ></path>
                    </svg>
                    <a href="mailto:contact@kyanon.digital">contact@kyanon.digital</a>
                  </div>
                </div>

                <div
                  className="flex flex-col flex-1"
                  style={{ padding: '15px 0 0 10px', fontSize: '14px' }}
                >
                  <div className="font-semibold mb-5 uppercase" style={{ color: '#F0413CCC' }}>
                    <span>singapore</span>
                  </div>
                  <div className="mb-5">
                    <p>7 Straits View, Marina One East Tower, #05-01, Singapore 018936</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9326 6.77138L18.0009 10.908V2.46008L11.9326 6.77138Z"
                        fill="#323232"
                      ></path>
                      <path d="M0 2.46008V10.908L6.06836 6.77138L0 2.46008Z" fill="#323232"></path>
                      <path
                        d="M16.8757 0H1.12544C0.564062 0 0.118556 0.451267 0.0341797 1.03233L9.00055 7.40224L17.9669 1.03233C17.8825 0.451267 17.437 0 16.8757 0Z"
                        fill="#323232"
                      ></path>
                      <path
                        d="M10.9005 7.50402L9.30865 8.63461C9.21415 8.70133 9.10727 8.73408 8.99927 8.73408C8.89127 8.73408 8.78439 8.70133 8.68989 8.63461L7.098 7.50281L0.0351562 12.3199C0.121782 12.8962 0.565038 13.3438 1.12417 13.3438H16.8744C17.4335 13.3438 17.8768 12.8962 17.9634 12.3199L10.9005 7.50402Z"
                        fill="#323232"
                      ></path>
                    </svg>
                    <a href="mailto:contact@kyanon.digital">contact@kyanon.digital</a>
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
