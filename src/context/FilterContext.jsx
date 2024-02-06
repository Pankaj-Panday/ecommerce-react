import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer.js";
import useProductContext from "../hooks/useProductContext.js";

export const FilterContext = createContext();

const initialData = {
	filteredProducts: [],
	allProducts: [],
	gridView: true,
	itemCount: 12,
	sortByValue: "",
	filters: {
		searchText: "",
	},
};

export const FilterContextProvider = ({ children }) => {
	const { products } = useProductContext();
	const [data, dispatch] = useReducer(reducer, initialData);

	function sortProducts(event) {
		dispatch({ type: "SET_SORTBY_VALUE", value: event.target.value });
	}

	function updateFilterValue(event) {
		const { name, value } = event.target;
		dispatch({ type: "SET_FILTER_VALUE", payload: { name, value } });
	}

	useEffect(() => {
		dispatch({
			type: "LOAD_FILTERED_PRODUCTS",
			payload: products,
		});
	}, [products]);

	useEffect(() => {
		dispatch({ type: "SHOW_SEARCHED_PRODUCTS" });
	}, [data.filters.searchText, products]);

	useEffect(() => {
		dispatch({ type: "SORT_PRODUCTS" });
	}, [data.sortByValue, products]);

	return (
		<FilterContext.Provider
			value={{ ...data, dispatch, sortProducts, updateFilterValue }}
		>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
