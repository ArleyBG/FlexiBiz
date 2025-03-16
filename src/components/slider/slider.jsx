import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import Button from '../button/button';

const Slide = ({ burgers }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {burgers.map((burger, index) => (
        <SwiperSlide key={index}>
          <div className="description-card">
            <div className='container-img'>
              <img src={burger.img} alt={burger.nombre} className="img-card" />
              <Button />
            </div>
            <h2 className="name-product">{burger.nombre}</h2>
            <p className="valor-product">${burger.valor.toFixed(2)}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slide;