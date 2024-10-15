'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'
import avatar from 'src/access/images/Oval.png'

import { Media } from '@/components/Media'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'
const dataSlider = [
  {
    id: 1,
    img: avatar,
    ratingStar: 3,
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    name: 'Franklin Hicks',
    role: 'Web Developer',

  },
  {
    id: 1,
    img: avatar,
    ratingStar: 4,
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    name: 'Franklin Hicks',
    role: 'Web Developer',

  },
  {
    id: 1,
    img: avatar,
    ratingStar: 5,
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    name: 'Franklin Hicks',
    role: 'Web Developer',

  },
]

export const RatingComponent: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Post
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000,
  };
  return (
    <div className="Rating my-16" style={{ textAlign: 'center' }}>
      <div className="container">
        <p>Our services</p>
        <h2 style={{ maxWidth: 550, margin: '0 auto', marginTop: 20 }}>
          We provide great services for our customers based on needs
        </h2>
        <Slider>
          {dataSlider?.map((item) => {
            return (
              <div key={item?.id} className='items-center rating_item_slider'>
                <Image src={item?.img} alt=""/>
                <div className="rating_content">
                  <Rating 
                    value={item?.ratingStar}
                  />
                  <p>{item?.desc}</p>
                  <p>{item?.name}</p>
                  <p>{item?.role}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
