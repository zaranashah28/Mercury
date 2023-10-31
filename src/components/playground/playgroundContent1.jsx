import React from 'react';
import { motion } from 'framer-motion';

const PlaygroundContent1 = () => {
    return (
        <div className='pt-20 flex flex-col items-center sm:items-start'>
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
                    Let your Audience get fast and furious
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
                className='font-cursive font-semibold text-3xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10'>
                <span className='text-ternary-dark dark:text-primary-light'>
                    Enjoy the VBR Experience
                </span>
            </motion.h1>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between w-full'>
                <div className='w-full md:w-1/2 text-center sm:w-1/3 mb-5 sm:mb-0'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className='font-cursive font-semibold text-2xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10'>
                        <span
                            className='text-ternary-dark dark:text-primary-light'
                            style={{ color: 'orangered' }}>
                            Easy Set Up
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
                        <strong>
                            Establishing the Playground is equally straightforward as assembling
                            a classic Flipper Machine.
                        </strong>
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
                            Here's the arrangement: We'll take care of arranging the cockpits for you, and we'll also handle the tracks and cars. So, there's no need for you to be concerned about anything. It's quite straightforward, isn't it?
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
                        className='flex justify-center sm:block'></motion.div>
                </div>
                <div className='w-full md:w-1/2 text-center sm:w-1/3 pl-2'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className='font-cursive font-semibold text-2xl lg:text-5xl xl:text-6xl text-center sm:text-left text-primary text-shadow-md mb-5 sm:mb-10'>
                        <span
                            className='text-ternary-dark dark:text-primary-light'
                            style={{ color: 'orangered' }}>
                            Easy Set Up
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
                        <strong>
                            Establishing the Playground is equally straightforward as assembling
                            a classic Flipper Machine.
                        </strong>
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
                            Here's the arrangement: We'll take care of arranging the cockpits for you, and we'll also handle the tracks and cars. So, there's no need for you to be concerned about anything. It's quite straightforward, isn't it?
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
                        className='flex justify-center sm:block'></motion.div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundContent1;
