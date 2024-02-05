import React from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./productslist.module.css";
import FormatPrice from "../../helper/FormatPrice.jsx";

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const ProductsList = ({ products }) => {
	const navigate = useNavigate();
	return (
		<ul className={css.products}>
			{products?.map((product, index) => {
				const effectivePrice = product.discountPercent
					? Math.round((product.price * (100 - product.discountPercent)) / 100)
					: product.price;
				return (
					<li key={index} className={css.product}>
						<figure className={css.productImg}>
							<img src={product.thumbnail} alt={product.name} />
							<button className={css.wishlistIcon}>
								{product.isWishlisted ? <IoMdHeart /> : <IoMdHeartEmpty />}
							</button>
						</figure>
						<div>
							<div>
								<h4 className={css.productName}>
									<Link to={`/product/${product.id}`}>
										{product.name.toUpperCase()}
									</Link>
								</h4>
								<p className={css.category}>{product.category}</p>
								<div className={css.price}>
									{product?.discountPercent
										? product.discountPercent !== 0 && (
												<s className={css.actualPrice}>
													<FormatPrice price={product.price} />
												</s>
										  )
										: null}
									<FormatPrice
										className={css.effectivePrice}
										price={effectivePrice}
									/>
								</div>
							</div>
							{product.stock > 0 ? (
								<button className={css.addToCartBtn}>Add to Cart</button>
							) : (
								<button className={css.outOfStockBtn} disabled>
									Out of Stock
								</button>
							)}
						</div>
						<div>
							{product?.discountPercent
								? product.discountPercent !== 0 && (
										<p className={`${css.label} ${css.discount}`}>
											-{product.discountPercent}%
										</p>
								  )
								: null}
							{product.isNew && (
								<p className={`${css.label} ${css.new}`}>New</p>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default ProductsList;
