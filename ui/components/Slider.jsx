import { React, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image'

import { urlFor } from '../LIB/client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import deliverIco from '../public/deliver.svg'
import playIco from '../public/play.svg'

const Slider = ({ sliderData }) => {
    const [my_swiper, set_my_swiper] = useState({});
    const { featureHeading, heading, subheading, cartText, videoText, image, price, variant } = sliderData;
    return (
        <section className="slide__case w-desk">
            <div className="slide--content">
                <div className="slide-feature__case">
                    <span className="feature--heading">{ featureHeading }</span>
                    <span className="feature--icon"><Image src={ deliverIco } /></span>
                </div>
                <h1 className="slide--heading">{ heading }</h1>
                <p className="slide--subheading">{ subheading }</p>
                <div className="slide-cta__case">
                    <div className="cta--cart">{ cartText }</div>
                    <div className="cta--video">
                        <span className="video--icon"><Image src={ playIco } /></span>
                        <span className="video--text">{ videoText }</span>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
                loop={true}
            >
                <SwiperSlide className='swiper__case'>
                    <div className="swiper--image">
                        {/* {image?.forEach((image, i) => {
                        })} */}
                        <img 
                            src={urlFor(image[0])} 
                            max-width={610}
                            max-height={761}
                            className="swiper-img"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slide--navigation">
                <span className="slide--details">Details</span>
                <h2 className="slide--price">${ price }</h2>
                <div className="slide--variant">{ variant }</div>
                <div className="slide--star-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <div className="slider--buttons">
                    <button type="button" onClick={() => my_swiper.slidePrev()}><HiChevronLeft /></button>
                    <button type="button" onClick={() => my_swiper.slideNext()}><HiChevronRight /></button>
                </div>
            </div>
        </section>
    )
}

export default Slider