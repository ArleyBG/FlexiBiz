import React from 'react'

import "./styles.css"

const OrdersCard = props => {

    const { totalPrice, totalProducts} = props;


    return (
        <div className='containerCardOrder'>
            <p>
                <span className='fechaPedido'>01.02.2024</span>
                <span className='precioPedido'>$ {totalPrice}</span>
                <span className='totalPedido'>Total Productos: {totalProducts}</span>
            </p>
        </div>
    )
}

export default OrdersCard
