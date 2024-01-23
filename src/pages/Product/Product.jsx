import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import css from "./product.module.css";

// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useProductContext from "../../hooks/useProductContext";

const Product = () => {
	const { id } = useParams();
	const { getSingleProduct, isSingleLoading, singleProduct } =
		useProductContext();
	const productId = Number(id);

	const productName = "Asgaard Sofa";
	const reviewsCount = 5;

	useEffect(() => {
		getSingleProduct(productId);
	}, []);

	return (
		<main className={css.productContainer}>
			<section className={css.header}>
				<p>
					Home{" "}
					<span className={css.arrow}>
						<MdOutlineKeyboardArrowRight />
					</span>{" "}
					Shop{" "}
					<span className={css.arrow}>
						<MdOutlineKeyboardArrowRight />
					</span>{" "}
					<span className={css.verticalLine}></span>
					<span className={css.productName}>{productName}</span>
				</p>
			</section>
			<section className={css.productSection}>productSection</section>
			<section className={css.productDetails}>
				<div>
					<h2>Description</h2>
					<h2>Additional Information</h2>
					<h2>Reviews [{reviewsCount}]</h2>
				</div>
				<div>
					<p>
						Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
						portable active stereo speaker takes the unmistakable look and sound
						of Marshall, unplugs the chords, and takes the show on the road.
						<br />
						<br />
						Weighing in under 7 pounds, the Kilburn is a lightweight piece of
						vintage styled engineering. Setting the bar as one of the loudest
						speakers in its class, the Kilburn is a compact, stout-hearted hero
						with a well-balanced audio which boasts a clear midrange and
						extended highs for a sound that is both articulate and pronounced.
						The analogue knobs allow you to fine tune the controls to your
						personal preferences while the guitar-influenced leather strap
						enables easy and stylish travel.
					</p>
				</div>
				<div>
					<img src="/images/sofa1.jpg" alt="sofa1" />
					<img src="/images/sofa2.jpg" alt="sofa1" />
				</div>
			</section>
			<hr />
			<section className={css.relatedProducts}>
				<h2>Related Products</h2>
				<NavLink to="/shop" className={css.showMoreBtn}>
					Show more
				</NavLink>
			</section>
		</main>
	);
};

export default Product;
