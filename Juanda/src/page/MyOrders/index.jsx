
import { Link } from "react-router-dom";
import { useContext } from "react";
import Layout from "../../Components/Layou/index.jsx";

import { ShoppingCartContext } from "../../Context";//importo context

import OrdersCard from "../../Components/OrdersCard/index.jsx"

function MyOrders() {

  const {order} = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
      mis ordenes
        {
          order.map((order, index)=>(
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>
          ))
        }

      </Layout>
    </>
  )
}

export default MyOrders



