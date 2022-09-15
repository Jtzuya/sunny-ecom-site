import React from 'react'
import Image from 'next/image'

import basket from '../../public/basket.svg';
import user from '../../public/user.svg';
import search from '../../public/search.svg';

const Icons = () => {
  return (
    <div className='icon__case'>
      <ul className="icon--links">
        <li className="icon--case">
          <a href="#" className="icon--link">
            <Image src={search} alt="Search Icon" />
          </a>
        </li>
        <li className="icon--case basket" >
          <a href="#" className="icon--link">
            <Image src={basket} alt="Basket Icon" />
          </a>
        </li>
        <li className="icon--case">
          <a href="#" className="icon--link">
            <Image src={user} alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Icons