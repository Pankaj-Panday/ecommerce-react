import React from "react";
import css from "./rating.module.css";
import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from "react-icons/io";

const Rating = ({ rating }) => {
	const integerRating = Math.floor(rating);
	const decimalRating = rating - integerRating;
	return (
		<span>
			{Array.from({ length: 5 }, (elem, index) => {
				return (
					<span key={index} className={css.star}>
						{index < integerRating ? (
							<IoIosStar />
						) : index === integerRating && decimalRating >= 0.5 ? (
							<IoIosStarHalf />
						) : (
							<IoIosStarOutline />
						)}
					</span>
				);
			})}
		</span>
	);
};

export default Rating;
