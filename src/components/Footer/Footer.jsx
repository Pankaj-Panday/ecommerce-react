import React from "react";
import { NavLink, Form } from "react-router-dom";
import css from "./footer.module.css";
import Logo from "../../components/Logo/Logo.jsx";

const Footer = () => {
	return (
		<div className={css.footerContainer}>
			<div className="mainContainer">
				<div className={css.footer}>
					<div>
						<Logo small />
						<p>
							400 University Drive Suite 200 Coral <br />
							Gables, <br />
							FL 33134 USA
						</p>
					</div>
					<div>
						<h4>NavLinks</h4>
						<ul>
							<li>
								<NavLink
									to="/home"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/shop"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									shop
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									about
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									contact
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h4>help</h4>
						<ul>
							<li>
								<NavLink
									to="/payment"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									payment options
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/returns"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									returns
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/privacy"
									className={({ isActive }) => {
										return isActive ? css.activeLink : "";
									}}
								>
									privacy policy
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h4>newsletter</h4>
						{/* Form to handled later, for now its a dummy form */}
						<Form>
							<input
								name="email"
								type="email"
								placeholder="Enter your email address"
								className={css.formInput}
								autoComplete="off"
							/>
							<button type="submit" className={css.formBtn}>
								Subscribe
							</button>
						</Form>
					</div>
				</div>
				<hr className={css.horizontalRow} />
				<p className={css.copyrightText}>
					{new Date().getFullYear()} furino. All rights reverved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
