import React from 'react';
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
import { BsChevronDown } from "react-icons/bs";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter, } from 'react-icons/fi';
import avatar from '../assets/avatar.png';
import Animations from './Animations';

const Home = () => {
    return (
        <main id='home'>
            <section>
                <div>
                    <motion.h1 {...Animations.leftToRight}>
                        Hi, I am <br /> Hussain rizvi
                    </motion.h1>
                </div>

                <Typewriter
                    options={{
                        strings: ["A Developer", "A Designer"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",
                    }} />

                <div>
                    <a href="mailto:hussainrizvi486@gmail.com"><motion.button {...Animations.upToDown}
                        transition={{
                            delay: '0.3',
                        }}

                    >Hire me</motion.button></a>
                </div>

                <div className="icons-bar" >
                    <motion.a {...Animations.upToDown} transition={{ delay: '0.4', ease: "easeInOut", }} href="https://www.facebook.com/hussain.rizvi.395017" target={'blank'}><FiFacebook /></motion.a>
                    <motion.a {...Animations.upToDown} transition={{ delay: '0.6', ease: "easeInOut", }} href="https://github.com/hussainrizvi486" target={'blank'}><FiGithub /></motion.a>
                    <motion.a {...Animations.upToDown} transition={{ delay: '0.8', ease: "easeInOut", }} href="https://www.linkedin.com/in/hussain-rizvi-587515248/"><FiLinkedin /></motion.a>
                    <motion.a {...Animations.upToDown} transition={{ delay: '1', ease: "easeInOut", }} href="https://twitter.com/hussainrizvi486" target={'blank'}><FiTwitter /></motion.a>
                </div>
            </section>

            <section>
                <motion.div
                    initial={Animations.fadeIn.initial}
                    animate={Animations.fadeIn.whileInView}
                    transition={{ duration: 1, ease: "easeInOut", delay: '.5', }}
                >
                    <img src={avatar} alt="" loading='lazy' />
                </motion.div>
            </section>
                <BsChevronDown className='pg-down-arrow' />
        </main>
    )

}
export default Home