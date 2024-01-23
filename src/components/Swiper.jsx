import React from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register()

export const Swiper = ({listing}) => {
    const swiperElRef = useRef(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      });
    }, []);

  return (
    <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
    >
    {listing?.imageUrls?.map((url, index) => (
        <swiper-slide key={index}>
          <div
            style={{
              background: `url(${listing.imageUrls[index]}) center no-repeat`,
              backgroundSize: 'cover',
              height: '35vh'
            }}
            className='swiperSlideDiv'
          ></div>
        </swiper-slide>  
    ))}
    </swiper-container>
  )
}
