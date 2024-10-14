'use client'
import Link from 'next/link'
import React from 'react'

export const HomeContent = (props) => {
  return (
    <div>
      <div className="flex mx-40 my-20">
        <div className="flex-1">
          <img
            src="/api/media/file/home-content.png"
            alt=""
            style={{ height: '540px', width: '540px', objectFit: 'cover', borderRadius: '2rem' }}
          />
        </div>
        <div className="flex-1 ml-32 my-14">
          <div
            style={{ letterSpacing: '0.25rem' }}
            className="text-sm font-bold opacity-50 uppercase"
          >
            <h3>perfect design</h3>
          </div>
          <div style={{ letterSpacing: '-2px' }} className="font-bold text-5xl mt-6">
            <h1>Organized Layers and Groups</h1>
          </div>
          <div style={{ letterSpacing: '-0.4px' }} className="mt-10 text-lg">
            <p>
              With a team of highly experienced designers, we have done it carefully and simply. The
              components work together to create a beautiful landing. It is essential template for
              designers
            </p>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#FFDDA9',
                letterSpacing: '-0.36px',
                borderRadius: '1.75rem',
              }}
              className="mt-16 text-base font-bold py-4 px-24 capitalize"
            >
              <Link href={'#'}>explore</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
