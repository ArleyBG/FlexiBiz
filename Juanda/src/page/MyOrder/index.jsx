import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layou/index.jsx";
import { ShoppingCartContext } from "../../Context";//importo context

import OrderCard from "../../Components/OrderCard/index.jsx";

function MyOrder() {

  const {order,
        setOrder} = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;

  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (index === 'last') index = order?.length - 1;


  return (
    <Layout>
      mi orden
      <span>
          <Link to="/my-orders" className="">
            <span>mi orden ➜</span>
          </Link>
        </span>
        <div className='containerItemsOrden'>
          {
            order?.[index]?.products.map(itemsAgregados => (
              <OrderCard 
                key={itemsAgregados.id} // asegúrate de que cada item tenga una clave única
                id={itemsAgregados.id}
                title={itemsAgregados.title} 
                imgUlr={itemsAgregados.image} 
                price={itemsAgregados.price} 
              />
            ))
          }
        </div>
    </Layout>
  )
}

export default MyOrder


