import React from 'react';
import { motion } from 'framer-motion';
import PlaygroundAnimation from '../../animation/playground';
import { CategoryProvider } from '../../context/CategoryContext';
import CategoryGrid from '../category/CategoryGrid';
import Specs from '../category/categorySpec';
import PlaygroundContent1 from './playgroundContent1';
import { FiPhoneCall } from 'react-icons/fi';
import PlaygroundContent2 from './playgroundContent2';
import PlaygroundContent3 from './PlaygroundContent3';

const PlayGround = () => {
    return (
        <div className="container">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className='flex flex-col sm:flex-row items-center sm:justify-between mt-12 md:mt-2'>
                <div className='w-full sm:w-2/3 text-center sm:text-right mt-8 sm:mt-0'>
                    <PlaygroundAnimation />
                </div>

                <div className='w-full sm:w-1/3 text-center'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className='font-cursive font-semibold text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10'>
                        <span className='text-ternary-dark dark:text-primary-light'>
                            Playground
                        </span>
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className='font-serif font-semibold text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md'>
                        <span className='text-ternary-dark dark:text-primary-light'>
                            The world's pioneering
                        </span>
                        <span className='text-ternary-dark dark:text-primary-light font-extrabold ml-2'>
                            Teleoperated Racing System.
                        </span>
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
                        "Elevate the realm of entertainment and provide your audience with an
                        unforgettable experience."
                    </motion.p>

                    {/* Fancy "Schedule a Call" button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.3,
                        }}
                        className='flex justify-center sm:block'>
                        <a
                            href='/contact'
                            className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 sm:mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500'
                            aria-label='Download Resume'>
                            <FiPhoneCall className='mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100'></FiPhoneCall>
                            <span className='text-sm sm:text-lg font-general-medium duration-100'>
                                Schedule Call
                            </span>
                        </a>
                    </motion.div>
                </div>
            </motion.section>
            <CategoryProvider>
                <CategoryGrid></CategoryGrid>
            </CategoryProvider>
            <Specs />
            <PlaygroundContent1 />
            <PlaygroundContent2 />
            <CategoryProvider>
                <PlaygroundContent3></PlaygroundContent3>
            </CategoryProvider>
        </div>
    );
};

export default PlayGround;
