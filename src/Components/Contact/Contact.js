import React, { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import emailjs from "emailjs-com/";
import "./Contact.css";

function Contact() {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5pycdz3",
        "template_2q45zbn",
        form.current,
        "Qp9tlvPoW4IuWgIkJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>goldenstaytes@naver.com</h5>
            <a href="mailto:goldenstaytes@naver.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessageLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Enterprise09</h5>
            <a
              href="https://www.instagram.com/k_teaho0909/?hl=ko"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
