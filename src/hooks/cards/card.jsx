import { useEffect, useState } from "react";
import './card.css'
import Slide from '../../components/slider/slider'
import Products from '../../data/products.json'

const Card = () => {
  const [burgers, setBurgers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setBurgers(Products.Hamburgesas);
    } catch (error) {
      console.error("Error al cargar los datos", error)
      setError(error.message)
    }
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="slider">
      <h1 className="title-card">Starters</h1>
        <Slide burgers={burgers} />
    </div>
  );
};
 
export default Card;

