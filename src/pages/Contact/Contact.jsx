import React from "react";
import { Form } from "react-router-dom";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";

import css from "./contact.module.css";

// Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

const Contact = () => {
	return (
		<main>
			<SecondaryHeader />
			<section className="mainContainer">
				<div className={css.header}>
					<h2>Get In touch with us</h2>
					<p>
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us <br /> An Email. Our Staff Always Be There To Help You
						Out. Do Not Hesitate!
					</p>
				</div>
				<section className={css.contactContainer}>
					<div className={css.details}>
						<div>
							<div className={css.icon}>
								<IoLocationSharp />
							</div>
							<div>
								<h3>Address</h3>
								<p>
									236 5th SE Avenue, <br />
									New York NY10000, United States
								</p>
							</div>
						</div>
						<div>
							<div className={css.icon}>
								<FaPhoneAlt />
							</div>
							<div>
								<h3>Phone</h3>
								<p>
									Mobile: +(84) 546-6789 <br />
									Hotline: +(84) 456-6789
								</p>
							</div>
						</div>
						<div>
							<div className={css.icon}>
								<MdWatchLater />
							</div>
							<div>
								<h3>Working Time</h3>
								<p>
									Monday-Friday: 9:00 - 22:00 <br />
									Saturday-Sunday: 9:00 - 21:00
								</p>
							</div>
						</div>
					</div>
					<Form className={css.contactForm}>
						<div className={css.input}>
							<label htmlFor="name">Your name</label>
							<input
								type="text"
								id="name"
								name="name"
								autoComplete="off"
								placeholder="Abc"
							/>
						</div>
						<div className={css.input}>
							<label htmlFor="email">Email address</label>
							<input
								type="text"
								id="email"
								name="email"
								autoComplete="off"
								placeholder="Abc@def.com"
							/>
						</div>
						<div className={css.input}>
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								autoComplete="off"
								placeholder="This is optional"
							/>
						</div>
						<div className={css.input}>
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols="70"
								rows="5"
								placeholder="Hi! i’d like to ask about"
							></textarea>
						</div>
						<button type="submit" className={css.sendBtn}>
							Send
						</button>
					</Form>
				</section>
			</section>
			<SecondaryFooter />
		</main>
	);
};

export default Contact;
