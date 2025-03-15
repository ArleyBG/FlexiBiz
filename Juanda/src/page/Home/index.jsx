
import { useState, useEffect } from "react"

import Layout from "../../Components/Layou/index.jsx";
import Card from "../../Components/Card/index.jsx";
import ProductDetail from "../../Components/ProductDetail/index.jsx"
import React, { useContext } from 'react'
import { ShoppingCartContext } from "../../Context";//importo context
import buscar from "../../assets/lupa.png"
//import { data } from "autoprefixer";

import "./index.css"


function Home() {


  const { items, setItems, setSearchByTitle, searchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const RenderView = () => {

    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map((itemIterado) => (
          <Card data={itemIterado} key={itemIterado.id} />
        ))

      )
    } else {
      return (
        <h3 className="productoNoExiste">Aun no contamos con ese Producto:( </h3>
      )

    }
  }

  return (
    <>
      <Layout>
        <h1>Explora y Descubre productos increíbles para ti.</h1>
        <div className="containerBucadorProductos">
          <input
            type="text"
            placeholder="Buscar productos increíbles para ti"
            className="inputFiltroGeneral"
            onChange={(event) => setSearchByTitle(event.target.value)}
          />
          <img src={buscar} alt="buscar productos" />
        </div>

        <div className="containerGridCard">
          {
            <RenderView />
          }
        </div>

        <ProductDetail />
      </Layout>
    </>


  )
}

export default Home
