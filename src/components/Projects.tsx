import React from "react";

import data from "../data/data.json";
import Card from "./Card/Card";

function Projects() {
  return (
    <div className="flex flex-col items-center space-y-5 my-[10rem] mt-40">
      <h1 className="base-title">PROJECTS</h1>
      <p className="sub-title">SOME OF MY WORK</p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {data.projects.map((p) => (
          <Card 
            key={p.source} 
            source={p.source} 
            imageSrc={p.src} 
            title={p.title}
            visit={p.visit}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
