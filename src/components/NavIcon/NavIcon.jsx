import React from "react";
import css from "./navicon.module.css";

const NavIcon = ({ menuOpen, toggleMenuOpen, className, style }) => {
	return (
		<div
			className={`${
				menuOpen ? `${css.menu} ${css.active}` : css.menu
			} ${className}`}
			onClick={() => toggleMenuOpen()}
			style={style}
		>
			<span className={css.upper}></span>
			<span className={css.middle}></span>
			<span className={css.lower}></span>
		</div>
	);
};

export default NavIcon;
