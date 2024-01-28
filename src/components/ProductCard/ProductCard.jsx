import React from "react";
import { NavLink } from "react-router-dom";
import css from "./productcard.module.css";

// icon
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import FormatPrice from "../../helper/FormatPrice";

const ProductCard = ({ product }) => {
	const {
		id,
		name,
		category,
		price,
		discountPercent,
		isNew,
		isWishlisted,
		thumbnail,
	} = product;
	const effectivePrice = discountPercent
		? Math.round((price * (100 - discountPercent)) / 100)
		: price;

	return (
		<div className={css.product}>
			<div
				className={css.productDisplay}
				style={{ backgroundImage: `url("${thumbnail}")` }}
			>
				{discountPercent && (
					<p className={`${css.label}`}>-{discountPercent}%</p>
				)}
				{isNew && <p className={`${css.label}`}>New</p>}
				<button className={css.wishlistIcon}>
					{isWishlisted ? <IoMdHeart /> : <IoMdHeartEmpty />}
				</button>
			</div>
			<div className={css.productDetails}>
				<h4 className={css.name}>
					<NavLink to={`/product/${id}`}>{name}</NavLink>
				</h4>
				<p className={css.category}>{category}</p>
				<div className={css.price}>
					<FormatPrice className={css.effectivePrice} price={effectivePrice} />
					{discountPercent && (
						<s className={css.actualPrice}>
							<FormatPrice price={price} />
						</s>
					)}
				</div>
				<button className={css.addToCartBtn}>Add to Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
