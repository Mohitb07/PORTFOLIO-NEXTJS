import React from "react";
import Image from "next/image";

function Card({ src, title, description, source, visit }) {
  return (
    <div className="card cursor-pointer">
      <div className="imgBox h-full">
        <Image height={350} width={550} src={src} alt="Image" />
      </div>

      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
        <div className="space-x-5">
          {visit && (
            <a
              id="projects"
              href={visit}
              target="_blank"
              rel="noreferrer"
              className="uppercase text-sm px-8 py-2 border border-white text-white max-w-max shadow-sm hover:bg-white hover:text-black transition-all ease-in-out duration-500"
            >
              Visit
            </a>
          )}
          <a
            id="projects"
            href={source}
            target="_blank"
            rel="noreferrer"
            className="uppercase text-sm px-8 py-2 border border-white text-white max-w-max shadow-sm hover:bg-white hover:text-black transition-all ease-in-out duration-500"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
