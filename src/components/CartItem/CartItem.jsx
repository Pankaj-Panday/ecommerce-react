import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import { MdDelete } from "react-icons/md";
import css from "./cartitem.module.css";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ id, name, color, size, quantity, price, image }) => {
	const { removeItemFromCart, incrementQuantity, decrementQuantity } =
		useCartContext();

	return (
		<div className={css.itemContainer}>
			<div className={css.nameContainer}>
				<figure className={css.image}>
					<img src={image} alt={name} />
				</figure>
				<div>
					<p className={`${css.lightText} ${css.hide}`}>{name}</p>
					<button
						style={{ background: color }}
						className={css.selectedColor}
					></button>
					<button className={css.selectedSize}>{size}</button>
				</div>
			</div>
			<p className={css.lightText}>
				<FormatPrice price={price} />
			</p>
			<button className={css.quantitySelector}>
				<span
					className={css.decrementBtn}
					onClick={() => decrementQuantity(id)}
				>
					-
				</span>
				<span className={css.quantity}>{quantity}</span>
				<span
					className={css.incrementBtn}
					onClick={() => incrementQuantity(id)}
				>
					+
				</span>
			</button>
			<p className={css.hide}>
				<FormatPrice price={price * quantity} />
			</p>
			<button className={css.deleteBtn} onClick={() => removeItemFromCart(id)}>
				<MdDelete />
			</button>
		</div>
	);
};

export default CartItem;
