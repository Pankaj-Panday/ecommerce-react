import React, { useState } from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import css from "./shop.module.css";
import { useFilterContext } from "../../context/FilterContext.jsx";

// icons
import { LiaSlidersHSolid } from "react-icons/lia";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const Shop = () => {
	const {
		filteredProducts,
		gridView,
		dispatch,
		itemCount,
		allProducts,
		sortByValue,
	} = useFilterContext();
	const [showFilter, setShowFilter] = useState(false);
	function setGridview(value) {
		dispatch({ type: "SET_GRID_VIEW", value: value });
	}
	const totalProductsFound = allProducts.length;
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
							<select
								name="itemCount"
								id="itemCount"
								value={itemCount}
								onChange={(e) => {
									dispatch({
										type: "CHANGE_ITEMS_COUNT",
										count: e.target.value,
									});
								}}
							>
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
								value={sortByValue}
								onChange={(e) => {
									dispatch({ type: "SORT_PRODUCTS", value: e.target.value });
								}}
							>
								<option value="ascending">Price: Low to High</option>
								<option value="descending">Price: High to Low</option>
								<option value="a-z">Alphabet (A-Z)</option>
								<option value="z-a">Alphabet (Z-A)</option>
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
	return (
		<div className={`${css.filterSection} mainContainer`}>filterSection</div>
	);
};

export default Shop;
