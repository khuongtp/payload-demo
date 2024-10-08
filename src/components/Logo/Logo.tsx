import { Header as HeaderType } from '@/payload-types'
import React from 'react'

export const Logo: React.FC<{ header: HeaderType }> = ({ header }) => {
  const DEFAULT_LOGO =
    'https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg'
  const logo = header?.logo ?? DEFAULT_LOGO
  const logoURL = typeof logo === 'string' ? logo : (logo?.url ?? '')

  return (
    <img
      alt="Payload Logo"
      className={`max-w-[9.375rem] ${logoURL === DEFAULT_LOGO ? 'invert dark:invert-0' : ''}`}
      src={logoURL}
    />
  )
}
