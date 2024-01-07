import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import MainLayout from "./layout/MainLayout.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="shop" element={<Shop />} />
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
