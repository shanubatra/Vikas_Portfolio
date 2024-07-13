import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
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
      <div
        className="hero relative h-[calc(100vh)] flex justify-center items-center text-white"
        id="hero"
      >
        <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl">
          <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
            Hi, I'm
            <span className="text-yellow-200 font-extrabold">
              {" "}
              <Typewriter
                options={{
                  strings: ["Vikas Dhaka", "Flutter Developer"],
                  autoStart: true,
                  loop: true,
                  cursorClassName: "cursorSize",
                }}
              ></Typewriter>
            </span>
          </h1>

          <p className="mt-3 text-xl capitalize">
            I'm dedicated to making user-friendly mobile application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
