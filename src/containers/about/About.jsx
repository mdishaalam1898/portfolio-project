import React from "react";
import PageHeaderContent from "../../components/pageContainer/pageContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";

const personalDetails = [
  {
    label: "Name",
    Value: "Md Isha Alam",
  },
  {
    label: "Email",
    Value: "mdisha.ece.8340@gmail.com",
  },
  {
    label: "Contact Me",
    Value: "+91 9311426102",
  },
  {
    label: "Addres",
    Value: "Delhi, India",
  },
];
const Summary =
  "Hey, I am Md Isha Alam, recentrly i have completed my B.Tech degree in electronics and communication along with my degree i have also learnt some technical skills as Java, HTML, CSS, JS, Bootstrap, ReactJs & Redux from Coding Ninjas. As a fresher my aim to be a part of an organization where,i can utilize my technical proficiency with the objective to be an asset and meet the goals of growth and development on both professional and personal level.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <p>{Summary}</p>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <h3 className="personalInformationTextHeader">Personal Information</h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}:</span>
                <span className="value">{item.Value}</span>
              </li>
            ))}
          </ul>
        </Animate>
        </div>
       
      </div>
    </section>
  );
};
export default About;
