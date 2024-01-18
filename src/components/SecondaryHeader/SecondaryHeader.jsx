import React from "react";
import { useLocation } from "react-router-dom";
import css from "./secondaryheader.module.css";

// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SecondaryHeader = () => {
	const { pathname } = useLocation();
	let pagename = pathname.charAt(1).toUpperCase() + pathname.slice(2);
	return (
		<section className={css.main}>
			<h1>{pagename}</h1>
			<p>
				<span className={css.bold}>Home </span>
				<span className={css.arrow}>
					<MdOutlineKeyboardArrowRight />
				</span>{" "}
				{pagename}
			</p>
		</section>
	);
};

export default SecondaryHeader;
