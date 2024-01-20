// CPU - Create, Provice, Use
import { createContext, useEffect } from "react";
import productsList from "../productData";
import { useReducer } from "react";
import reducer from "../reducer/productReducer.js";

const ProductContext = createContext({});

const initialData = {
	isLoading: false,
	isError: false,
	products: [],
	featuredProducts: [],
};

const AppProvider = ({ children }) => {
	const [data, dispatch] = useReducer(reducer, initialData);
	const getProducts = (error) => {
		// error is just to simulate that there might be some error in fetching data from external source, its not needed, instead you might call an api url for the data
		dispatch({ type: "data_loading" });
		try {
			// make api calls to get the data
			if (!error) dispatch({ type: "data_available", data: productsList });
			else throw new Error("Data error");
		} catch (error) {
			dispatch({ type: "data_error" });
			console.error(error);
		}
	};

	useEffect(() => {
		const dataFetchError = false;
		getProducts(dataFetchError);
	}, []);

	return (
		<ProductContext.Provider value={{ ...data }}>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductContext, AppProvider };
