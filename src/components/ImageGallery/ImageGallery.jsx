import React from "react";
import css from "./imagegallery.module.css";

const ImageGallery = ({ images }) => {
	return (
		<div className={css.imgGrid}>
			{images.map((image, index) => {
				const style = {
					backgroundImage: `url("${image}")`,
				};
				return <div key={index} style={style} className={css.img}></div>;
			})}
		</div>
	);
};

export default ImageGallery;
