import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { styles } from '../style';
import { services } from '../constants/index.js';
import { fadeIn, textVariant } from "../utils/motion";
import '../styles/About.css';
import { SectionWrapper } from '../hoc/index.js';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='glass-background rounded-[20px] py-6 px-8 min-h-[280px] flex justify-center items-center flex-col'
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center select-none'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Learn more about Logan Falkenberg, a passionate Software Engineer with expertise in full-stack development, front-end and back-end technologies, and a strong background in Computer Science and Mathematics." />
        <meta name="keywords" content="Logan Falkenberg, About, Software Engineer, Full-Stack Development, Computer Science, Mathematics, Portfolio" />
        <title>About Logan Falkenberg - Software Engineer</title>
      </Helmet>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} id='introduction-title'>Introduction</p>
        <h2 className={styles.sectionHeadText} id='overview-title'>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="overview-section mt-4 text-secondary text-[17px] leading-[30px] text-center w-full select-none"
        id="about-text-container"
      >
        Hello! My name is Logan Falkenberg, a Senior at Texas State University, majoring in Computer Science and minoring in Mathematics. Graduating in May 2025, I have a strong passion for both front-end and back-end development. I strive to create applications that balance efficiency with user-friendly interfaces, focusing on intuitive design and maintainable code. My technical proficiency spans various programming languages and frameworks.

        As a motivated learner and problem-solver, I thrive in collaborative environments, seamlessly leading projects and working within teams to achieve success. My experience as a Lead Instructor at Code Ninjas has enhanced both my technical skills and my ability to mentor others. I’m particularly drawn to full-stack development roles, as they offer the opportunity to engage with every stage of software creation. I look forward to leveraging my skills to contribute to impactful and innovative projects in the tech industry.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
