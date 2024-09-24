import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import Image from "next/image";

import data from "../data/data.json";

function About() {
  return (
    <div id="about">
      <div className="flex flex-col text-[#CCD6F6] p-10 items-center max-w-7xl mx-auto">
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
          <p className="leading-8">{data.about.aboutMe}</p>
        </div>
        <div className="my-[10%] flex flex-col">
          <h1 className="base-title text-center">WHAT I DO</h1>
          <div className="p-2 grid lg:grid-cols-3 my-10 gap-10 md:gap-5 lg:gap-10">
            <div className="flex flex-col items-center space-y-4">
              <FaReact className="text-[8rem] lg:text-[10rem] bg-[#793EF9] text-[#CCD6F6] rounded-full p-8 lg:p-12 hover:animate-spin" />
              <h3>Front End</h3>
              <p className="text-center opacity-70 text-sm lg:text-base">
                I&apos;ve primarily worked with{" "}
                <span className="font-semibold text-[#793EF9]">ReactJS </span>
                and
                <span className="font-semibold text-[#793EF9]"> NextJS </span>
                for the past four years, with experience in HTML, CSS, JS,
                client-side rendering, and Tailwind.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 lg:max-w-lg">
              <VscServerProcess className="text-[8rem] lg:text-[10rem] bg-[#793EF9] text-[#CCD6F6] rounded-full p-8 lg:p-12 hover:animate-spin" />
              <h3>Back End</h3>
              <p className="text-center opacity-70 text-sm lg:text-base">
                I&apos;ve worked with NodeJS on tasks like
                <span className="font-semibold text-[#793EF9]"> RestAPIs</span>,
                <span className="font-semibold text-[#793EF9]">
                  {" "}
                  authentication/authorization
                </span>
                , and
                <span className="font-semibold text-[#793EF9]">
                  {" "}
                  server side rendering
                </span>
                . I&apos;m also familiar with{" "}
                <span className="font-semibold text-[#793EF9]">
                  {" "}
                  microservices{" "}
                </span>{" "}
                architecture.{" "}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 lg:max-w-lg">
              <SiAzuredevops className="text-[8rem] lg:text-[10rem] bg-[#793EF9] text-[#CCD6F6] rounded-full p-8 lg:p-12 hover:animate-spin" />
              <h3>DevOps</h3>
              <p
                id="skills"
                className="text-center opacity-70 text-sm lg:text-base"
              >
                I occasionally work on DevOps tasks like deploying to{" "}
                <span className="font-semibold text-[#793EF9]">
                  Kubernetes{" "}
                </span>
                isolating environments with{" "}
                <span className="font-semibold text-[#793EF9]">Docker</span> and
                using <span className="font-semibold text-[#793EF9]">Git</span>{" "}
                for version control. However, I&apos;m only familiar with Docker and
                Kubernetes for now.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
