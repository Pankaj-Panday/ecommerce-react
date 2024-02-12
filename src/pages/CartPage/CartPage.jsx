import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.jsx";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter.jsx";
import FormatPrice from "../../helper/FormatPrice.jsx";
import css from "./cartpage.module.css";

import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
	const { cartItems, totalPrice, totalItems, shippingCharge } =
		useCartContext();
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
							cartItems.map((item) => {
								return (
									<div key={item.id} className={css.itemContainer}>
										<div className={css.nameContainer}>
											<figure className={css.image}>
												<img src={item.image} alt={item.name} />
											</figure>
											<div>
												<p className={`${css.lightText} ${css.hide}`}>
													{item.name}
												</p>
												<button
													style={{ background: item.color }}
													className={css.selectedColor}
												></button>
												<button className={css.selectedSize}>
													{item.size}
												</button>
											</div>
										</div>
										<p className={css.lightText}>
											<FormatPrice price={item.price} />
										</p>
										<button className={css.quantitySelector}>
											<span className={css.decrementBtn}>-</span>
											<span className={css.quantity}>{item.quantity}</span>
											<span className={css.incrementBtn}>+</span>
										</button>
										<p className={css.hide}>
											<FormatPrice price={2500000} />
										</p>
										<button className={css.deleteBtn}>
											<MdDelete />
										</button>
									</div>
								);
							})
						)}
					</section>
					{!cartEmpty && (
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
					)}
				</section>
			</main>
			<SecondaryFooter />
		</>
	);
};

export default CartPage;
