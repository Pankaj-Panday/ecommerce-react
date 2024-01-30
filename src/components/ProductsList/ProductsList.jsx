import React from "react";
import css from "./productslist.module.css";

const ProductsList = ({ products }) => {
	return (
		<ul>
			{products.map((product, index) => {
				return <li key={index}>{product.name}</li>;
			})}
		</ul>
	);
};

export default ProductsList;
