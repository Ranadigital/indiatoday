import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Imagecard = () => {
  const [apiData, setapiData] = useState('')
  useEffect(() => {
    async function imageApi() {
      const apiResult = await axios.get("https://fakestoreapi.com/products")
      setapiData(apiResult.data)
    }
    imageApi()
  }, [apiData])


  return (
    <>
      <div className="slider_card box">
        <h5 className="text_head">On Stands Now</h5>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            apiData &&
            (apiData).map((changeData, index) => {
              if (index % 4 === 0) {
                return (
                  <SwiperSlide key={index}><img src={changeData.image} width="150px" /></SwiperSlide>
                )
              }
              else {
                return null;
              }
            })
          }

        </Swiper>
      </div>
    </>
  );
}

export default Imagecard;
