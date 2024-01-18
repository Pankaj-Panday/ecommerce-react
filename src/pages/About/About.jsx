import React from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";

import css from "./about.module.css";

const About = () => {
	return (
		<main>
			<SecondaryHeader />
			<section className={css.aboutSection}>
				<div className="mainContainer">
					<section>
						<img src="images/furniturePic.jpg" alt="furniture" />
						<div>
							<h3>About Furino</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
								unde error culpa numquam cum harum asperiores pariatur
								distinctio non. Error id voluptates quos eveniet hic minus quod
								debitis rem maiores eum eius laborum earum, pariatur libero
								velit magni voluptatum eos aut. Quo assumenda sequi natus neque
								explicabo, perferendis architecto excepturi, consequatur, quia
								saepe nobis! Magnam hic quibusdam nulla officia, et quam vero
								accusantium illo numquam voluptate velit culpa minus quia ad
								mollitia commodi sequi possimus neque quidem sapiente non
								voluptas. Repudiandae quibusdam odit asperiores quod nobis ab
								iusto. Error facere qui, repellat saepe eligendi odit beatae sit
								sunt est laudantium.
							</p>
						</div>
					</section>
					<section>
						<img src="images/teamPic1.jpg" alt="team" />
						<div>
							<h3>Who We Are?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio pariatur, cum ab porro libero ipsa illo eaque est
								voluptas earum delectus optio sunt sed velit cumque dignissimos
								modi mollitia. Pariatur, id provident? Cumque hic minus nostrum
								fugit ab, rerum optio suscipit blanditiis officia quam illo
								laborum beatae aperiam accusamus quae quo iusto harum neque,
								itaque dolorem ea non? Pariatur consectetur nobis delectus, quos
								aspernatur ad vitae reprehenderit praesentium dicta? Fugit
								maiores quam deserun.
							</p>
						</div>
					</section>
					<section>
						<img src="images/teamPic2.jpg" alt="team" />
						<div>
							<h3>Our Team</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
								nostrum laudantium, incidunt natus dolorum cupiditate non
								dolorem iure doloribus, aliquid est repellendus! Cumque minima,
								distinctio reprehenderit, sunt expedita laborum voluptate,
								tempora eius repudiandae corporis illum perferendis adipisci
								suscipit voluptatum quo commodi deserunt quod accusamus
								excepturi nihil necessitatibus sit aspernatur! Dolor, accusamus
								nisi atque sint repellat alias! Neque autem eos est possimus
								impedit voluptas laboriosam, quaerat earum animi accusantium
								amet unde rem, quo, vitae tempora ratione?
							</p>
						</div>
					</section>
				</div>
			</section>
			<SecondaryFooter />
		</main>
	);
};

export default About;
