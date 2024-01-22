import React from "react";
import { useParams } from "react-router-dom";
import css from "./product.module.css";

// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Product = () => {
	const { id } = useParams();
	const productName = "Asgaard Sofa";
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
			<section className={css.productSection}></section>
			<section className={css.productDetails}></section>
			<section className={css.relatedProducts}></section>
		</main>
	);
};

export default Product;
