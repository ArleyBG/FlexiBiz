import React, { useState } from 'react';
import './productModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ product, offModal }) => {
  const [quantity, setQuantity] = useState(1);
	const [ingredients, setIngredients] =useState(product.ingredientes || []);
	const [total, setTotal] = useState(product.valor);
	const [accordion, setAccordion] = useState(true);

	const increment = () => {
		setQuantity(quantity + 1);
		setTotal(total + product.valor);
	}

	const decrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
			setTotal(total - product.valor);
		}
	}

	const addIngredient = (ingredient) => {
		if (ingredients.includes(ingredient)) {
			setIngredients(ingredients.filter((i) => i !== ingredient));
		} else {
			setIngredients([...ingredients, ingredient]);
		}
	};

	const addProductAndContinue = () => {
		alert("Producto añadido al carrito")
		offModal();
	};

	const addProductAndPay = () => {
		alert("Ir a pagar")
		offModal();
	};

	const toggleAccordion = () => {
		setAccordion(!accordion);
	}

	return (
		<div className="modal">
			<div className='modal-content'>
				<div className='modal-header'>
					<h2 className='product-name'>{product.nombre}</h2>
					<button className='close-button' onClick={offModal}>
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
						<h4 onClick={toggleAccordion}>
							Personalizarla:
							<span>{accordion ? "▲" : "▼"}</span>
						</h4>
						{accordion && (
							<div className='accordion-content'>
								{product.ingredientes.map((i, index) => (
									<label key={index}>
										<input 
											type='checkbox' 
											checked={ingredients.includes(i)} 
											onChange={() => addIngredient(i)} 
										/>
										{i}
									</label>
								))}
							</div>
						)}
					</div>
				</div>
				<div className='quantity'>
					<div className='quantity-buttons'> 
						<button onClick={decrement}>-</button>
						<span>{quantity}</span>
						<button onClick={increment}>+</button>
					</div>
					<button className='add-product' onClick={addProductAndContinue}>Agregar y seguir comprando</button>
					<button className='pay-product' onClick={addProductAndPay}>Agregar e ir a pagar <strong>${total}</strong></button>
				</div>
			</div>
		</div>
	)
};

export default ProductModal;
