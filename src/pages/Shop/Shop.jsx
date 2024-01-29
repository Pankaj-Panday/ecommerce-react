import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx";
import css from "./shop.module.css";

// import context
import useProductContext from "../../hooks/useProductContext.js";

const Shop = () => {
	const { products } = useProductContext();
	return (
		<main>
			<SecondaryHeader />
			<div className="mainContainer">
				<ProductsGrid products={products} />
			</div>
			<SecondaryFooter />
		</main>
	);
};

export default Shop;
