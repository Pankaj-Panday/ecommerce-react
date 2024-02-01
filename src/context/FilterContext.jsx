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

	useEffect(() => {
		dispatch({
			type: "LOAD_FILTERED_PRODUCTS",
			payload: products,
			count: data.itemCount,
		});
	}, [products]);

	return (
		<FilterContext.Provider value={{ ...data, dispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
