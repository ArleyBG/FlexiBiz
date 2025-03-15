import React from 'react'

const OrderCard = props => {

    const {id, title, imgUlr, price, handleDelete} = props;

    let renderXMarkIcon;

    if (handleDelete) {

        renderXMarkIcon = <span className='eliminarItemAgregado' onClick={() => handleDelete(id)} >x</span>

    }

    return (
        <div className='containerCardOrder'>
            <div className=''>
                <div className='containerImgTitleMyOrden'>
                    <figure>
                        <img className='imgenOrderProduct' src={imgUlr} alt={title} />
                    </figure>
                    <p className='titleCardMyOrder'>{title}</p>
                    <div className='containerPrecio'>
                    </div>
                </div>
                <p className='textoPrecioMyOrder'>$ {price}</p>
            </div>
            {renderXMarkIcon}
        </div>
    )
}

export default OrderCard
