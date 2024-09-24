import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="text-[#CCD6F6] flex flex-col items-center h-80 justify-center space-y-6 "
    >
      <PaperAirplaneIcon className="h-20 -rotate-45 transition-all ease-in-out" />
      <h1 className="lg:text-2xl font-extralight">GET IN TOUCH</h1>
      <p className="opacity-80 text-center max-w-xs lg:max-w-full">
        Whether you have an idea for a project or just want to chat,{" "}
        <span className="lg:block hidden text-center">
          feel free to shoot me an email!
        </span>
      </p>
      <a
        href="mailto:bmohit980@gmail.com?subject=Subject&body=message%20goes%20here"
        className="uppercase px-8 py-2 border border-[#CCD6F6] text-[#CCD6F6] max-w-max shadow-sm hover:shadow-lg hover:border-[#793EF9] hover:bg-[#793EF9] hover:text-white cursor-pointer hover:px-10 transition-all ease-out duration-3000"
      >
        Contact Me.
      </a>
    </div>
  );
}

export default Contact;
