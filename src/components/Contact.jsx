import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import "../styles/Contact.css";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
    .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Logan Falkenberg",
          from_email: form.email,
          to_email: process.env.REACT_APP_EMAILJS_FROM_EMAIL,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Logan Falkenberg</title>
        <meta
          name="description"
          content="Get in touch with Logan Falkenberg, a skilled Software Engineer. Send a message to discuss projects, collaborations, or opportunities."
        />
        <meta
          name="keywords"
          content="Contact, Logan Falkenberg, Software Engineer, Email, Collaboration, Projects"
        />
        <link rel="canonical" href="https://www.loganfalkenberg.com/contact" />
      </Helmet>

      <div
        className="flex-col-reverse gap-10 overflow-hidden w-full contact-parent"
        id="contact-container"
      >
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] semi-dark-bg p-8 rounded-2xl w-full contact-form-container"
          aria-labelledby="contact-form-title"
        >
          <div className="socials-container">
            <a
              href="https://www.linkedin.com/in/logan-falkenberg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img
                src="/assets/linkedin-contact.png"
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>
            <a
              href="https://github.com/thetallprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img
                src="/assets/github-contact.png"
                className="github-icon"
                alt="GitHub"
              />
            </a>
          </div>
          <p className={`${styles.sectionSubText} select-none`}>Let's Connect</p>
          {/* Only show the typing animation if the form isn't sent */}
          {!sent && (
            <TypeAnimation
              sequence={[
                "Say hey, let’s chat",
                1500,
                "I’d love to help",
                1500,
                "Need a collab?",
                1500,
                "Let’s build stuff",
                1500,
                "Drop me a line",
                1500,
                "Say hi, let’s talk",
                1500,
                "I’m just a DM away",
                1500,
                "Happy to connect",
                1500,
                "Got an idea? Share!",
                1500,
                "Reach out, let’s jam",
                1500,
                "Turn ideas real",
                1500,
                "Stoked to hear you",
                1500,
                "Let’s innovate now",
                1500,
                "Make magic happen?",
                1500,
                "Code something epic?",
                1500,
                "Bring ideas to life!",
                1500,
                "Let’s create greatness!",
                1500,
                "Ready to build big?",
                1500,
                "Let’s make it awesome!",
                1500,
                "Ready to dive in?",
                1500,
                "Let’s push limits!",
                1500,
                "Dream big, code bigger!",
                1500,
                "Big ideas? Let’s go!",
                1500,
                "Let’s build the future!",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className={`${styles.sectionHeadText} typed-heading select-none`}
            />
          )}

          {!sent ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
              aria-describedby="contact-form-description"
            >
              {/* Form Fields */}
              <label className="flex flex-col" htmlFor="name">
                <span className="text-white font-medium mb-4 hover-text-transition">
                  Your Name
                </span>
                <motion.input
                  whileFocus={{ scale: 1.03 }}
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Hey, what’s your name?"
                  className={`dark-input ${errors.name ? "error-border" : ""}`}
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span className="error-text" id="name-error">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="flex flex-col" htmlFor="email">
                <span className="text-white font-medium mb-4 hover-text-transition">
                  Your Email
                </span>
                <motion.input
                  whileFocus={{ scale: 1.03 }}
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your go-to email?"
                  className={`dark-input ${errors.email ? "error-border" : ""}`}
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="error-text" id="email-error">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="flex flex-col" htmlFor="message">
                <span className="text-white font-medium mb-4 hover-text-transition">
                  Your Message
                </span>
                <motion.textarea
                  whileFocus={{ scale: 1.03 }}
                  rows={6}
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I bring your ideas to life?"
                  className={`dark-input ${errors.message ? "error-border" : ""}`}
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span className="error-text" id="message-error">
                    {errors.message}
                  </span>
                )}
              </label>

              <motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="send-button text-white font-bold text-center"
                disabled={loading}
                aria-busy={loading}
              >
                {/* From Uiverse.io by adamgiebl */}
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      />
                    </svg>
                  </div>
                </div>
                <span>{loading ? "Sending..." : "Send"}</span>
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="thank-you-message-container"
              role="status"
              aria-live="polite"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="thank-you-text"
              >
                Thank You for Your Message!
              </motion.h2>
              <motion.p
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 60 }}
                className="thank-you-subtext"
              >
                I’ll get back to you as soon as possible.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
