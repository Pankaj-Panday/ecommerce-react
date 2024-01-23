import React from "react";
import css from "./productsgrid.module.css";
import ProductCard from "../ProductCard/ProductCard";
import useProductContext from "../../hooks/useProductContext";

const ProductsGrid = ({ listName }) => {
	const { isLoading, products, featuredProducts } = useProductContext();
	const renderedList = listName === "featured" ? featuredProducts : products;
	return (
		<ul className={css.products}>
			{isLoading ? (
				<div>...Loading</div>
			) : (
				renderedList.map((product, index) => {
					if (index < 8) {
						return (
							<li key={index}>
								<ProductCard product={product} />
							</li>
						);
					}
				})
			)}
		</ul>
	);
};

export default ProductsGrid;
