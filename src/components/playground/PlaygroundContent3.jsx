import React from "react";
import fair from "../../images/fair-stand.png";
import racing from "../../images/racing-game.png";
import exibition from "../../images/exibition.png";
import superMarket from "../../images/supermarket.png";
import event from "../../images/event.png";
import { motion } from "framer-motion";

const imageArray = [
	
	{
		src: fair,
		caption: "Fun parks",
	},
	{
		src: exibition,
		caption: "Fairs, shows and exhibitions",
	},
	{
		src: superMarket,
		caption: "Shopping Centers",
	},
	{
		src: racing,
		caption: "Motorsport and go-cart circuits",
	},
	{
		src: event,
		caption: "Events",
	},
];

function PlaygroundContent3() {
	return (
		<div className="pt-20 flex flex-col items-center sm:items-start">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 0.9,
					delay: 0.1,
				}}
				className="font-cursive font-semibold text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10"
			>
				<span className="text-ternary-dark dark:text-primary-light">
					Where motors are roaring, it is not boring
				</span>
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 0.9,
					delay: 0.1,
				}}
				className="font-cursive font-semibold text-2xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10"
			>
				<span className="text-ternary-dark dark:text-primary-light">
					Fill up the fun tanks of your audience, clients and teams! MercuryVRC
					Playground is a magic match for …
				</span>
			</motion.h1>
			<div className="flex flex-wrap -mx-4 pt-4" style={{ paddingTop: "5%" }}>
				{imageArray.map((imageUrl, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
					>
						<img
							src={imageUrl.src}
							alt={`as ${index}`}
							className="w-full h-auto"
						/>
						<strong>
							<h3
								className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
							>
								{imageUrl.caption}
							</h3>
						</strong>
					</div>
				))}
			</div>
		</div>
	);
}

export default PlaygroundContent3;
