import React from "react";
import { Link } from "react-router-dom";
import css from "./logo.module.css";

const Logo = ({ style, className, small = null }) => {
	const size = small ? "1.5rem" : "2.125rem";
	return (
		<Link
			to="/"
			className={`${css.logoContainer} ${className}`}
			style={{
				height: size,
				...style,
			}}
		>
			<img src="images/logo.svg" alt="brand-logo" className={css.logo} />
			<span
				className={css.logoText}
				style={{
					fontSize: size,
				}}
			>
				Funiro
			</span>
		</Link>
	);
};

export default Logo;
