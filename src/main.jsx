import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// context
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";
import { WishlistContextProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<FilterContextProvider>
				<CartContextProvider>
					<WishlistContextProvider>
						<App />
					</WishlistContextProvider>
				</CartContextProvider>
			</FilterContextProvider>
		</AppProvider>
	</React.StrictMode>
);
