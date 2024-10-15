'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'
import imgSlider1 from 'src/access/images/Programming-rafiki.png'
import imgSlider2 from 'src/access/images/Notes-rafiki.png'
import imgSlider3 from 'src/access/images/Designer-rafiki.png'
import dot_bg from 'src/access/images/dot_bg.png'

import { Media } from '@/components/Media'
import Image from 'next/image'
import './style.css'
const dataSlider = [
  {
    id: 1,
    img: imgSlider3,
    title: 'Graphic Design',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    link: '',
    bgColor: '#68D585',
  },
  {
    id: 1,
    img: imgSlider1,
    title: 'Web Development',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    link: '',
    bgColor: '#473BF0',
  },
  {
    id: 1,
    img: imgSlider2,
    title: 'Content Writing',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    link: '',
    bgColor: '#F64B4B',
  },
]

export const OurService: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Post
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  return (
    <div className="ourService my-16" style={{ textAlign: 'center' }}>
      <p>Our services</p>
      <h2 style={{ maxWidth: 550, margin: '0 auto', marginTop: 20 }}>
        We provide great services for our customers based on needs
      </h2>
      <div className="ourService_slider container my-16 flex items-center gap-4 relative">
        {dataSlider &&
          dataSlider.map((item) => {
            return (
              <div
                key={item.id}
                className="ourService_slider--item flex items-center flex-col p-5 rounded-xl"
                style={{ backgroundColor: `${item?.bgColor}`, color: '#fff' }}
              >
                <Image src={item?.img} alt="" style={{ marginTop: 30 }} />
                <p className="mt-4" style={{ fontSize: 24, fontWeight: 700 }}>
                  {item?.title}
                </p>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                    lineHeight: '29px',
                    opacity: '65%',
                    margin: '15px 20px 45px',
                  }}
                >
                  {item?.desc}
                </p>
                <a style={{ fontSize: 17, fontWeight: 700, marginBottom: 15 }}>Learn more</a>
              </div>
            )
          })}
        <Image
          src={dot_bg}
          alt=""
          className="absolute"
          style={{ right: '-20px', zIndex: -1, bottom: '-50px' }}
        />
      </div>
    </div>
  )
}
