import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

// Pages
import Home, { loader as homeLoader } from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Product from "./pages/Product/Product.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
			<Route errorElement={<ErrorPage />}>
				<Route index element={<Home />} loader={homeLoader} />
				<Route path="home" element={<Home />} loader={homeLoader} />
				<Route path="shop" element={<Shop />} />
				<Route path="product/:id" element={<Product />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
