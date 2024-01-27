// CPU - Create, Provice, Use
import { createContext, useEffect } from "react";
import productsList from "../productData";
import { useReducer } from "react";
import reducer from "../reducer/productReducer.js";

const ProductContext = createContext({});

function apiCallToGetProducts(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// let randomNum = Math.floor(Math.random() * 10) + 1;
			// if (randomNum > 6) {
			// 	reject(new Error("Data fetch error"));
			// }
			resolve(productsList);
		}, delay);
	});
}

const initialData = {
	isLoading: false,
	isError: false,
	products: [],
	featuredProducts: [],
	isSingleLoading: false,
	singleProduct: {},
};

const AppProvider = ({ children }) => {
	const [data, dispatch] = useReducer(reducer, initialData);
	const delay = 0;

	const getProducts = async () => {
		dispatch({ type: "PRODUCTS_LOADING" });
		try {
			const products = await apiCallToGetProducts(delay);
			dispatch({ type: "PRODUCTS_AVAILABLE", payload: products });
		} catch (error) {
			dispatch({ type: "PRODUCTS_ERROR" });
			console.error(error.message);
		}
	};

	const getSingleProduct = async (productId) => {
		dispatch({ type: "SINGLE_PRODUCT_LOADING" });
		try {
			const products = await apiCallToGetProducts(delay);
			const singleProduct = products.find(
				(product) => product.id === productId
			);
			if (singleProduct) {
				dispatch({ type: "SINGLE_PRODUCT_AVAILABLE", payload: singleProduct });
			} else {
				dispatch({ type: "SINGLE_PRODUCT_ERROR" });
			}
		} catch (error) {
			dispatch({ type: "SINGLE_PRODUCT_ERROR" });
			console.error(error.message);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ ...data, getSingleProduct }}>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductContext, AppProvider };
