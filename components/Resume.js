import React from "react";

function Resume() {
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.pinimg.com/originals/17/4b/77/174b77c13dd4b36bc8376940135d280b.jpg) center center fixed`,
  };
  return (
    <div
      style={style}
      className="flex flex-col items-center p-10 space-y-5 justify-center h-80"
    >
      <h1 className="font-light lg:text-2xl">CHECKOUT OUT MY RESUME</h1>
      <a
        download="Mohit Singh Bisht"
        id="projects"
        href="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="uppercase px-8 py-2 border border-white text-white max-w-max shadow-sm hover:shadow-lg cursor-pointer hover:px-10 transition-all ease-out duration-3000 animate-pulse"
      >
        Download
      </a>
    </div>
  );
}

export default Resume;
