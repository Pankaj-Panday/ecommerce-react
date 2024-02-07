import React, { useState } from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import css from "./shop.module.css";
import { useFilterContext } from "../../context/FilterContext.jsx";
import Rating from "../../components/Rating/Rating.jsx";

// icons
import { LiaSlidersHSolid } from "react-icons/lia";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const Shop = () => {
	const { filteredProducts, gridView, dispatch, sortProducts } =
		useFilterContext();
	const [showFilter, setShowFilter] = useState(true);
	function setGridview(value) {
		dispatch({ type: "SET_GRID_VIEW", value: value });
	}
	const totalProductsFound = filteredProducts.length;
	const productShown = filteredProducts.length; // may change once pagination kind of thing happens
	return (
		<main>
			<SecondaryHeader />
			<section className={css.mainSection}>
				<div className="mainContainer">
					<div className={css.filterContainer}>
						<div
							className={css.filterBtn}
							onClick={() => setShowFilter(!showFilter)}
						>
							<LiaSlidersHSolid className={css.icon} /> Filter
						</div>
						<HiViewGrid
							className={`${css.icon} ${gridView ? css.active : null}`}
							onClick={() => setGridview(true)}
						/>
						<BsViewList
							className={`${css.icon} ${!gridView ? css.active : null}`}
							onClick={() => setGridview(false)}
						/>
						{totalProductsFound > 0 ? (
							<span>
								Showing 1–{productShown} of {totalProductsFound} results
							</span>
						) : (
							<span>No result found</span>
						)}
					</div>
					<div className={css.sortContainer}>
						<form className={css.dropDown}>
							<label htmlFor="itemCount">Show</label>
							<select name="itemCount" id="itemCount">
								<option value="4">4</option>
								<option value="8">8</option>
								<option value="12">12</option>
								<option value="16">16</option>
								<option value="20">20</option>
							</select>
						</form>
						<form className={css.dropDown}>
							<label htmlFor="sortBy">Sort by</label>
							<select
								name="sort"
								id="sortBy"
								defaultValue={""}
								onClick={sortProducts}
							>
								<option>--select-an-option--</option>
								<option value="ascending">Price: Low to High</option>
								<option value="descending">Price: High to Low</option>
								<option value="a-z">Alphabet: A-Z</option>
								<option value="z-a">Alphabet: Z-A</option>
							</select>
						</form>
					</div>
				</div>
			</section>
			{showFilter && <Filter />}
			<div className="mainContainer">
				{gridView ? (
					<ProductsGrid products={filteredProducts} />
				) : (
					<ProductsList products={filteredProducts} />
				)}
			</div>
			<SecondaryFooter />
		</main>
	);
};

const Filter = () => {
	const {
		filters: { searchText, rating },
		updateFilterValue,
		allProducts: products,
	} = useFilterContext();

	// Get data for each filters e.g category
	function getFilterDataFor(property) {
		const arrayOfData = products.map((product) => {
			return product[property];
		});
		return ["All", ...new Set(arrayOfData)];
	}

	const productCategories = getFilterDataFor("category");

	return (
		<div className={`${css.filterSection} mainContainer`}>
			<form
				role="search"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type="text"
					name="searchText"
					id="search"
					placeholder="Search Product"
					className={css.searchBar}
					value={searchText}
					onChange={updateFilterValue}
				/>
				<h3>Categories</h3>
				<select name="category" id="category" onChange={updateFilterValue}>
					{productCategories.map((category, index) => {
						return <option key={index}>{category}</option>;
					})}
				</select>
				<h3>Rating</h3>
				<div>
					<label>
						<input
							type="radio"
							name="rating"
							value={4}
							onChange={updateFilterValue}
							checked={parseInt(rating) === 4}
						/>
						<Rating rating={4} /> (4 & above)
					</label>
					<label>
						<input
							type="radio"
							name="rating"
							value={3}
							onChange={updateFilterValue}
							checked={parseInt(rating) === 3}
						/>
						<Rating rating={3} /> (3 & above)
					</label>
					<label>
						<input
							type="radio"
							name="rating"
							value={-1}
							onChange={updateFilterValue}
							checked={parseInt(rating) === -1}
						/>
						Any
					</label>
				</div>
			</form>
		</div>
	);
};

export default Shop;
