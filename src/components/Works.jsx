import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";
import { Helmet } from 'react-helmet';
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * Card wrapper variants: 
 * - 'initial': card is off-screen (opaque=0, y=40)
 * - 'animate': card slides into position (y=0) and fades in (opacity=1)
 */
const cardWrapperVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      className="new-project-card-wrapper"
      // Pass the index to our variant for staggering
      custom={index}
      variants={cardWrapperVariants}
      initial="initial"
      whileInView="animate"                 // Animate on scroll
      viewport={{ once: true, amount: 0.2 }} // Only animate once, trigger at ~20% in view
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      {/* Animated Grayscale Glow in the background */}
      <motion.div
        className="new-project-card-glow"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Card front-face with video preview */}
      <motion.div
        className="new-project-front-face"
        whileHover={{ rotateY: 10 }}
      >
        <div className="new-project-video-container">
          <video
            src={image}
            className="new-project-video"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex justify-end m-3 new-card-img-hover">
            {/* GitHub Icon */}
            <motion.div
              onClick={() => window.open(source_code_link, "_blank")}
              className="new-project-github"
              whileHover={{ scale: 1.2, rotate: 20 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Card info */}
      <div className="new-project-info">
        <motion.h3
          className="new-project-title"
          whileHover={{
            textShadow: [
              "0px 0px 5px #fff",
              "0px 0px 10px #FFD700",
              "0px 0px 5px #fff",
            ],
          }}
        >
          {name}
        </motion.h3>
        <p className="new-project-description">{description}</p>
        <div className="new-project-tags-container">
          {tags.map((tag) => (
            <motion.span
              key={`${name}-${tag.name}`}
              className={`new-project-tag ${tag.color}`}
            >
              #{tag.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Logan Falkenberg - Projects</title>
        <meta
          name="description"
          content="Explore the projects of Logan Falkenberg, a software engineer specializing in full-stack development. Discover innovative solutions and cutting-edge applications."
        />
        <meta
          name="keywords"
          content="Logan Falkenberg, Projects, Software Engineering, Full-Stack Development, Portfolio"
        />
      </Helmet>

      {/* Section Title: Slide in when in view */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={`${styles.sectionSubText} text-center`} id="work-subtitle">
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`} id="work-title">
          Projects.
        </h2>
      </motion.div>

      {/* Intro Paragraph: Slide in when in view */}
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center select-none"
        >
          As a dedicated Software Engineer with a strong foundation in Computer
          Science and an interest in Mathematics, I have consistently leveraged
          my technical skills to develop impactful and user-friendly software
          solutions. My passion lies in full-stack development, with a
          particular emphasis on front-end and back-end technologies, enabling
          me to design, implement, and optimize complex applications that cater
          to diverse user needs.
        </motion.p>
      </div>

      {/* Animated gradient background across the projects container */}
      <motion.div
        className="new-projects-container"
        initial={{ backgroundPosition: "0% 50%" }}
        whileInView={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        viewport={{ once: false, amount: 0.2 }} // Animate background each time it enters view
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Cards Container: fade/slide into view */}
        <motion.div
          className="mt-20 flex flex-wrap gap-7 justify-center"
          variants={fadeIn("", "", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
