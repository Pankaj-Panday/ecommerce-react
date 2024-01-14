import React, { useState } from "react";
import css from "./imageslider.module.css";

//icon
import { SlArrowRight } from "react-icons/sl";

const ImageSlider = ({ slides }) => {
	const [activeImgIndex, setActiveImgIndex] = useState(0);
	function gotoNextImage() {
		if (activeImgIndex === slides.length - 1) {
			setActiveImgIndex(0);
		} else {
			setActiveImgIndex(() => activeImgIndex + 1);
		}
	}

	return (
		<div className={css.wrapper}>
			<div className={css.slider}>
				{slides.map((slide, index) => {
					if (index === activeImgIndex) {
						return (
							<div
								key={index}
								style={{ backgroundImage: `url(${slide.img})` }}
								className={css.slide}
							></div>
						);
					}
				})}
				<div className={css.nextBtn} onClick={gotoNextImage}>
					<SlArrowRight />
				</div>
			</div>
			<div className={css.dots}>
				{slides.map((slide, index) => {
					return (
						<div
							className={`
                ${css.dot}
                ${activeImgIndex === index && css.active}
                `}
							key={index}
							onClick={() => setActiveImgIndex(index)}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageSlider;
