import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Animate } from "react-simple-animate";
const Home = () => {
  const navigate = useNavigate();
  const navigateToContactPage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          {" "}
          Hello, I'm Md Isha Alam
          <br />
          Front-End developer,&nbsp;Java developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={navigateToContactPage}> Hire me</button>
          <ul class="horizontal-list text-center social-icons">
            <li>
              <a href="https://www.linkedin.com/in/md-isha-alam-9a9882237/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/mdishaalam1898">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/profile/mdishaalam560">
                <i class="fa-brands fa-hackerrank"></i>
              </a>
            </li>
          </ul>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
