import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import css from "./errorpage.module.css";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	console.error(error);
	return (
		<div className={css.errorPage}>
			<img src="/images/error.svg" alt="oops" className={css.img} />
			<p className={css.p}>Something went wrong</p>
			<p className={`${css.fade} ${css.p}`}>
				{error.status} {error.statusText}
			</p>
			<button
				className={css.backBtn}
				onClick={() => {
					navigate("/home");
				}}
			>
				Go Home
			</button>
		</div>
	);
};

export default ErrorPage;
