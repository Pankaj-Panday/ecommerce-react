import React from "react";
import { NavLink } from "react-router-dom";
import ProductsGrid from "../ProductsGrid/ProductsGrid.jsx";
import css from "./relatedproducts.module.css";

const RelatedProducts = () => {
	return (
		<div className="mainContainer">
			<h2 className={css.heading}>Related Products</h2>
			<ProductsGrid listName="related" />
			<NavLink to="/shop" className={css.showMoreBtn}>
				Show more
			</NavLink>
		</div>
	);
};

export default RelatedProducts;
