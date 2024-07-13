import React from "react";
import "../App.css";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-[88vh] w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
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
        <div className="flex flex-col justify-around z-10">
          <div className="sm:px-16 px-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              👨‍💻 I’m Vikas Dhaka, a 2023 graduate 🎓 passionate about crafting
              robust frontend systems and captivating mobile applications. As a
              dedicated Flutter developer, I focus on creating seamless and
              intuitive user experiences.
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/vikas-dhaka/"
                target="_blank"                rel="noreferrer"
              >
                Flutter developer
              </a>
              🚀.
              <br />
              ✍️ I'm proficient in dart programming and Flutter framework, i am
              excited collabrate with creative teams to deliver top-notch
              solutions while staying update with industry trends. On a
              different note, I love to read books and watch movies🌟.
            </p>

            <ButtonLink
              url="/Vikas_Resume.pdf"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
