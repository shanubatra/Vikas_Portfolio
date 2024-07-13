import React from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ProjectCard({
  image,
  title,
  description,
  play,
  app,
  technologies,
}) {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={image}>
        <img
          className="h-[500px] w-full rounded-t-lg object-center"
          src={image}
          alt=""
        />
      </a>
      <div className="p-4 sm:p-6">
        <a href="/" target="_blank" rel="noreferrer">
          <h5 className="text-2xl mb-2  sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal capitalize text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <Link
          to={play}
          className="transition ease-in-out duration-300 p-3 rounded-md text-white border-2 hover:bg-white hover:text-black  hover:-translate-y-1 cursor-pointer flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          <FaGooglePlay className="me-2" />
          PlayStore Link
        </Link>
        <Link
          to={app}
          className="transition ease-in-out duration-300 p-3 rounded-md text-white border-2 hover:bg-white hover:text-black  hover:-translate-y-1 cursor-pointer flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          <FaAppStore className="me-2" />
          AppStore Link
        </Link>
      </div>
    </div>
  );
}
