import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/wishlistReducer.js";

const WishlistContext = createContext({});

function getWishlist() {
	const wishlist = localStorage.getItem("wishlist");
	if (wishlist && wishlist.length > 0) {
		return JSON.parse(wishlist);
	} else {
		return [];
	}
}

const initialData = {
	wishlist: getWishlist(),
};

const WishlistContextProvider = ({ children }) => {
	const [data, dispatch] = useReducer(reducer, initialData);

	function isWishlisted(productId) {
		return data.wishlist.some((product) => product.id === productId); // returns true or false
	}

	function removeFromWishlist(productId) {
		dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
	}

	function addToWishlist(product) {
		dispatch({ type: "ADD_TO_WISHLIST", payload: product });
	}

	useEffect(() => {
		localStorage.setItem("wishlist", JSON.stringify(data.wishlist));
	}, [data.wishlist]);

	return (
		<WishlistContext.Provider
			value={{ ...data, addToWishlist, isWishlisted, removeFromWishlist }}
		>
			{children}
		</WishlistContext.Provider>
	);
};

function useWishlistContext() {
	return useContext(WishlistContext);
}

export { WishlistContextProvider, useWishlistContext };
