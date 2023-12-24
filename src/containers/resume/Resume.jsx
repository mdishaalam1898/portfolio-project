import React from "react";
import PageHeaderContent from "../../components/pageContainer/pageContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { educationDetails } from "./utils";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWork} from "react-icons/md"
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header-text"> Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {educationDetails.map((item, i) => (
            <VerticalTimelineElement
            key={i}
            className="timeline__education__vertical-timeline-element"
            contentStyle={{
              background:"none",
              color:"var(--yellow-theme-sub-text-color)",
              border:"1.5px solid var(--yellow-theme-main-color"
            }}
             icon={<MdWork/>}
             iconStyle={{
              background:"#181818",
              color:"var(--yellow-theme-main-color)"
             }}>
              <div className="vertical-timeline-element__title-wrapper">
                <h3 >
                  {item.title}
                </h3>
                <h4 >
                  {item.school}
                </h4>
                <h5>{item.date}</h5>
               
              </div>
              <p>{item.desc}</p>

            </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
          
        </div>
      </div>
    </section>
  );
};
export default Resume;
