import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

function About() {
  return (
    <div>
      <div className="mt-10 flex flex-col text-[#CCD6F6] p-10 items-center w-full">
        <h1 className="lg:text-3xl font-semibold">A LITTLE ABOUT ME</h1>
        {/* <img
          src="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp.jpg"
          alt="me"
          className="rounded-full h-40 w-40 mx-auto my-4 object-cover p-1 border-2 border-green-800"
        /> */}
        <div className="avatar my-10">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp.jpg"
              alt="profile pic"
            />
          </div>
        </div>

        <div className="lg:max-w-lg text-center mb-24 max-w-screen-sm text-[#8892B0] select-none">
          <p className="leading-8">
            Hey! My name is Mohit Singh Bisht and I am a Full-stack web
            developer with a passion for front-end and back-end development. I
            have completed my Bachelor of Computer Application (BCA) from the
            Institute of Innovation in Technology and Management. I aspire
            toward a career that will allow me to channel my creativity through
            crafting beautiful software and engaging experiences.
          </p>
        </div>
        <div className="mt-52">
          <h1 className="text-4xl text-[#CCD6F6] font-semibold text-center">
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
                and doing it for the past two years, and I know HTML, CSS, JS,
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
