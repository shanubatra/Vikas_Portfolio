import React from "react";

const ButtonLink = ({ url, text, padding }) => {
  return (
    <a
      href={url}
      target="_blank"
      download={true}
      rel="noreferrer"
      className={`transition ease-in-out duration-300 ${padding} rounded-md text-white border-2 hover:scale-110 hover:-translate-y-1 cursor-pointer dec-none `}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
