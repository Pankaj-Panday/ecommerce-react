import React from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./header.module.css";
import Logo from "../Logo/Logo";

// Icons import
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.navContainer}>
				<Logo small />
				<nav className={css.navbarPrimary} aria-label="primary">
					<ul className={css.navListPrimary}>
						<li className={css.navlink}>
							<NavLink
								to="/home"
								className={({ isActive, isPending }) => {
									return isActive ? css.activeLink : "";
								}}
							>
								home
							</NavLink>
						</li>
						<li className={css.navlink}>
							<NavLink to="/shop">shop</NavLink>
						</li>
						<li className={css.navlink}>
							<NavLink to="/about">about</NavLink>
						</li>
						<li className={css.navlink}>
							<NavLink to="/contact">contact</NavLink>
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
								<FaCartShopping className={css.icon} />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
