import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import Button from "../button/button";

// Componente que muestra cada producto en el slider
const Slide = ({ burgers, productClick }) => {
  // recibe las props del componente Card y la función para manejar el evento del click

  // Renderizado
  return (
    <>
      <Swiper
        // Controla la cantidad de sliders según el tamaño de la pantalla
        slidesPerView="2"
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1840: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true, // permite hacer click en los puntos de pagination
        }}
        modules={[Pagination]} // importa el módulo de pagination
        className="mySwiper"
      >
        {/* Mapea los productos y renderiza cada uno en el slider */}
        {burgers.map((burger) => (
          <SwiperSlide key={burger.id} className="burger-id">
            <div
              className="description-card"
              onClick={() => productClick(burger)} // Pasar las props a la función 
            >
              <div className="container-img">
                <img
                  src={burger.imagen}
                  alt={burger.nombre}
                  className="img-card"
                />
                <Button />
              </div>
              <h4 className="name-product">{burger.nombre}</h4>
              <p className="valor-product">${burger.valor}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slide;
