import { NavLink } from "react-router-dom";
import React, { useContext } from 'react'
import { ShoppingCartContext } from "../../Context";//importo context

import OrderCard from "../OrderCard/index";

import {totalPrice} from "../../utils"

import "./style.css"

const ChecKoutSideMenu = () => {

    const {
        closeProductDetail,
        closeChecKoutSideMenu, 
        isChecKoutSideMenu,
        cardProducts,
        setCardProducts,
        order,
        setOrder,
        setSearchByTitle
    } = useContext(ShoppingCartContext);


    const cerrarModales = () => {
        closeChecKoutSideMenu();
        closeProductDetail();
    }

    const handleDelete = (id) =>{
        const filteredProducts = cardProducts.filter(product => product.id != id)
        setCardProducts(filteredProducts);
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date: "01.07.24",
            products: cardProducts,
            totalProducts: cardProducts.length,
            totalPrice: totalPrice(cardProducts),
        }
        setOrder([...order, orderToAdd]);
        setCardProducts([]);
        setSearchByTitle(null)
    }

    return (
        <aside 
            className={isChecKoutSideMenu ? "detalle-Activado" : "detalle-Inactivo"}
        >
            <div className='containerCerrar'>
                <h2 className='titulo-Detalle'>Mi cuenta</h2>
                <div onClick={() => cerrarModales()} className='containerIconoCerrar'>
                    x
                </div>
            </div>
            <div className='containerItemsOrden'>
            {
                cardProducts.map(itemsAgregados => (
                    <OrderCard 
                        key={itemsAgregados.id} // asegúrate de que cada item tenga una clave única
                        id={itemsAgregados.id}
                        title={itemsAgregados.title} 
                        imgUlr={itemsAgregados.image} 
                        price={itemsAgregados.price} 
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='containerTotalOrden'>
                <p className='precioTotalOrden'>
                    <span>Total:</span>
                    <span>$ {totalPrice(cardProducts)}</span>
                </p>
                <NavLink to="/my-orders/last">
                    <button className='' onClick={()=> handleCheckout()}>Pagar</button>
                </NavLink>
                
            </div>
        </aside>
    )
}

export default ChecKoutSideMenu
