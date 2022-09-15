import React from 'react'
import Image from 'next/image'

import logo from '../../public/sunny.svg'

const Logo = () => {
  return (
    <div className="logo__case">
      <Image 
        src={logo} 
        className="image--logo"
        alt="Welcome to our Site!"
        
      />
    </div>
  )
}

export default Logo