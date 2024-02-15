import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import css from "./product.module.css";

import useProductContext from "../../hooks/useProductContext";
import ProductImageCase from "../../components/ProductImageCase/ProductImageCase.jsx";
import FormatPrice from "../../helper/FormatPrice.jsx";
import Rating from "../../components/Rating/Rating.jsx";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts.jsx";
import { useCartContext } from "../../context/CartContext.jsx";

const Product = () => {
	const { id } = useParams();
	const { getSingleProduct, isLoading, singleProduct } = useProductContext();
	const { addToCart } = useCartContext();

	const {
		id: productId,
		name: productName,
		category,
		stock,
		price,
		discountPercent,
		images,
		colors,
		sizes,
		rating,
		reviewCount,
		shortDescription,
		longDescription,
		tags,
		isWishlisted,
	} = singleProduct;

	useEffect(() => {
		getSingleProduct(Number(id));
	}, [id]);

	const effectivePrice = ((100 - discountPercent) / 100) * price;
	const [selectedColorIndex, setselectedColorIndex] = useState(0);
	const [selectedSizeIndex, setselectedSizeIndex] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const navigate = useNavigate();

	const incrementQuantity = () => {
		quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
	};
	const decrementQuantity = () => {
		quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
	};

	return (
		<main>
			{isLoading ? (
				<div>...Loading</div>
			) : (
				<div>
					<section className={css.header}>
						<div className="mainContainer">
							<div className={css.navigation}>
								<Link to="/home">Home</Link>
								<span className={css.arrow}>
									<MdOutlineKeyboardArrowRight />
								</span>
								<Link to="/shop">Shop</Link>
								<span className={css.arrow}>
									<MdOutlineKeyboardArrowRight />
								</span>
								<span className={css.verticalLine}></span>
								<span className={css.productName}>{productName}</span>
							</div>
						</div>
					</section>
					<section className={css.productSection}>
						<div className="mainContainer">
							<div className={css.productContainer}>
								<div className={css.productImage}>
									<ProductImageCase images={images} />
								</div>
								<div className={css.productInformation}>
									<h2>{productName}</h2>
									<p className={css.price}>
										<FormatPrice price={effectivePrice} />{" "}
										<s className={css.actualPrice}>
											<FormatPrice price={price} />
										</s>
									</p>
									<div className={css.feedback}>
										<Rating rating={rating} />
										<p>{reviewCount} customer reviews</p>
									</div>
									<p className={css.description}>{shortDescription}</p>
									<div className={css.sizeContainer}>
										<h3>size</h3>
										{sizes?.map((size, index) => {
											return (
												<button
													key={index}
													onClick={() => setselectedSizeIndex(index)}
													className={
														selectedSizeIndex === index ? css.selected : null
													}
												>
													{size}
												</button>
											);
										})}
									</div>
									<div className={css.colorContainer}>
										<h3>Color</h3>
										{colors?.map((color, index) => {
											return (
												<button
													style={{ backgroundColor: color }}
													key={index}
													className={
														selectedColorIndex === index ? css.selected : null
													}
													onClick={() => setselectedColorIndex(index)}
												></button>
											);
										})}
									</div>
									<div className={css.actionButtons}>
										<QuantitySelector
											quantity={quantity}
											stock={stock}
											onIncrement={incrementQuantity}
											onDecrement={decrementQuantity}
										/>
										<button
											disabled={stock < 1}
											onClick={() => {
												navigate("/cart");
												addToCart(
													id,
													colors[selectedColorIndex],
													sizes[selectedSizeIndex],
													quantity,
													stock,
													effectivePrice,
													singleProduct
												);
											}}
										>
											Add to Cart
										</button>
										{isWishlisted ? (
											<button className={css.isWishlisted}>Wishlisted</button>
										) : (
											<button>Wishlist</button>
										)}
									</div>
									<hr className={css.horizontalLine} />
									<div className={css.otherDetails}>
										<table className={css.productTable}>
											<tbody>
												<tr>
													<td>Stock</td>
													<td>:</td>
													<td>
														{stock > 0 ? (
															<p className={css.inStock}>In Stock</p>
														) : (
															<p className={css.outOfStock}>Out of Stock</p>
														)}
													</td>
												</tr>
												<tr>
													<td>Category</td>
													<td>:</td>
													<td>{category}</td>
												</tr>
												<tr>
													<td>Tags</td>
													<td>:</td>
													<td>
														{tags?.map((tag, index) => (
															<span key={index}>
																{tag}
																{index < tags.length - 1 && ", "}
															</span>
														))}
													</td>
												</tr>
												<tr>
													<td>Share</td>
													<td>:</td>
													<td className={css.socialIcons}>
														<Link>
															<FaFacebook />
														</Link>
														<Link>
															<FaInstagram />
														</Link>
														<Link>
															<FaXTwitter />
														</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className={css.productDetails}>
						<div className="mainContainer">
							<div className={css.headings}>
								<h2 className={css.activeHeading}>Description</h2>
								<h2>Additional Information</h2>
								<h2>Reviews [{reviewCount}]</h2>
							</div>
							<div className={css.description}>
								<p>{longDescription}</p>
							</div>
							<div>
								<img src="/images/sofa1.jpg" alt="sofa1" />
								<img src="/images/sofa2.jpg" alt="sofa1" />
							</div>
						</div>
					</section>
					<section className={css.relatedProducts}>
						<RelatedProducts />
					</section>
				</div>
			)}
		</main>
	);
};

const QuantitySelector = ({ quantity, onIncrement, onDecrement, stock }) => {
	return (
		<button disabled={stock < 1} className={css.quantitySelector}>
			<span className={`${css.decrementBtn}`} onClick={onDecrement}>
				-
			</span>
			<span className={`${css.quantity} `}>{quantity}</span>
			<span className={`${css.incrementBtn}`} onClick={onIncrement}>
				+
			</span>
		</button>
	);
};

export default Product;
