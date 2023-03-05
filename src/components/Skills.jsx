import React from 'react';
import Animations from './Animations';
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <main id='skills'>
            <section>
                <motion.div {...Animations.leftToRight}>
                    <h1>Skills.</h1>
                    <p>As a developer skilled in both React and Django, I possess a strong foundation in two widely used web development technologies. React is a JavaScript library used to build interactive user interfaces, while Django is a high-level Python web framework. My expertise in these areas enables me to create modern, scalable, and interactive web applications.</p>
                    <p>With my React skills, I can create reusable UI components and efficiently render dynamic data in your applications. I also have a good understanding of the virtual DOM and the use of React hooks to manage application state.</p>
                    <p>In addition, I have a deep understanding of the Model-Template-View (MTV) pattern and expertise in using Django's ORM to interact with databases. Moreover, I also have knowledge of Django's REST framework, which allows me to build web APIs and enables easy communication between the front-end and back-end components of web applications.</p>
                </motion.div>
            </section>
            <section>
                <div className="card-wrapper"  >
                    <motion.div className="skill-card-1" {...Animations.upToDown} transition={{
                        delay: '0.4'
                    }}>
                        <h3>Front-end Development</h3>
                        <p>I have experience in front-end web development using HTML, CSS, and JavaScript. I am also familiar with popular CSS frameworks like Bootstrap, Tailwind, and Sass. My go-to framework for advanced web front-end development is React JS.</p>
                    </motion.div>
                    <motion.div className="skill-card-2" {...Animations.upToDown}
                        transition={{
                            delay: '0.6'
                        }}>
                        <h3>Back-end Development</h3>
                        <p>I use Flask and Django, the two most popular Python frameworks, for back-end development. I prefer Django for its extensive built-in libraries and tools, such as form handling and authentication systems.</p>
                    </motion.div>
                    <motion.div className="skill-card-3" {...Animations.leftToRight} transition={{
                        delay: '0.8'
                    }}>
                        <h3>Some other stuff</h3>
                        <p>I also have good knowledge of computer networking, cybersecurity penetration testing, basic Photoshop skills, and proficiency in using both Windows and Linux.</p>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default Skills