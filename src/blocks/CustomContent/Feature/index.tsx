'use client'
import Link from 'next/link'
import React from 'react'

export const HomeFeature = (props) => {
  return (
    <div>
      <div className="flex mx-40 my-20">
        <div className="flex-1 mr-32">
          <div style={{ letterSpacing: '-0.125rem' }} className="font-bold text-5xl">
            <h1>Landing Page Template for Your Startup</h1>
          </div>
          <div className="mt-10 text-lg tracking-tight">
            <p>
              We've done it carefully and simply. Combined with the ingredients makes for beautiful
              landings.
            </p>
          </div>
          <div className="mt-20">
            <div style={{ letterSpacing: '-0.36px' }} className="font-bold text-base">
              <button
                style={{
                  backgroundColor: '#FFDDA9',
                  borderRadius: '28px',
                }}
                className="capitalize py-4 px-12"
              >
                <Link href={'#'}>explore all features</Link>
              </button>
              <button
                style={{
                  borderRadius: '28px',
                  letterSpacing: '-0.36px',
                }}
                className="border-2 capitalize py-4 px-9 ml-7"
              >
                <Link href={'#'}>learn more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-12 relative">
          <img
            src="/api/media/file/home-feature.png"
            alt=""
            style={{ height: '304px', objectFit: 'contain', borderRadius: '2rem' }}
          />

          <div
            style={{
              borderRadius: '50%',
              width: '5rem',
              height: '5rem',
              top: '112px',
              left: '185px',
              backgroundColor: '#FFDDA9',
            }}
            className="absolute"
          >
            <div
              style={{
                // borderRadius: '50%',
                // width: '1.75rem',
                // height: '1.75rem',
                // backgroundColor: '#391484',
                top: '25px',
                left: '28px',
                width: 0,
                height: 0,
                borderTop: '0.875rem solid transparent',
                borderBottom: '0.875rem solid transparent',
                borderLeft: '1.75rem solid #391484',
              }}
              className="border-2 absolute"
            ></div>
          </div>

          {/* <div
            style={{ borderRadius: '50%', width: '5rem', height: '5rem' }}
            className="border-2 relative"
          >
            <div
              style={{
                borderRadius: '50%',
                width: '1.75rem',
                height: '1.75rem',
                backgroundColor: '#391484',
                top: '26px',
                left: '26px',
              }}
              className="border-2 absolute"
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
