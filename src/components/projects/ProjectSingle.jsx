import { motion } from 'framer-motion';

const ProjectSingle = ({ title, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}>
			
				<div
					className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark'
					style={{ height: '75%' }}>
					<div>
						<img
							src={image}
							className='rounded-t-xl border-none'
							alt='Single Project'
						/>
					</div>
				</div>
				
				<div className='text-center px-2 py-5'>
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
						{title}
					</h3>

				</div>
		</motion.div>
	);
};

export default ProjectSingle;
