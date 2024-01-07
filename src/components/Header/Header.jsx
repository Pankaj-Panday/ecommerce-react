import React from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./header.module.css";
import Logo from "../Logo/Logo.jsx";
import Cart from "../Cart/Cart.jsx";

// Icons import
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.navContainer}>
				<Logo />
				<nav className={css.navbarPrimary} aria-label="primary">
					<ul className={css.navListPrimary}>
						<li className={css.navlink}>
							<NavLink
								to="/home"
								className={({ isActive }) => {
									return isActive ? css.activeLink : "";
								}}
							>
								home
							</NavLink>
						</li>
						<li className={css.navlink}>
							<NavLink
								to="/shop"
								className={({ isActive }) => {
									return isActive ? css.activeLink : "";
								}}
							>
								shop
							</NavLink>
						</li>
						<li className={css.navlink}>
							<NavLink
								to="/about"
								className={({ isActive }) => {
									return isActive ? css.activeLink : "";
								}}
							>
								about
							</NavLink>
						</li>
						<li className={css.navlink}>
							<NavLink
								to="/contact"
								className={({ isActive }) => {
									return isActive ? css.activeLink : "";
								}}
							>
								contact
							</NavLink>
						</li>
					</ul>
				</nav>
				<nav className={css.navbarSecondary} aria-label="secondary">
					<ul className={css.navListSecondary}>
						<li className={css.navlink}>
							<Link to="#">
								<FaUser className={css.icon} />
							</Link>
						</li>
						<li className={css.navlink}>
							<Link to="#">
								<FaSearch className={css.icon} />
							</Link>
						</li>
						<li className={css.navlink}>
							<Link to="#">
								<FaHeart className={css.icon} />
							</Link>
						</li>
						<li className={css.navlink}>
							<Link to="#">
								<Cart items={9} />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
