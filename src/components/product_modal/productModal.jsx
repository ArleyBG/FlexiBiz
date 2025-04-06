import React, { useState } from 'react';
import './productModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// Componente que muestra el modal del producto

// Recibe las props del producto y la función para cerrar el modal
const ProductModal = ({ product, offModal }) => {
  const [quantity, setQuantity] = useState(1); // cantidad del producto
	const [ingredients, setIngredients] =useState(product.ingredientes || []); // ingredientes seleccionados
	const [total, setTotal] = useState(product.valor); // total del producto
	const [accordion, setAccordion] = useState(true); // estado del acordeón

	// Funciones
	const increment = () => { // Incrementar la cantidad y el total
		setQuantity(quantity + 1);
		setTotal(total + product.valor);
	}

	// Disminuir la cantidad y el total
	const decrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
			setTotal(total - product.valor);
		}
	}

	// Agregar o quitar ingredientes
	// Si el ingrediente ya está seleccionado, lo quita, si no lo agrega 
	const addIngredient = (ingredient) => {
		if (ingredients.includes(ingredient)) {
			setIngredients(ingredients.filter((i) => i !== ingredient));
		} else {
			setIngredients([...ingredients, ingredient]);
		}
	};

	// Agregar el producto al carrito y continuar comprando
	const addProductAndContinue = () => {
		alert("Producto añadido al carrito")
		offModal();
	};

	// Agregar el producto al carrito y pagar
	const addProductAndPay = () => {
		alert("Ir a pagar")
		offModal();
	};

	// Cambiar el estado del acordeón
	// Si el acordeón está abierto, lo cierra, si no lo abre
	const toggleAccordion = () => {
		setAccordion(!accordion);
	}

	// Renderizado
	return (
		// Modal que muestra el producto seleccionado
		<div className="modal">
			<div className='modal-content'>
				<div className='modal-header'>
					<h2 className='product-name'>{product.nombre}</h2>
					<button className='close-button' onClick={offModal}> {/* Cerrar el modal */ }
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				</div>
				<div className='modal-body'>
					<div className='product-image-container'> 
						<img src={product.imagen} alt={product.nombre} className='product-image' />
					</div>
					<div className='product-ingredients'>
						<p className='product-valor'><strong>$ {product.valor}</strong></p>
						<p className='product-description'>{product.descripcion}</p>

						{/* Muestra los ingredientes seleccionados */}
						<h4 onClick={toggleAccordion}>
							Personalizarla:
							<span>{accordion ? "▲" : "▼"}</span>
						</h4>
						{accordion && ( // si es true, muestra los ingredientes
							<div className='accordion-content'>
								{product.ingredientes.map((i, index) => (
									<label key={index}>
										<input 
											type='checkbox' // checkbox para seleccionar ingredientes
											checked={ingredients.includes(i)} // si el ingrediente está seleccionado lo marca y si no lo desmarca
											onChange={() => addIngredient(i)} // función que se ejecuta cuando el checkbox cambia de estado, Si el ingrediente está seleccionado, lo quita, si no lo agrega
										/>
										{i} {/* nombre del ingrediente */}
									</label>
								))}
							</div>
						)}
					</div>
				</div>
				<div className='quantity'>
					<div className='quantity-buttons'> 
						{/* Botones para aumentar y disminuir la cantidad */}
						<button onClick={decrement}>-</button>
						<span>{quantity}</span>
						<button onClick={increment}>+</button>
					</div>
					{/* Botones para añadir al carrito */}
					<button className='add-product' onClick={addProductAndContinue}>Agregar y seguir comprando</button>
					<button className='pay-product' onClick={addProductAndPay}>Agregar e ir a pagar <strong>${total}</strong></button>
				</div>
			</div>
		</div>
	)
};

export default ProductModal;
