import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./header.module.css";
import Logo from "../Logo/Logo.jsx";
import Cart from "../Cart/Cart.jsx";
import NavIcon from "../NavIcon/NavIcon.jsx";

// Icons import
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [menuOpen]);
	return (
		<div className={css.headerContainer}>
			<header className={css.header}>
				<Logo className={css.logo} />
				<div className={`${css.navContainer} ${menuOpen && css.open}`}>
					<nav className={css.navbarPrimary} aria-label="primary">
						<ul className={css.navListPrimary}>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<NavLink
									to="/home"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									home
								</NavLink>
							</li>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<NavLink
									to="/shop"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									shop
								</NavLink>
							</li>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<NavLink
									to="/about"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									about
								</NavLink>
							</li>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
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
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<Link to="#">
									<FaUser className={css.icon} />
								</Link>
							</li>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<Link to="#">
									<FaSearch className={css.icon} />
								</Link>
							</li>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<Link to="#">
									<FaHeart className={css.icon} />
								</Link>
							</li>
							<li className={css.navlink} onClick={() => setMenuOpen(false)}>
								<Link to="#">
									<Cart items={9} />
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<NavIcon
					menuOpen={menuOpen}
					toggleMenuOpen={() => setMenuOpen(!menuOpen)}
				/>
			</header>
		</div>
	);
};

export default Header;
