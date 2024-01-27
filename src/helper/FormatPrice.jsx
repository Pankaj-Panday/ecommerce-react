import React from "react";

const FormatPrice = ({ price, className }) => {
	const formattedPrice = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 2,
	}).format(price);
	return <span className={className}>{formattedPrice}</span>;
};

export default FormatPrice;
