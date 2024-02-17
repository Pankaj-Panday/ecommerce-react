import React from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./productslist.module.css";
import FormatPrice from "../../helper/FormatPrice.jsx";

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
						</figure>
						<div>
							<div>
								<h4 className={css.productName}>
									<Link to={`/product/${product.id}`}>
										{product.name.toUpperCase()}
									</Link>
								</h4>
								<p className={css.category}>{product.category}</p>
								{product.rating > 0 ? (
									<p className={css.rating}>({product.rating})</p>
								) : (
									<p className={css.rating}>No rating</p>
								)}
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
