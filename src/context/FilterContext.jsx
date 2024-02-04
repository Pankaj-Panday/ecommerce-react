import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer.js";
import useProductContext from "../hooks/useProductContext.js";

export const FilterContext = createContext();

const initialData = {
	filteredProducts: [],
	allProducts: [],
	gridView: true,
	itemCount: 12,
	sortByValue: "ascending",
};

export const FilterContextProvider = ({ children }) => {
	const { products } = useProductContext();
	const [data, dispatch] = useReducer(reducer, initialData);

	function sortProducts() {
		dispatch({ type: "SET_SORTBY_VALUE" });
	}

	useEffect(() => {
		dispatch({
			type: "LOAD_FILTERED_PRODUCTS",
			payload: products,
		});
	}, [products]);

	useEffect(() => {
		dispatch({ type: "SORT_PRODUCTS", payload: products });
	}, [data.sortByValue]);

	return (
		<FilterContext.Provider value={{ ...data, dispatch, sortProducts }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
