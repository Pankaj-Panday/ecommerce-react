import React, { useState } from "react";
import css from "./productimagecase.module.css";

const ProductImageCase = ({
	images = [{ url: "", name: "product image" }],
}) => {
	const [activeImage, setActiveImage] = useState(0);
	return (
		<section className={css.container}>
			<div className={css.secondaryImgContainer}>
				{images?.map((image, index) => {
					return (
						<figure
							key={index}
							className={css.secondaryImage}
							onClick={() => setActiveImage(index)}
						>
							<img src={image?.url} alt={image?.name} />
						</figure>
					);
				})}
			</div>
			<div className={css.primaryImgContainer}>
				<figure className={css.primaryImage}>
					<img src={images[activeImage]?.url} alt={images[activeImage]?.name} />
				</figure>
			</div>
		</section>
	);
};

export default ProductImageCase;
