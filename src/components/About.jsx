import React from 'react';
import { motion } from 'framer-motion';
import Animations from './Animations';
import Face1 from '../assets/face1.png';
import Face2 from '../assets/face2.png';
import Face3 from '../assets/face3.png';
import Face4 from '../assets/face4.jpg';
import face5 from '../assets/face5.png';
import Face6 from '../assets/face6.png';




const About = () => {
    return (
        <main id='about'>
            <section>
                <div >
                    <motion.h1  {...Animations.leftToRight}>About me.</motion.h1>
                    <motion.p {...Animations.leftToRight} transition={{ delay: '0.2' }}>Hello! My name is Hussain Rizvi, and I'm a passionate web developer with expertise in front-end and back-end development, website design, and optimization. Since my interest in web development began in 2022, I have been on a mission to create exceptional web solutions that meet my clients' unique needs and exceed their expectations. <br /><br />
                        I pride myself on my exceptional coding skills and quick adaptability to new technologies. I have gained valuable experience in various areas of web development and am committed to delivering high-quality work that helps businesses and individuals achieve their goals. Let's work together to create an exceptional web solution that sets you apart from the rest.
                    </motion.p>
                    <motion.h3  {...Animations.leftToRight} transition={{ delay: '0.5' }}>Personal information</motion.h3>
                    <ul>
                        <motion.li {...Animations.upToDown} transition={{ delay: '0.6' }}>Name: Hussain rizvi</motion.li>
                        <motion.li {...Animations.upToDown} transition={{ delay: '0.7' }}>Gender: Male</motion.li>
                        <motion.li {...Animations.upToDown} transition={{ delay: '0.8' }}>Date of birth: 29/6/2007 </motion.li>
                        <motion.li {...Animations.upToDown} transition={{ delay: '1' }}>Address: Sector 5I, North Karachi</motion.li>
                        <motion.li {...Animations.upToDown} transition={{ delay: '1.1' }}>Email: hussainrizvi486@gmail.com</motion.li>
                    </ul>
                </div>
            </section>
            <section>

                <div className="cube-wrapper">
                    <motion.div className="cube" initial={Animations.fadeIn.initial}
                        animate={Animations.fadeIn.whileInView}
                        transition={{ duration: 1, ease: "easeInOut", delay: '.5', }} >
                        <div className="cube-face-1">
                            <img src={Face1}
                                alt="" loading="lazy" />
                        </div>
                        <div className="cube-face-2">
                            <img src={Face2}
                                alt="" loading="lazy" />
                        </div>
                        <div className="cube-face-3">
                            <img src={Face3}
                                alt="" loading="lazy" />
                        </div>
                        <div className="cube-face-4">
                            <img src={Face4}
                                alt="" loading="lazy" />
                        </div>
                        <div className="cube-face-5">
                            <img src={face5}
                                alt="" loading="lazy" />
                        </div>
                        <div className="cube-face-6">
                            <img src={Face6}
                                alt="" loading="lazy" />
                        </div>
                    </motion.div>
                    <div className="cube-shadow"></div>
                </div>

            </section>
        </main >
    )
}

export default About