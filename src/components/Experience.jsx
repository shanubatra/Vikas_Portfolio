import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./Constant";
import Footer from "./Footer";

const Experience = () => {
  return (
    <>
      <div
        className="experience bg-black w-full text-white pt-4 overflow-x-hidden"
        id="experience"
      >
        {" "}
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="pt-14 sm:px-16 sm:mb-2">
          <p className="font-light">MY JOURNEY SO FAR.</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
            Work Experience.
          </h2>
        </div>
        <VerticalTimeline className="mt-9 mb-10">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="relative vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.duration}
              iconStyle={{ background: "#fff" }}
              icon={
                <a
                  className="flex justify-center items-center w-full h-full"
                  href={experience.url}
                  target="_blank"                  rel="noreferrer"
                >
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </a>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold mb-2">
                  {experience.role}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.company}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2 ">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
