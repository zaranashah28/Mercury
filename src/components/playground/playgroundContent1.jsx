import React from "react";
import { motion } from "framer-motion";

const PlaygroundContent1 = () => {
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
					Let your Audience get fast and furious
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
				className="font-cursive font-semibold text-3xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10"
			>
				<span className="text-ternary-dark dark:text-primary-light">
					Enjoy the MercuryVRC Experience
				</span>
			</motion.h1>
			<div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full">
				<div className="w-full md:w-1/2 text-center sm:w-2/3 mb-5 sm:mb-0">
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
						<span
							className="text-ternary-dark dark:text-primary-light"
							style={{ color: "orangered" }}
						>
							Easy Set Up
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						<strong>
							Establishing the Playground is equally straightforward as
							assembling a classic Flipper Machine.
						</strong>
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
                        style={{paddingRight: "5%"}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						Here's the arrangement: We'll take care of arranging the cockpits
						for you, and we'll also handle the tracks and cars. So, there's no
						need for you to be concerned about anything. It's quite
						straightforward, isn't it?
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.3,
						}}
						className="flex justify-center sm:block"
					></motion.div>
				</div>
				<div className="w-full md:w-1/2 text-center sm:w-1/3 pl-2">
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
						<span
							className="text-ternary-dark dark:text-primary-light"
							style={{ color: "orangered" }}
						>
							Supreme Service
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						<strong>You’ll never race alone …</strong>
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						We are on your side making sure your MercuryVRC set up is and stays
						ready whenever the race starts. This means: With the purchase of a
						permanent MercuryVRC Playground set up, you are connected with our
						MercuryVRC Service Team at any time
					</motion.p>

					{/* Fancy "Schedule a Call" button */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.3,
						}}
						className="flex justify-center sm:block"
					></motion.div>
				</div>
			</div>

			<div
				className="flex flex-col sm:flex-row justify-center sm:justify-between w-full"
				style={{ paddingTop: "5%" }}
			>
				<div className="w-full md:w-1/2 text-center sm:w-2/3 mb-5 sm:mb-0">
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
						<span
							className="text-ternary-dark dark:text-primary-light"
							style={{ color: "orangered" }}
						>
							Maximum Versatility
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						<strong>One Cockpit - so many Options!</strong>
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
                        style={{paddingRight: "5%"}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						Put a VBR Cockpit up in your facility and soon your place will
						always remind people of the ride of their life. Use the Playground
						as multiplying magnet, making people pull over direct at your point
						of sale. Or, what about going all in and setting up your own racing
						series, making sure you’re on the same track with your clients and
						team-members.
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.3,
						}}
						className="flex justify-center sm:block"
					></motion.div>
				</div>

				<div className="w-full md:w-1/2 text-center sm:w-1/3 pl-2">
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
						<span
							className="text-ternary-dark dark:text-primary-light"
							style={{ color: "orangered" }}
						>
							Different Booking Options
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						<strong>
							You decide, when the race starts - and, when it ends
						</strong>
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
						No matter if you want a set up for a lifetime or just for the
						weekend - we got your back with individual Playground options for
						you and your audience!
					</motion.p>

					{/* Fancy "Schedule a Call" button */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.9,
							delay: 0.3,
						}}
						className="flex justify-center sm:block"
					></motion.div>
				</div>
			</div>
		</div>
	);
};

export default PlaygroundContent1;
