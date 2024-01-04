import React from "react";
import { useRouteError } from "react-router-dom";
import css from "./errorpage.module.css";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);
	return (
		<div className={css.errorPage}>
			<h1 className={css.h1}>Oops!</h1>
			<p className={css.p}>Something went wrong</p>
			<p className={`${css.fade} ${css.p}`}>
				{error.status} {error.statusText}
			</p>
		</div>
	);
};

export default ErrorPage;
