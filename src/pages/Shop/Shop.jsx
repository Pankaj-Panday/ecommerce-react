import React, { useContext } from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import css from "./shop.module.css";

// import context
import useProductContext from "../../hooks/useProductContext.js";

const Shop = () => {
	const data = useProductContext();
	return (
		<main>
			<SecondaryHeader />
			<SecondaryFooter />
		</main>
	);
};

export default Shop;
