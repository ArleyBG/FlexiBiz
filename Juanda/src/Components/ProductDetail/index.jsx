import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";//importo context

import "./style.css"

const ProductDetail = () => {

    const {isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);


  return (
    <aside 
    className={isProductDetailOpen ? "detalle-Activado" : "detalle-Inactivo"}>

      <div className='containerCerrar'>
            <h2 className='titulo-Detalle'>Detail</h2>
            <div onClick={()=> closeProductDetail()}  className='containerIconoCerrar'>
               x
            </div>
      </div>
      <figure>
        <img className='imgDetalle' src={productToShow.image} alt={productToShow.title} />
      </figure>
      <p className='containerDetalleProductos'>
      <span className='detalleProductoTitulo'>{productToShow.title}</span>
      <span>{productToShow.description}</span>
      <span className='detallePrecio'>Price: $ {productToShow.price}</span>
      </p>
      
    </aside>
  )
}

export default ProductDetail
