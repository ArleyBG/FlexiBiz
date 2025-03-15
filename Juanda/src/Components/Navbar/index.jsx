import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import "./navbar.css"
import { useContext } from "react";
import carrito from "../../assets/carro-de-la-carretilla.png"

const Navbar = () =>{

    const {openChecKoutSideMenu,setSearchByCategory, cardProducts} = useContext(ShoppingCartContext);

    let activeStyle ={
        textDecoration:"underline",
    }

    const verDetalle = () => {
        console.log("Mostrar Carrito");
       // setCardProducts([...cardProducts, productData]);
        openChecKoutSideMenu();
    }
    return (
        <nav className="navbar">
            <ul className="navbar ul">
                <li className="negrilla">
                    <NavLink to='/'
                     onClick={() => setSearchByCategory('')}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tecnologia'
                      onClick={() => setSearchByCategory('tecnologia')}
                      style={({isActive}) => isActive ? activeStyle : undefined} // Esto es algo propio de NavLink, y nos permite pasarle un stylo si este esta Activo
                    >
                        Electrónica
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/muebles'
                      onClick={() => setSearchByCategory('muebles')}
                      style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Muebles
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/instrumentos-musicales'
                      onClick={() => setSearchByCategory('instrumentos musicales')}
                      style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Instrumentos musicales
                    </NavLink>
                </li>
            </ul>
            <ul className="navbar ul">
                <li>
                    <NavLink to='/my-orders'
                     style={({isActive}) => isActive ? activeStyle : undefined}>
                        Mis Pedidos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                     style={({isActive}) => isActive ? activeStyle : undefined}>
                        Mi Cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                     style={({isActive}) => isActive ? activeStyle : undefined}>
                       Iniciar sesión
                    </NavLink>
                </li>
                <li className="containerCarrito" onClick={() => verDetalle()}>
                    <img src={carrito} alt="carrito" />
                    <span>{cardProducts.length}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;