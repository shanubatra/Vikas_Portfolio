import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "./Constant";
import Footer from "./Footer";

const Education = () => {
  return (
    <>
      <div
        className="education bg-black w-full text-white pt-4 overflow-x-hidden"
        id="education"
      >
     
        <div className="pt-14 sm:px-16 sm:mb-2">
          <p className="font-light">MY CARRER SO FAR.</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
            Education.
          </h2>
        </div>
        
        <VerticalTimeline className="mt-9 mb-10">
          {education.map((education) => (
            <VerticalTimelineElement
              className="relative vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={education.year}
              iconStyle={{ background: "#fff" }}
              icon={
                <a
                  className="flex justify-center items-center w-full h-full"
                  href={education.url}
                  target="_blank"
                >
                  <img
                    src={education.logo}
                    alt={education.name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </a>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold mb-2">
                  {education.course}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {education.name}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2 ">
                <li>{education.decription}</li>
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  );
};

export default Education;
