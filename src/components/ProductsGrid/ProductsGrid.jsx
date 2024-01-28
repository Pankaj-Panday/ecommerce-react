import React from "react";
import css from "./productsgrid.module.css";
import ProductCard from "../ProductCard/ProductCard";
import useProductContext from "../../hooks/useProductContext";

const ProductsGrid = ({ listName }) => {
	const { isLoading, products, featuredProducts, singleProduct } =
		useProductContext();
	let renderedList = null;

	switch (listName) {
		case "featured":
			renderedList = featuredProducts;
			break;
		case "related":
			renderedList = products.filter((product) => {
				return singleProduct?.relatedProducts?.includes(product.id);
			});

			break;
		default:
			renderedList = products;
	}

	return (
		<ul className={css.products}>
			{isLoading ? (
				<div>...Loading</div>
			) : (
				renderedList?.map((product, index) => {
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
