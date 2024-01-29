import React from "react";
import { NavLink } from "react-router-dom";
import ProductsGrid from "../ProductsGrid/ProductsGrid.jsx";
import css from "./relatedproducts.module.css";
import useProductContext from "../../hooks/useProductContext.js";

const RelatedProducts = () => {
	const { isLoading, products, singleProduct } = useProductContext();
	const relatedProducts = products.filter((product) => {
		return singleProduct?.relatedProducts?.includes(product.id);
	});
	return (
		<div className="mainContainer">
			<h2 className={css.heading}>Related Products</h2>
			{isLoading ? (
				<p>...Loading</p>
			) : (
				<ProductsGrid products={relatedProducts} />
			)}
			<NavLink to="/shop" className={css.showMoreBtn}>
				Show more
			</NavLink>
		</div>
	);
};

export default RelatedProducts;
