import { useEffect, useState } from "react";
import './card.css'
import Slide from '../../components/slider/slider'
import Products from '../../data/products.json'
import ProductModal from '../../components/product_modal/productModal'

const Card = () => {
  const [burgers, setBurgers] = useState([]);
  const [error, setError] = useState(null);
  const [selectProduct, setSelectProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      setBurgers(Products.Hamburguesas);
    } catch (error) {
      console.error("Error al cargar los datos", error)
      setError(error.message)
    }
  }, []);

  const onProductClick = (product) => {
    setSelectProduct(product);
    setShowModal(true);
  }

  const offModal = () => {
    setShowModal(false);
    setSelectProduct(null);
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="slider">
      <h1 className="title-card">Starters</h1>
        <Slide burgers={burgers} productClick={onProductClick} /> {/* pasar función al slider */}
        {showModal && ( // si showModal es true, muestra el modal
          <ProductModal
            product={selectProduct} // pasar el producto seleccionado al modal
            offModal={offModal} // pasar función para cerrar el modal
          />
        )}
    </div>
  );
};
 
export default Card;

