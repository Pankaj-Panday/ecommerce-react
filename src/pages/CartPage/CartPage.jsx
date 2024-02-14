import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.jsx";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter.jsx";
import FormatPrice from "../../helper/FormatPrice.jsx";
import css from "./cartpage.module.css";

import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem.jsx";

const CartPage = () => {
	const {
		cartItems,
		totalPrice,
		totalItems,
		shippingCharge,
		clearAllItemsFromCart,
	} = useCartContext();
	const cartEmpty = cartItems.length === 0;

	return (
		<>
			<SecondaryHeader />
			<main className="mainContainer">
				<section className={css.cartSection}>
					<section className={css.cartContainer}>
						<div className={css.titles}>
							<h4 className={css.title}>Product</h4>
							<h4 className={css.title}>Price</h4>
							<h4 className={css.title}>Quantity</h4>
							<h4 className={`${css.title}  ${css.hide}`}>Subtotal</h4>
						</div>
						{cartEmpty ? (
							<div className={css.emptyCart}>No Items in Cart</div>
						) : (
							<>
								{cartItems.map((item) => {
									return <CartItem key={item.id} {...item} />;
								})}
								<hr />
								<button
									className={css.clearBtn}
									onClick={clearAllItemsFromCart}
								>
									Clear All
								</button>
							</>
						)}
					</section>
					{
						<section className={css.priceContainer}>
							<h3 className={css.heading}>Cart Total</h3>
							<div>
								<div className={css.subheadingContainer}>
									<h4>Subtotal:</h4>
									<p>
										<FormatPrice price={15000} />
									</p>
								</div>
								<div className={css.subheadingContainer}>
									<h4>Shipping:</h4>
									<p>
										<FormatPrice price={50} />
									</p>
								</div>
								<div className={css.subheadingContainer}>
									<h4>Total:</h4>
									<p className={css.totalPrice}>
										<FormatPrice price={15050} />
									</p>
								</div>
							</div>
							<Link to="/checkout" className={css.checkout}>
								Check out
							</Link>
						</section>
					}
				</section>
			</main>
			<SecondaryFooter />
		</>
	);
};

export default CartPage;
