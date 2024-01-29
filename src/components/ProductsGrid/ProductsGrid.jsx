import React from "react";
import css from "./productsgrid.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({ products }) => {
	return (
		<ul className={css.products}>
			{products?.map((product, index) => {
				return (
					<li key={index}>
						<ProductCard product={product} />
					</li>
				);
			})}
		</ul>
	);
};

export default ProductsGrid;
