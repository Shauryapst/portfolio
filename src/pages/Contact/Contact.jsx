import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../assets/contact/contact2.png";
import Linkedin from '../../assets/social-media-icons/linkedin.svg';
import Github from '../../assets/social-media-icons/github.svg';
import Instagram from '../../assets/social-media-icons/instagram.svg';
import Leetcode from '../../assets/social-media-icons/leetcode.svg';
import Youtube from '../../assets/social-media-icons/youtube.svg';
import { faTwitter as Twitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-img">
          <img src={ContactImg} />
        </div>

        <div className="contact-content">
          <div class="contact-email-form-wrapper">
            <h2>Get in touch!</h2>
            <form className="contact-email-form" onSubmit={handleSubmit}>
              {/* <label htmlFor="name">Name:</label> */}
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />

              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* <label htmlFor="message">Message:</label> */}
              <textarea
                id="message"
                value={message}
                cols="30" rows="5"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
              ></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
          <hr className="contact-content-seperator"></hr>
          <div class="contact-social-media">
            <a href="https://leetcode.com/S_H_A_U_R_Y_A/" target="_blank">
              <img src={Leetcode} alt="LeetCode" />
            </a>
            <a href="https://www.youtube.com/@byteriderr" target="_blank">
              <img src={Youtube} alt="YouTube" />
            </a>
            <a href="https://github.com/Shauryapst" target="_blank">
              <img src={Github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/shaurya-pratap-singh-tomar-aa63b0185/" target="_blank">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/byterid/" target="_blank">
              <img src={Instagram}  alt="Instagram" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
