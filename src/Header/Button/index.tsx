'use client'

import React from 'react'

import Link from 'next/link'

type ButtonLinkType = {
  url?: string | null
  label?: string | null
  appearance?: ('default' | 'outline') | null
}

export const HeaderButton: React.FC<ButtonLinkType> = (props) => {
  const { url, label, appearance } = props

  if (appearance === 'default') {
    return <Link href={url || ''}>{label}</Link>
  }

  return (
    <>
      <button
        className="p-4"
        style={{ backgroundColor: 'hsla(36, 100%, 83%, 1)', borderRadius: '28px' }}
      >
        <Link href={url || ''}>{label}</Link>
      </button>
    </>
  )
}
