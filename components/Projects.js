import Image from "next/image";
import React from "react";
import Card from "../components/Card/Card";
import project1 from "../public/1.png";
import project2 from "../public/2.png";
import project3 from "../public/3.png";
import dev from "../public/dev.gif";
import google from "../public/google.png";
import social from "../public/social.png";

function Projects() {
  return (
    <div className="flex flex-col items-center space-y-5 my-[10rem] mt-40">
      <h1 className="text-4xl text-[#CCD6F6] font-light">PROJECTS</h1>
      <p className="opacity-70 text-[#8892B0]">SOME OF MY WORK</p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        <Card
          src={project1}
          visit="https://dirty-bits-next-js.vercel.app/"
          source="https://github.com/Mohitb07/DirtyBits-Next-Js"
          title="DirtyBits"
          //   description="DirtyBits is the platform to help you enhance your skills, expand your knowledge and prepare for technical interviews. "
        />

        <Card
          src={project2}
          visit={"https://mohitb07.github.io/live_weather/"}
          source={"https://github.com/Mohitb07/live_weather"}
          title={"Live Weather"}
          //   description={"It shows the live weather based on the openweatherapi "}
        />

        {/* <Card
          src={project3}
          visit={"https://bisht-task-manager-api.herokuapp.com/"}
          source={"https://github.com/Mohitb07/Task-Manager-REST-API"}
          title={"Task Manager"}
          //   description={
          //     "Task Manager API is a REST based API to build a CRUD application easily with a proper authentication system."
          //   }
        /> */}
      </div>
    </div>
  );
}

export default Projects;
