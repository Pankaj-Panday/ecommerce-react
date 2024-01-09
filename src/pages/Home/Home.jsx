import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import css from "./home.module.css";
import { categoryData } from "../../homeData";

export async function loader() {
	// using loader just to understand its implementation, otherwise we can directly use categoryData
	return "hello";
}

const Home = () => {
	const category = useLoaderData();
	console.log(category);
	return (
		<main>
			<section className={css.heroSection}>
				<div className="mainContainer">
					<div className={css.heroContainer}>
						<p>new arrival</p>
						<h1>
							Discover Our <br /> New Collection
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis.
						</p>
						<NavLink to="/shop" className={css.buyBtn}>
							Buy Now
						</NavLink>
					</div>
				</div>
			</section>
			<section className={css.categorySection}>
				<div className="mainContainer">
					<h2>Browse The Range</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div>
						<div></div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
