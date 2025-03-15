import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";//importo context
import "./index.css"

const Card = (data) => {

    // const context = useContext(ShoppingCartContext)//uso mi contexto shoppingCartContext creado y creo una vaiable apartir de este para usar mi estado useState
    const {
        count,
        setCount,
        openProductDetail,
        productToShow,
        setProductToShow,
        cardProducts,
        setCardProducts,
        openChecKoutSideMenu,
        closeChecKoutSideMenu } = useContext(ShoppingCartContext)//uso de destructuracion ya que ShoppingCartContext es como con array con valores


    const verDetalle = (productoDetail) => {
        openProductDetail();
        setProductToShow(productoDetail)
        closeChecKoutSideMenu();
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        setCount(count + 1);
        setCardProducts([...cardProducts, productData]);
        openChecKoutSideMenu()

    }

    const renderIcon = (id) => {
        const isInCart = cardProducts.filter(product => product.id === id).length > 0;

        if (isInCart) {

            return (
                <div className="iconoMas elementoAgregado" >
                    ✓
                </div>
            )
        } else {

            return (
                <div onClick={(event) => addProductsToCart(event, data.data)} className="iconoMas" >
                    +
                </div>
            )
        }

    }

    return (

        <div
            className="cardSitioCompras"
            onClick={() => verDetalle(data.data)}>
            <figure>
                <span className="tituloCarSitioCompras">{data.data.category.name}</span>
                <img className="imgCardSitioCompras" src={data.data.image} alt="" />
                {renderIcon(data.data.id)}
            </figure>
            <p className="inforCardSitioCompras">
                <span className="tituloArticulo">{data.data.title}</span>
                <span className="precioArticulo">$ {data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;