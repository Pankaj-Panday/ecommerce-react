import React, { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import css from "./product.module.css";

import useProductContext from "../../hooks/useProductContext";
import ProductImageCase from "../../components/ProductImageCase/ProductImageCase.jsx";
import FormatPrice from "../../helper/FormatPrice.jsx";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Product = () => {
	const { id } = useParams();
	const { getSingleProduct, isSingleLoading, singleProduct } =
		useProductContext();

	const {
		id: productId,
		name: productName,
		category,
		stock,
		price,
		discountPercent,
		images,
		rating,
		reviewCount,
		shortDescription,
		longDescription,
		tags,
	} = singleProduct;

	useEffect(() => {
		getSingleProduct(Number(id));
	}, []);

	const effectivePrice = ((100 - discountPercent) / 100) * price;

	return (
		<main>
			{isSingleLoading ? (
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
									<ProductImageCase />
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
										<p>{rating}</p>
										<p>{reviewCount} customer reviews</p>
									</div>
									<p className={css.description}>{shortDescription}</p>
									<div className={css.sizeContainer}>
										<h3>size</h3>
										<button>s</button>
										<button className={css.selected}>m</button>
										<button>l</button>
									</div>
									<div className={css.colorContainer}>
										<h3>Color</h3>
										<button style={{ backgroundColor: "#816DFA" }}></button>
										<button style={{ backgroundColor: "#000000" }}></button>
										<button style={{ backgroundColor: "#B88E2F" }}></button>
									</div>
									<div className={css.actionButtons}>
										<button className={css.quantity}>1</button>
										<button>Add to Cart</button>
										<button>Wishlist</button>
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
													<td>
														<FaFacebook />
														<FaInstagram />
														<FaXTwitter />
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
					a
					<section className={css.relatedProducts}>
						<div className="mainContainer">
							<h2>Related Products</h2>
							<NavLink to="/shop" className={css.showMoreBtn}>
								Show more
							</NavLink>
						</div>
					</section>
				</div>
			)}
		</main>
	);
};

export default Product;
