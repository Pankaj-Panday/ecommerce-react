import React from "react";
import css from "./secondaryfooter.module.css";

// data
import features from "../../featureData.js";

const SecondaryFooter = () => {
	return (
		<section className={css.footer}>
			<div className={css.container}>
				{features.map((feature) => {
					return <Feature {...feature} key={feature.id} />;
				})}
			</div>
		</section>
	);
};

const Feature = ({ img, name, description }) => {
	return (
		<div className={css.feature}>
			<img src={img} alt="icon" />
			<div className={css.details}>
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default SecondaryFooter;
