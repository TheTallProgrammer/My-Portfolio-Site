import React, { memo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import '../styles/Experience.css'

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = memo(({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      icon={
        <motion.div
          className="icon-container"
          aria-hidden="true"
          whileHover={{
            scale: 1.2,
            rotate: 15,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className="icon-image"
            loading="lazy"
            width="100%"
            height="100%"
          />
        </motion.div>
      }
      aria-label={`Experience at ${experience.company_name}`}
    >
      <article>
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-lg font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </article>

      <ul
        className="mt-5 list-disc ml-5 space-y-2"
        aria-label="Job Responsibilities"
      >
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-sm pl-1 tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});


const Experience = () => {
  return (
    <section id="work" className="experience-section">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`} id="sub-work-title">
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`} id="work-experience-title">
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col select-none'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
