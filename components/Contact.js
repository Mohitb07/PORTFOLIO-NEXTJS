import { PaperAirplaneIcon } from '@heroicons/react/solid'
import React from 'react'

function Contact() {
    return (
        <div className="text-black flex flex-col items-center h-80 bg-[#F0F0F0] justify-center space-y-6 ">
            <PaperAirplaneIcon className="h-20 rotate-45 transition-all ease-in-out"/> 
            <h1 className="lg:text-2xl font-extralight">GET IN TOUCH</h1>
            <p className="opacity-80 text-center max-w-xs lg:max-w-full">Whether you have an idea for a project or just want to chat, <span className="lg:block hidden text-center">feel free to shoot me an email!</span></p>
            <a href="mailto:bmohit980@gmail.com?subject=Subject&body=message%20goes%20here" className="uppercase px-8 py-2 border border-black text-black max-w-max shadow-sm hover:shadow-lg hover:bg-black hover:text-white cursor-pointer hover:px-10 transition-all ease-out duration-3000">Contact Me.</a>
        </div>
    )
}

export default Contact
