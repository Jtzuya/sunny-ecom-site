import React from 'react'

import { Icons, Links, Logo } from './sub-components'

const Header = () => {
  return (
    <header className='header__case w-desk'>
      <Logo />
      <Links />
      <Icons />
    </header>
  )
}

export default Header