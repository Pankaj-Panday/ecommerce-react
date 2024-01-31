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
	const { filteredProducts, gridView, dispatch } = useFilterContext();
	const [showFilter, setShowFilter] = useState(false);
	function setGridview(value) {
		dispatch({ type: "SET_GRID_VIEW", value: value });
	}

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
						<span>Showing 1–16 of {filteredProducts.length} results</span>
					</div>
					<div className={css.sortContainer}>
						<div className={css.dropDown}>
							<label htmlFor="itemCount">Show</label>
							<select name="itemCount" id="itemCount">
								<option value="4">4</option>
								<option value="8">8</option>
								<option value="12">12</option>
								<option value="16">16</option>
								<option value="20">20</option>
							</select>
						</div>
						<div className={css.dropDown}>
							<label htmlFor="sortBy">Sort by</label>
							<select name="sort" id="sortBy">
								<option value="">abcd</option>
								<option value="">abcd</option>
								<option value="">abcd</option>
								<option value="">abcd</option>
							</select>
						</div>
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
