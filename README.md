# E-Commerce Application

This is an e-commerce application built using React, React Router v6, and Context API with custom hooks for managing the product list, filters, cart, and wishlist functionalities. The application also integrates reducers for each part of the state management to ensure proper handling of actions like adding/removing items from the cart or wishlist, and filtering or sorting products.

## Project Overview

### ProductContext

**Purpose**: Fetches all products from a simulated API and stores them in the `products` array.

**How it works**: The `ProductContext` brings product data into the application, making it accessible across various components.

**Key Responsibility**: Provides functions that dispatch actions, with the reducer handling state updates.

### FilterContext

**Purpose**: Manages filtering and sorting of products using the products array from ProductContext.

**How it works**:

- `useEffect` in FilterContext uses the `products` array to dispatch actions that load products into:
  - `allProducts`: Stores the original product list.
  - `filteredProducts`: Stores the currently filtered list of products.
  - `maxPrice`, `minPrice`, and `price`: Manage price-related filters.

**Key functions**:

- Methods for sorting products.
- Updating filtered product counts.
- Clearing all applied filters.

### CartContext

**Purpose**: Manages the shopping cart, including adding items, updating quantities, and calculating totals.

**How it works**:

- Initializes `cartItems` from `localStorage` and manages `totalItems`, `totalPrice`, and `shippingCharge`.
- Provides methods to:
  - Add items to the cart (`addToCart`).
  - Remove items from the cart (`removeItemFromCart`).
  - Clear all items from the cart (`clearAllItemsFromCart`).
  - Increment or decrement item quantity.
- Automatically calculates totals and stores updated cart data in `localStorage` on changes to `cartItems`.

### WishlistContext

**Purpose**: Initializes wishlist from `localStorage` and syncs updates to `localStorage`.

**How it works**:

- Initializes `cartItems` from `localStorage` and manages `totalItems`, `totalPrice`, and `shippingCharge`.
- Provides methods to:
  - Add items to the wishlist (`addToWishlist`).
  - Remove items from the wishlist (`removeFromWishlist`).
  - Check if an item is already wishlisted (`isWishlisted`)
- Handles actions for adding and removing items from the wishlist.

### ProductReducer

**Purpose**: Manages product loading, availability, and error states.

**How it works**:

- When products are being loaded, the `isLoading` state is set to `true`. Once products are fetched successfully, the `isLoading` state is set to `false`, and the products are stored in the `products` array.
- Additionally, it filters `featuredProducts` from the product list and handles single product loading and error states.

**Reducer**:

- PRODUCTS_LOADING: Sets `isLoading` to `true` while products are being fetched.
- PRODUCTS_AVAILABLE: Stores the fetched products and identifies `featuredProducts`.
- PRODUCTS_ERROR: Updates `isError` to `true` if there is an error during the fetch.
- SINGLE_PRODUCT_LOADING: Handles loading state for individual products.
- SINGLE_PRODUCT_AVAILABLE: Stores a single product once it’s successfully fetched.
- SINGLE_PRODUCT_ERROR: Updates the state if there is an error in fetching an individual product.

### FilterReducer

**Purpose**: Handles filtering, sorting, and managing product views.

**How it works**:

- It initializes with the full list of products and allows users to filter based on various criteria (price, category, rating, etc.).
- Also manages the view mode (grid or list view) and sorting options (price, alphabetical).

**Reducer**:

- LOAD_ALL_PRODUCTS: Loads all products and calculates the minimum and maximum price for price filtering.
- SET_GRID_VIEW: Toggles between grid and list views for displaying products.
- SET_SORTBY_VALUE: Updates the sort criteria (e.g., ascending, descending, A-Z, Z-A).
- SORT_PRODUCTS: Sorts the products based on the selected criteria (e.g., price, name).
- SET_FILTER_VALUE: Updates filters for search text, category, rating, color, and price.
- SHOW_FILTERED_PRODUCTS: Filters products based on the current filters.
- CLEAR_FILTERS: Resets all filters to their default values.
- UPDATE_ITEM_COUNT: Updates the number of items to display per page.

### CartReducer

**Purpose**: manages all the actions related to the shopping cart, handling operations such as adding items, updating quantities, removing items, and calculating totals.

**Reducer**:

- ADD_TO_CART: Adds a product to the cart. If the product (based on `id`, `color`, and `size`) already exists, it increments the quantity without exceeding the stock limit. Otherwise, it adds the new item.
- INCREMENT_QUANTITY: Increases the quantity of a product in the cart by 1, ensuring the quantity does not exceed the available stock.
- DECREMENT_QUANTITY: Decreases the quantity of a product in the cart by 1, ensuring it doesn't go below 1.
- REMOVE_FROM_CART: Removes a specific product from the cart based on its `id`.
- CLEAR_CART: Clears the entire cart by removing all products.
- CALCULATE_TOTALS: Calculates and updates the total number of items in the cart and the total price. It also computes the shipping charges based on the total price, with a cap on the maximum shipping charge.

### WishlistReducer

**Purpose**: manages all the actions related to the user's wishlist, such as adding and removing items from the wishlist.

**Reducer**:

- ADD_TO_WISHLIST: Adds a product to the wishlist. If the product is already in the wishlist, it ignores the request.
- REMOVE_FROM_WISHLIST: Removes a product from the wishlist based on its `id`.
