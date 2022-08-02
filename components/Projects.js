import React from "react";
import Card from "../components/Card/Card";
import project1 from "../public/1.jpeg";
import project2 from "../public/2.jpeg";
import project3 from "../public/facesmash.png";

function Projects() {
  return (
    <div className="flex flex-col items-center space-y-5 my-[10rem] mt-40">
      <h1 className="text-4xl text-[#CCD6F6] font-light">PROJECTS</h1>
      <p className="opacity-70 text-[#8892B0]">SOME OF MY WORK</p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {/* https://previewed.app/template/9A0EF400 */}
        <Card
          src={project1}
          visit="https://dirty-bits-next-js.vercel.app/"
          source="https://github.com/Mohitb07/DirtyBits-Next-Js"
          title="DirtyBits"
        />
        {/* https://previewed.app/template/02666770 */}
        <Card
          src={project2}
          visit={"https://mohitb07.github.io/live_weather/"}
          source={"https://github.com/Mohitb07/live_weather"}
          title="Live Weather"
        />
        <Card
          src={project3}
          source={"https://github.com/Mohitb07/FaceSmash"}
          title="FaceSmash"
        />
      </div>
    </div>
  );
}

export default Projects;
