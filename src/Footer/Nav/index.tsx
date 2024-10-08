'use client'
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
    <div>
      <h2 className="font-bold mb-4">{label}</h2>
      <ul className="space-y-2">
        {groups?.map((element, i) => {
          return (
            <li key={i}>
              <a href="#" className="hover:underline">
                {element.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
