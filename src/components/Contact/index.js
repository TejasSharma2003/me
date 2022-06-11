import React, { useState } from "react";
import SectionHead from "../helpers";
import "./index.css";
import "aos/dist/aos.css";
import map from "../../assets/map.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [inputEffects, setInputEffects] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const registerInput = (e) => {
    const { name, value } = e.target;
    setUserInput((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleFocus = (e) => {
    const { name, value } = e.target;
    setInputEffects((pre) => {
      return { ...pre, [name]: true };
    });
  };

  const handleOnBlur = () => {
    setInputEffects({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
  };

  const isFilled = () => {
    const { name, email, subject, message } = userInput;
    if (!name || !email || !subject || !message) return false;
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFilled())
      return toast.error("Please fill in all required fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });

    emailjs
      .send(
        "service_7ge76ji",
        "template_rkx6ors",
        userInput,
        "Cw4UgV5fGcfwBg93l"
      )
      .then(
        function (response) {
          toast.success("Your e-mail has been successfully sent. Thankyou!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        },
        function (error) {
          return toast.error("Sorry email could not be send :(", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div id="contact" className="main-section section-contact" data-aos="fade-up">
      <div className="container">
        <div className="contact-me-contents">
          <SectionHead value="Contact" />
          <div className="form-map">
            <div className="text">
              <p>
                I am interested in freelance opportunities especially ambitious
                or large projects. However, if you have other request or
                question, don’t hesitate to contact me using below form either.
              </p>
              <div className="form">
                <form autoComplete="off" onSubmit={sendEmail}>
                  <ul onBlur={handleOnBlur}>
                    <li
                      className="box-name-email mar-down"
                      data-aos="fade-up"
                      // data-aos-delay="100"
                    >
                      <li className="field" onFocus={handleFocus}>
                        <input
                          onChange={registerInput}
                          className="input-contact  input-name"
                          placeholder="Name"
                          name="name"
                          autoComplete="new-password"
                        />
                        <label
                          className={`beautifull-effect ${
                            inputEffects.name && "beautifull-effect-active"
                          }`}
                        ></label>
                      </li>
                      <li className="field" onFocus={handleFocus}>
                        <input
                          onChange={registerInput}
                          className="input-contact input-email"
                          placeholder="Email"
                          type="email"
                          name="email"
                        />
                        <label
                          className={`beautifull-effect  ${
                            inputEffects.email && "beautifull-effect-active"
                          }`}
                        ></label>
                      </li>
                    </li>
                    <li
                      className="position-rel mar-down"
                      data-aos="fade-up"
                      // data-aos-delay="300"
                      onFocus={handleFocus}
                    >
                      <input
                        onChange={registerInput}
                        className="input-contact  input-subject"
                        placeholder="Subject"
                        type="text"
                        name="subject"
                      />
                      <label
                        className={`beautifull-effect  ${
                          inputEffects.subject && "beautifull-effect-active"
                        }`}
                      ></label>
                    </li>
                    <li
                      className="position-rel mar-down"
                      data-aos="fade-up"
                      // data-aos-delay="400"
                      onFocus={handleFocus}
                    >
                      <textarea
                        onChange={registerInput}
                        className="input-contact  input-textarea"
                        placeholder="Message"
                        type="text"
                        rows="10"
                        cols="40"
                        name="message"
                      />
                      <label
                        className={`beautifull-effect  ${
                          inputEffects.message && "beautifull-effect-active"
                        }`}
                      ></label>
                    </li>
                    <li className="contact send-email">
                      <button className="contact-btn">Send me!</button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="map" data-aos="fade-left">
              <div className="info" data-aos="fade-up">
                <p>
                  Tejas Sharma,
                  <br />
                  India,Uttrakhand Deheradun, Balawala
                  <br />
                  <a
                    className="email-link"
                    href="mailto:TejasSharma@2021outlook.com"
                  >
                    @:TejasSharma@2021outlook.com
                  </a>
                </p>
              </div>
              <img className="map-img" src={map} alt="map" />
            </div>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            draggable={false}
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
