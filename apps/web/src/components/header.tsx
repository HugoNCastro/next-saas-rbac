import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1280px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logo} className="size-6 dark:invert" alt="Logo" />
      </div>

      <div className="flx items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
