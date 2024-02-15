import React from "react";
import css from "./cart.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
	const { totalItems } = useCartContext();
	return (
		<div className={css.cartContainer}>
			<FaCartShopping className={css.cartIcon} />
			<span className={css.cartItems}>{totalItems}</span>
		</div>
	);
};

export default Cart;
