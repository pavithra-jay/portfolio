/* eslint-disable react-hooks/incompatible-library */
import "./Contact.css";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Container from "../../../ui/Container/Container";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "../../../../validation/ContactSchema";


const Contact = () => {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  const sendEmail = async (data) => {
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_4r16jod", // Your Service ID
        "template_nbf8qzu", // <-- Replace with your correct Template ID
        {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message,
        },
        "lhhlWe0FPI-p9BD33" // Public Key
      );

      setSuccessMessage(
        "✅ Message sent successfully. I'll get back to you soon."
      );

      reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "❌ Unable to send message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

   return (
    <section className="contact" id="contact">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Contact</p>

          <h2>Let's Build Something Amazing</h2>

          <p className="section-description">
            Whether it's a React application, a full-stack project or an
            exciting opportunity, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <a
              href="mailto:pavithra.evara@gmail.com"
              className="contact-card"
            >
              <FiMail />

              <div>
                <h4>Email</h4>

                <p>Feel free to contact!</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pavithra-jay-6348b6419"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FiLinkedin />

              <div>
                <h4>LinkedIn</h4>

                <p>Let's connect professionally</p>
              </div>
            </a>

            <a
              href="https://github.com/pavithra-jay"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FiGithub />

              <div>
                <h4>GitHub</h4>

                <p>Explore my projects</p>
              </div>
            </a>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit(sendEmail)}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            {/* NAME */}

            <input
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              {...register("from_name")}
            />

            {errors.from_name && (
              <span className="form-error">
                {errors.from_name.message}
              </span>
            )}

            {/* EMAIL */}

            <input
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              {...register("from_email")}
            />

            {errors.from_email && (
              <span className="form-error">
                {errors.from_email.message}
              </span>
            )}

            {/* MESSAGE */}

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              {...register("message")}
            />

            <div className="character-count">
              {(watch("message") || "").length}/1000
            </div>

            {errors.message && (
              <span className="form-error">
                {errors.message.message}
              </span>
            )}

            {successMessage && (
              <div className="success-message">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
            >
              {isSending
                ? "Sending..."
                : "Send Message"}
            </button>

          </motion.form>

        </div>
      </Container>
    </section>
  );
};

export default Contact;