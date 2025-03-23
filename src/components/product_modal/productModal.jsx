import React, { useState } from 'react';
import './productModal.css'

const ProductModal = ({ product, offModal }) => {
  const [quantity, setQuantity] = useState(1);
	const [ingredients, setIngredients] =useState(product.ingredientes || []);
	const [total, setTotal] = useState(product.valor);

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

	return (
		<div className="modal">
			<div className='modal-content'>
				<button className='close-button' onClick={offModal}>X</button>
				<img src={product.imagen} alt={product.nombre} className='product-image' />
				<h2 className='product-name'>{product.nombre}</h2>
				<p className='product-description'>{product.descripcion}</p>
				<p className='product-valor'><strong>Precio:</strong> ${product.valor}</p>
				<div className='ingredientes'>
					<h4>Ingredientes:</h4>
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
				<div className='quantity'>
					<button onClick={decrement}>-</button>
					<span>{quantity}</span>
					<button onClick={increment}>+</button>
				</div>
				<p className='total'><strong>Total:</strong> ${total}</p>
				<button className='add-product' onClick={addProductAndContinue}>Añadir al carrito y continuar comprando</button>
				<button className='pay-product' onClick={addProductAndPay}>Agregar e ir a pagar</button>
			</div>
		</div>
	)
};

export default ProductModal;
