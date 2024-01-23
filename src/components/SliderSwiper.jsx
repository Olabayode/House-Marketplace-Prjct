import React from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { useNavigate } from 'react-router-dom';

register()

export const SliderSwiper = ({listings}) => {
    const swiperElRef = useRef(null);
    const navigate = useNavigate()

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
        {listings.map(({ data, id }) => (
            <swiper-slide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                  height: '35vh'
                }}
                className='swiperSlideDiv'
              >
                <p className='swiperSlideText'>{data.name}</p>
                <p className='swiperSlidePrice'>
                  ${data.discountedPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/ month'}
                </p>
              </div>
            </swiper-slide>
          ))}

    </swiper-container>
  )
}
