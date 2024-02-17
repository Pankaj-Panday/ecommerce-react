import React from "react";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import states from "../../checkoutData.js";
import { Link } from "react-router-dom";
import css from "./checkout.module.css";
import FormatPrice from "../../helper/FormatPrice.jsx";
import { useCartContext } from "../../context/CartContext.jsx";

const Checkout = () => {
	const { totalPrice, shippingCharge } = useCartContext();
	return (
		<>
			<SecondaryHeader />
			<main className="mainContainer">
				<h2 className={css.mainHeading}>Billing Details</h2>
				<div className={css.wrapper}>
					<section className={css.detailsSection}>
						<div className={css.customerDetails}>
							<form onSubmit={(e) => e.preventDefault()}>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="text"
									label="Full Name"
									id="name"
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="tel"
									label="Mobile Number"
									id="number"
									min={6}
									max={10}
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="email"
									label="Email Address"
									id="email"
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="text"
									label="Flat, House no., Apartment"
									id="building"
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="text"
									label="Area, Street, Sector, Village"
									id="area"
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="text"
									label="Landmark"
									id="landmark"
									placeholder="E.g near apollo hospital"
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="tel"
									label="Pincode"
									id="pincode"
									placeholder="6 digit [0-9]"
									min={6}
									max={6}
									pattern="[0-9]{6}"
								/>
								<Input
									labelClass={css.detailsLabel}
									inputClass={css.detailsInput}
									type="text"
									label="Town/City"
									id="city"
								/>
								<label htmlFor="state">
									<span className={css.detailsLabel}>State</span>
									<select name="state" id="state" className={css.detailsInput}>
										{states.map((state, index) => {
											return (
												<option key={index} value={state}>
													{state}
												</option>
											);
										})}
									</select>
								</label>
							</form>
						</div>
					</section>
					<section className={css.billingSection}>
						<div className={css.upper}>
							<h3>Select a payment method</h3>
							<div className={css.priceContainer}>
								<p>Subtotal</p>
								<p>
									<FormatPrice price={totalPrice} />
								</p>
							</div>
							<div className={css.priceContainer}>
								<p>Shipping</p>
								<p>
									<FormatPrice price={shippingCharge} />
								</p>
							</div>
							<div className={css.priceContainer}>
								<p>Total</p>
								<p>
									<FormatPrice
										className={css.totalPrice}
										price={totalPrice + shippingCharge}
									/>
								</p>
							</div>
						</div>
						<hr />
						<div className={css.lower}>
							<div className={css.paymentMethodContainer}>
								<Input
									labelClass={css.paymentLabel}
									inputClass={css.paymentInput}
									type="radio"
									id="card"
									label="Credit or debit card"
									name="paymentMethod"
									checked={true}
								/>
								<Input
									labelClass={css.paymentLabel}
									inputClass={css.paymentInput}
									type="radio"
									id="upi"
									label="UPI apps"
									name="paymentMethod"
								/>
								<Input
									labelClass={css.paymentLabel}
									inputClass={css.paymentInput}
									type="radio"
									id="netbanking"
									label="Net Banking"
									name="paymentMethod"
								/>
								<Input
									labelClass={css.paymentLabel}
									inputClass={css.paymentInput}
									type="radio"
									id="cod"
									label="Cash on delivery"
									name="paymentMethod"
								/>
							</div>
							<p>
								Your personal data will be used to support your experience
								throughout this website, to manage access to your account, and
								for other purposes described in our{" "}
								<Link to="/privacy">privacy policy</Link>.
							</p>
							<button
								className={css.order}
								onClick={() => {
									alert("Payment not implemented yet.");
								}}
							>
								Place order
							</button>
						</div>
					</section>
				</div>
			</main>
			<SecondaryFooter />
		</>
	);
};

const Input = ({
	type,
	name,
	id,
	label,
	placeholder,
	min,
	max,
	pattern,
	labelClass,
	inputClass,
	checked,
}) => {
	if (!name) {
		name = id;
	}
	return (
		<label htmlFor={id}>
			<span className={labelClass}>{label}</span>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				required={true}
				minLength={min}
				maxLength={max}
				pattern={pattern}
				className={inputClass}
				defaultChecked={checked}
			/>
		</label>
	);
};

export default Checkout;
