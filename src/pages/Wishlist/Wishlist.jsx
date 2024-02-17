import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.jsx";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter.jsx";
import { useWishlistContext } from "../../context/WishlistContext.jsx";
import css from "./wishlist.module.css";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx";

const Wishlist = () => {
	const { wishlist } = useWishlistContext();

	return (
		<>
			<SecondaryHeader />
			<main className="mainContainer">
				<div className={css.wrapper}>
					{wishlist.length > 0 ? (
						<ProductsGrid products={wishlist} />
					) : (
						<div className={css.empty}>Wishlist is empty</div>
					)}
				</div>
			</main>
			<SecondaryFooter />
		</>
	);
};

export default Wishlist;
