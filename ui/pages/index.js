import React from 'react'

import { client } from '../LIB/client';
import { Header, Product, Banner, Footer, Slider, UnavailableReso } from '../components'

const Home = ({ products, bannerData, sliderData }) => {
  return (
    <div className="index__case">
      <Header />
      
      {/* {sliderData?.map((data) =>  */}
        <Slider sliderData={sliderData.length && sliderData[0]} />
      {/* // )} */}

      {/* {console.log(sliderData.map(data => data))} */}

      {/* <Banner acceptBannerData={bannerData.length && bannerData[0]} /> */}
        {/* {console.log(bannerData)} */}
      {/* <div>
        {products?.map((product) => product.name)}
      </div> */}

      {/* <Footer /> */}
      <UnavailableReso />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const sliderQuery = '*[_type == "slider"]';
  const sliderData = await client.fetch(sliderQuery);

  return {
    props: { products, bannerData, sliderData }
  }
}

export default Home