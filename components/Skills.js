import React from "react";
import Image from "next/image";

import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import py from "../public/py.png";
import react from "../public/react.png";
import nodejs from "../public/nodejs.png";
import tailwind from "../public/tailwind.png";
import redux from "../public/redux.png";
import mongo from "../public/mongo.png";
import sql from "../public/sql.png";
import git from "../public/git.png";
import postman from "../public/postman.png";
import docker2 from "../public/docker2.png";
import firebase from "../public/firebase.png";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center space-y-7 h-screen">
      <h1 className="text-4xl text-[#CCD6F6] font-semibold">SKILLS</h1>
      <h3 className="text-xs lg:text-base text-center opacity-80 text-[#8892B0]">
        SOME TECHONOLOGIES I'VE WORKED WITH:
      </h3>
      <div className="flex flex-wrap gap-5 justify-center md:max-w-2xl item-center max-w-xs">
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={html}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={css}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={js}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={react}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={nodejs}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={tailwind}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={redux}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={mongo}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={sql}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={git}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={postman}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={docker2}
          width={100}
          height={80}
          alt="skill"
        />
        <Image
          className="object-contain fitler grayscale hover:grayscale-0 transition-all ease-out"
          src={firebase}
          width={100}
          height={80}
          alt="skill"
        />
      </div>
    </div>
  );
}

export default Skills;
