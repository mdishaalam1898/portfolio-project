import React from "react";
import PageHeaderContent from "../../components/pageContainer/pageContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.scss";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Successfully Send");
    emailjs
      .sendForm(
        "service_b1ud30n",
        "template_w2cb3m5",
        form.current,
        "bCDk4i4-NZOrJwGoC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            ref={form}
            className="contact__content__form"
            action="POST"
            onSubmit={sendEmail}
          >
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  type="text"
                  name="from_name"
                  className="inputName"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  type="text"
                  name="from_email"
                  className="inputEmail"
                />
                <label htmlFor="name" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  type="text"
                  name="message"
                  className="inputDesc"
                  rows={5}
                />
                <label htmlFor="name" className="descLabel">
                  Message
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
