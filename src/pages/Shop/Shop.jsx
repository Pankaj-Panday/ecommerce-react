import React, { useState } from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import css from "./shop.module.css";
import { useFilterContext } from "../../context/FilterContext.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import FormatPrice from "../../helper/FormatPrice.jsx";

// icons
import { LiaSlidersHSolid } from "react-icons/lia";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const Shop = () => {
	const {
		filteredProducts,
		gridView,
		dispatch,
		sortProducts,
		itemCount,
		updateItemCount,
	} = useFilterContext();
	const [showFilter, setShowFilter] = useState(false);
	function setGridview(value) {
		dispatch({ type: "SET_GRID_VIEW", value: value });
	}
	const totalProductsFound = filteredProducts.length;
	const productShown =
		itemCount < totalProductsFound ? itemCount : totalProductsFound; // may change once pagination kind of thing happens
	return (
		<main>
			<SecondaryHeader />
			<section className={css.mainSection}>
				<div className="mainContainer">
					<div className={css.filterContainer}>
						<div
							className={`${css.filterBtn} ${showFilter ? css.active : null}`}
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
								onChange={updateItemCount}
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
								defaultValue={""}
								onChange={sortProducts}
							>
								<option>--Select--</option>
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
				{totalProductsFound <= 0 ? (
					<p className={css.noProducts}>
						No Products Found. Try changing the filters.
					</p>
				) : gridView ? (
					<ProductsGrid products={filteredProducts.slice(0, itemCount)} />
				) : (
					<ProductsList products={filteredProducts.slice(0, itemCount)} />
				)}
			</div>
			<SecondaryFooter />
		</main>
	);
};

const Filter = () => {
	const {
		filters: { searchText, rating, color, category, minPrice, maxPrice, price },
		updateFilterValue,
		clearFilters,
		allProducts: products,
	} = useFilterContext();
	// Get data for each filters e.g category
	function getFilterDataFor(property) {
		const arrayOfValues = products.map((product) => {
			return product[property];
		});
		let filteredUniqueValues = [...new Set(arrayOfValues)];
		if (property === "colors") {
			filteredUniqueValues = [...new Set(arrayOfValues.flat())];
		}
		return ["All", ...filteredUniqueValues];
	}

	const productCategories = getFilterDataFor("category");
	const productColors = getFilterDataFor("colors");

	return (
		<div className={`${css.filterSection} mainContainer`}>
			<form
				role="search"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className={css.innerFilterContainer}>
					<h3>Categories</h3>
					<select
						className={css.categoryDropdown}
						name="category"
						id="category"
						value={category}
						onChange={updateFilterValue}
					>
						{productCategories.map((category, index) => {
							return <option key={index}>{category}</option>;
						})}
					</select>
				</div>
				<div className={css.innerFilterContainer}>
					<h3>Rating</h3>
					<div className={css.ratingSelectContainer}>
						<label>
							<input
								type="radio"
								name="rating"
								value={4}
								onChange={updateFilterValue}
								checked={parseInt(rating) === 4}
							/>
							<Rating rating={4} /> (4+)
						</label>
						<label>
							<input
								type="radio"
								name="rating"
								value={3}
								onChange={updateFilterValue}
								checked={parseInt(rating) === 3}
							/>
							<Rating rating={3} /> (3+)
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
				</div>
				<div className={css.innerFilterContainer}>
					<h3>Colors</h3>
					<div className={css.colorSelectContainer}>
						{productColors.map((productColor, index) => {
							return (
								<button
									key={index}
									className={`${
										productColor === "All" ? css.allColorBtn : css.colorBtn
									} 
									${productColor === color ? css.selected : null}
								`}
									style={{ backgroundColor: productColor }}
									name="color"
									value={productColor}
									onClick={updateFilterValue}
								>
									{productColor === "All" ? "All" : null}{" "}
								</button>
							);
						})}
					</div>
				</div>
				<div className={css.innerFilterContainer}>
					<h3>
						Price (<FormatPrice price={minPrice} /> -{" "}
						<FormatPrice price={maxPrice} />)
					</h3>
					<p>
						<FormatPrice price={price} className={css.priceTag} />
					</p>

					<input
						type="range"
						name="price"
						className={css.priceInput}
						value={price}
						onChange={updateFilterValue}
						min={minPrice}
						max={maxPrice}
						step={500}
					/>
				</div>
			</form>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					name="searchText"
					id="search"
					placeholder="Search Product"
					className={css.searchBar}
					value={searchText}
					onChange={updateFilterValue}
				/>
				<button onClick={clearFilters} className={css.clearBtn}>
					Reset filters
				</button>
			</form>
		</div>
	);
};

export default Shop;
