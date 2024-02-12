import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// context
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<FilterContextProvider>
				<CartContextProvider>
					<App />
				</CartContextProvider>
			</FilterContextProvider>
		</AppProvider>
	</React.StrictMode>
);
