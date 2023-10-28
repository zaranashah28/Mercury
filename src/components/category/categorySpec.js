import React from 'react';
import { motion } from 'framer-motion';

const Specs = () => {
	return (
		<>
			<div className='flex justify-center items-center h-screen'>
				<div className='max-w-sm mx-4'>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className='font-general-medium mt-4 text-lg md:text-2xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
						"Become part of a legitimate race!"
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
						"In the MercuryVRC Playground, all are racers!""
                    </motion.p>
                    
                    <motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
						Even though we call it the Playground, this is not a game. With the world’s first teleoperated racing system, we take racing entertainment beyond simulation. From our remote racing cockpits you’re handling our MercuryVRC electric cars, racing on real tracks, competing with real people from all around the world.
					</motion.p>
				</div>

			
            </div>
            
            <div className='flex justify-center items-center h-screen'>
				<div className='max-w-sm mx-4 mt-10'>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className='font-general-medium mt-4 text-lg md:text-2xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
						"Teleoperations at the highest speed globally."
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
						At the MercuryVRC Playground, you'll discover an enchanting blend of magic and amusement that elevates the fun and games to a whole new level.
                    </motion.p>
                    
                    <motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'>
						With our MercuryVRC Teleoperation Technology, we effectively eliminate latency, allowing you to have complete control in real-time on the MercuryVRC Playground, where every millisecond is of utmost importance, particularly on the race track.
					</motion.p>
				</div>

			
			</div>
		</>
	);
};

export default Specs;
