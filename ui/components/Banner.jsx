import React from 'react'
import Link from 'next/link'

import { urlFor } from '../LIB/client'

const Banner = ({ acceptBannerData }) => {

  const smallText = acceptBannerData.smallText
  const midText = acceptBannerData.midText
  const largeText1 = acceptBannerData.largeText1
  const largeText2 = acceptBannerData.largeText2
  const image = acceptBannerData.image
  const productSlug = acceptBannerData.product
  const buttonText = acceptBannerData.buttonText

  return (
    <section className="banner__case w-desk">

    <p>{ smallText }</p> 
    <h3>{ midText }</h3>
    <h1>{ largeText1 }</h1>
    <h1>{ largeText2 }</h1>

    <img src={urlFor(image)} alt="blender" />

    <div>
      <Link href={`/product/${productSlug}`}>
        <button type="button">{ buttonText }</button>
      </Link>
    </div>

    </section>
  )
}

export default Banner