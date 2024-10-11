'use client'
import Link from 'next/link'
import React from 'react'
type FooterType = {
  label?: string | null
  groups?:
    | {
        label?: string | null
        id?: string | null
      }[]
    | null
}
export const FooterNav: React.FC<FooterType> = (props) => {
  const { label, groups } = props
  return (
    <div className="w-[160px] mr-5">
      <h3 className="font-bold mb-4">{label}</h3>
      <div className="flex flex-col opacity-50 text-sm space-y-4">
        {groups?.map((group, i) => {
          return (
            <Link key={i} href={'#'}>
              {group.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
