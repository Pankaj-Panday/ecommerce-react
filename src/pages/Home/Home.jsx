import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import css from "./home.module.css";
import { categoryData, slidesArr, galleryImages } from "../../homeData";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";
import ImageGallery from "../../components/imageGallery/ImageGallery";

export async function loader() {
	// using loader just to understand its implementation, otherwise we can directly use the data
	const categories = categoryData;
	const slides = slidesArr;
	const images = galleryImages;
	return { categories, slides, images };
}

const Home = () => {
	const { categories, slides, images } = useLoaderData();
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
					<div className={css.categoriesContainer}>
						{categories.map((category, index) => {
							return (
								<div key={index + 1}>
									<div className={css.categoryImg}>
										<NavLink to="/shop">
											<img src={category.img} alt={`category ${index + 1}`} />
										</NavLink>
									</div>
									<h3>
										<NavLink to="/shop">{category.name}</NavLink>
									</h3>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className={css.productSection}>
				<div className="mainContainer">
					<h2>Our Products</h2>
					<div className={css.products}></div>
					<NavLink to="/shop" className={css.showMoreBtn}>
						Show more
					</NavLink>
				</div>
			</section>
			<section className={css.exploreSection}>
				<div className={css.exploreContainer}>
					<div className={css.first}>
						<h2>50+ Beautiful rooms inspiration</h2>
						<p>
							Our designer already made a lot of beautiful prototipe of rooms
							that inspire you
						</p>
						<NavLink to="/shop">Explore More</NavLink>
					</div>
					<div className={css.second}>
						<div>
							<p>
								01<span className={css.dash}></span>Bedroom
							</p>
							<h3>Inner Peace </h3>
							<NavLink to="/shop" className={css.arrow}>
								<IoIosArrowRoundForward />
							</NavLink>
						</div>
					</div>
					<div className={css.sliderContainer}>
						<ImageSlider slides={slides} />
					</div>
				</div>
			</section>
			<section className={css.gallerySection}>
				<p>Share your setup with</p>
				<p>#FuniroFurniture</p>
				<div className={css.galleryContainer}>
					<ImageGallery images={images} />
				</div>
			</section>
		</main>
	);
};

export default Home;
