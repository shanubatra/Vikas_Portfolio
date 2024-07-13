import React from "react";
import Footer from "./Footer";
import { skills } from "./Constant";

export default function Skills() {
  return (
    <>
      <div
        className="experience bg-black w-full h-full text-white pt-4 overflow-x-hidden"
        id="experience"
      >

        <div>
          <div className="container">
            <div className="pt-14 sm:px-16 sm:mb-2">
              <h2 className="text-4xl sm:text-6xl font-extrabold mt-2">
                Skills
              </h2>
              <p className="font-light">
                "i showcase a diverse set of skills that reflect my versatility
                and expertise"
              </p>
            </div>
            <div className="row mt-4 mb-4 ">
              {skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-5 col-md-12 mb-4 container-fluid text-white"
                  >
                    <div className="card card-shadow bg-black">
                      <div className="card-body text-center border-2 rounded-3xl">
                        <h2 className="card-title text-4xl sm:text-3xl font-bold ">
                          {item.title}
                        </h2>
                        <div className="card border-0">
                          <div className="d-flex justify-content-evenly parent flex-wrap p-2 bg-black">
                            {item.skills.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className="p-3 align-items-center m-2 child d-flex flex-row card-shadow border "
                                  style={{ borderRadius: "20px" }}
                                >
                                  <span>
                                    <img
                                      src={`/img/${item.image}`}
                                      id="skills-item"
                                      alt={item.name}
                                      style={{ width: "35px" }}
                                    />
                                  </span>
                                  <span
                                    style={{
                                      marginRight: "5px",
                                      padding: "5px 5px 5px 1px",
                                    }}
                                    className="text-lg font-medium ml-2"
                                  >
                                    {item.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
