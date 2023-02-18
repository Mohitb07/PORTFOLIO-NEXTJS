import Image from "next/image";
import React from "react";

import data from '../data/data.json'

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center space-y-7 pt-20 pb-40">
      <h1 className="base-title">SKILLS</h1>
      <p className="sub-title">
        SOME TECHONOLOGIES I&apos;VE WORKED WITH:
      </p>
      <div className="flex flex-wrap gap-5 justify-center md:max-w-2xl item-center">
        {data.skills.map(({ alt, src }) => (
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
