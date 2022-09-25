import Image from "next/image";
import React from "react";

import css from "../public/css.png";
import docker from "../public/docker.png";
import firebase from "../public/firebase.png";
import git from "../public/git.png";
import html from "../public/html.png";
import js from "../public/js.png";
import mongo from "../public/mongo.png";
import nodejs from "../public/nodejs.png";
import postman from "../public/postman.png";
import react from "../public/react.png";
import redux from "../public/redux.png";
import sql from "../public/sql.png";
import tailwind from "../public/tailwind.png";
import typescript from "../public/ts.png";
import github from "../public/github.png";
import yarn from "../public/yarn.png";
import sass from "../public/sass.png";

const dataSource = [
  { src: html, alt: "html" },
  { src: css, alt: "css" },
  { src: js, alt: "js" },
  { src: typescript, alt: "typescript" },
  { src: react, alt: "react" },
  { src: nodejs, alt: "nodejs" },
  { src: tailwind, alt: "tailwind" },
  { src: redux, alt: "redux" },
  { src: mongo, alt: "mongo" },
  { src: sql, alt: "sql" },
  { src: git, alt: "git" },
  { src: postman, alt: "postman" },
  { src: docker, alt: "docker" },
  { src: firebase, alt: "firebase" },
  { src: github, alt: "github" },
  { src: yarn, alt: "yarn" },
  { src: sass, alt: "sass" },
];

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center space-y-7 h-screen">
      <h1 className="text-4xl text-[#CCD6F6] font-semibold">SKILLS</h1>
      <h3 className="text-xs lg:text-base text-center opacity-80 text-[#8892B0]">
        SOME TECHONOLOGIES I&apos;VE WORKED WITH:
      </h3>
      <div className="flex flex-wrap gap-5 justify-center md:max-w-2xl item-center max-w-xs">
        {dataSource.map(({ alt, src }) => (
          <Image
            key={alt}
            className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
            src={src}
            width={100}
            height={80}
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
