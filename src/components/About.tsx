import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import Image from "next/image";

import data from '../data/data.json'

function About() {
  return (
    <div>
      <div className="mt-10 flex flex-col text-[#CCD6F6] p-10 items-center w-full">
        <h1 className="md:base-title text-3xl font-light">A LITTLE ABOUT ME</h1>
        <div className="avatar my-10">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src={data.about.profilePic}
              alt="profile pic"
              height={300}
              width={300}
            />
          </div>
        </div>

        <div className="lg:max-w-lg text-center mb-24 max-w-screen-sm text-[#8892B0] select-none">
          <p className="leading-8">
            {data.about.aboutMe}
          </p>
        </div>
        <div className="mt-52">
          <h1 className="base-title text-center">
            WHAT I DO
          </h1>
          <div className="mt-20 mb-52 lg:flex justify-center space-y-3 lg:space-x-8 items-center">
            <div className="flex flex-col items-center space-y-8 lg:max-w-lg">
              <FaReact className="text-[10rem] bg-[#793EF9] text-[#CCD6F6] rounded-full p-12 hover:animate-spin" />
              <h3>Front End</h3>
              <p className="text-center opacity-70">
                Most of the time i work with{" "}
                <span className="font-semibold">ReactJS, </span>
                <span className="font-semibold">NextJS </span>
                and doing it for the past three years, and I know HTML, CSS, JS,
                Client-Side Rendering, and Tailwind in this area.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8 lg:max-w-lg">
              <VscServerProcess className="text-[10rem] bg-[#793EF9] text-[#CCD6F6] rounded-full p-12 hover:animate-spin" />
              <h3>Back End</h3>
              <p className="text-center opacity-70">
                I have also worked in a NodeJS environment and have done things
                like <span className="font-semibold">RestAPIs</span>,
                <span className="font-semibold">
                  Authentication/Authorization
                </span>
                , and
                <span className="font-semibold"> Server Side Rendering</span>. I
                am also just familiar with{" "}
                <span className="font-semibold"> Microservices </span>{" "}
                Architecture.{" "}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8 lg:max-w-lg">
              <SiAzuredevops className="text-[10rem] bg-[#793EF9] text-[#CCD6F6] rounded-full p-12 hover:animate-spin" />
              <h3>DevOps</h3>
              <p id="skills" className="text-center opacity-70">
                Sometimes I also do some DevOps things like deploying to{" "}
                <span className="font-semibold">Kubernetes</span> cluster,
                isolating the environment with{" "}
                <span className="font-semibold">Docker</span> and using{" "}
                <span className="font-semibold">Git</span> for version control,
                but I am just familiar with Docker and Kubernetes for now.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
