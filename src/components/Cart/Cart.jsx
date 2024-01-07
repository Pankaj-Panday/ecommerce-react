import React from "react";
import css from "./cart.module.css";
import { FaCartShopping } from "react-icons/fa6";

const Cart = ({ items }) => {
	return (
		<div className={css.cartContainer}>
			<FaCartShopping className={css.cartIcon} />
			<span className={css.cartItems}>{items}</span>
		</div>
	);
};

export default Cart;
