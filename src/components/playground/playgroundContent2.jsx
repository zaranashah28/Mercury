import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import RaceAnimation from "../../animation/race";

const PlaygroundContent2 = () => {
	return (
		<div
			className="flex flex-col items-center sm:items-start container"
			style={{ paddingTop: "5%" }}
		>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
				className="flex flex-col sm:flex-row items-center sm:justify-between mt-12 md:mt-2"
			>
				<div className="w-full sm:w-2/3 text-center sm:text-right mt-8 sm:mt-0">
					<RaceAnimation />
				</div>

				<div className="w-full sm:w-2/3 text-center" >
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
							Ready to Race
						</span>
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.1,
						}}
						className="font-cursive font-semibold text-l lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10"
					>
						<span className="text-ternary-dark dark:text-primary-light">
							Fuel up your Brand with Experiences your Audience won’t forget
							with our super simple Three-Step-Racing-Plan
						</span>
					</motion.h2>
					<div className="flex flex-wrap gap-3">
						{/* Row 1 */}
						<div className="w-full sm:w-1/2 md:w-1/3 bg-gray-100 rounded-lg">
							<h2 className="text-lg font-bold" style={{ color: "orangered" }}>
								1
							</h2>
							<h2 className="text-lg font-bold" style={{ color: "orangered" }}>
								The
							</h2>
							<h2 className="text-xl font-bold" style={{ color: "orangered" }}>
								Call
							</h2>
							<span className="text-ternary-dark dark:text-primary-light ">
								Put yourself in the pole position, get on a call with us and
								discover endless possibilities. We are on your side when it
								comes to finding the best option for you and your business.
							</span>
						</div>

						{/* Row 2 */}
						<div className="w-full sm:w-1/2 md:w-1/3 bg-gray-100  rounded-lg">
							<h2 className="text-lg font-bold" style={{ color: "orangered" }}>
								2
							</h2>
							<h2 className="text-lg font-bold" style={{ color: "orangered" }}>
								The
							</h2>
							<h2 className="text-xl font-bold" style={{ color: "orangered" }}>
								Set Up
							</h2>
							<span className="text-ternary-dark dark:text-primary-light">
								When setting up your Playground, our engineers are on your side
								from start to finish, so you don’t have to worry about a thing.
								We like to keep it simple here: We are finished when you are
								ready to start!
							</span>
						</div>

						{/* Row 3 */}
						<div className="w-full sm:w-1/2 md:w-1/3 bg-gray-100  rounded-lg">
							<h2 className="text-xl font-bold" style={{ color: "orangered" }}>
								3
							</h2>
							<h2 className="text-xl font-bold" style={{ color: "orangered" }}>
								The
							</h2>
							<h2 className="text-xl font-bold" style={{ color: "orangered" }}>
								Race
							</h2>
							<span className="text-ternary-dark dark:text-primary-light">
								Deliver an unforgettable experience to your audience and let
								people get fast and furious with your VBR Playground. Our
								recommendation: Hit the pedal to the metal, enjoy yourself and
								watch your business grow.
							</span>
						</div>
					</div>
					<a
						href="/contact"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 sm:mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiPhoneCall className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiPhoneCall>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Schedule Call
						</span>
					</a>
				</div>
			</motion.section>
		</div>
	);
};

export default PlaygroundContent2;
