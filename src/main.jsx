import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// context
import { AppProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
