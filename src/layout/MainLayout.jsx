import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<ScrollRestoration />
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
