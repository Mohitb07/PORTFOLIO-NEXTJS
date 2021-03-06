import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub, AiOutlineCopyright} from 'react-icons/ai'
import { IoMdRocket } from 'react-icons/io'

function Footer() {
    return (
        <div className="flex flex-col justify-center h-52 items-center bg-[#222222] space-y-4">
            <div className="flex space-x-2">
                <a href="https://www.linkedin.com/in/mohitbisht19/"  target="_blank" rel="noreferrer" className="rounded-none p-2 text-4xl hover:scale-110 hover:bg-blue-900 transition-all ease-out bg-[#333333]"><FaLinkedin/></a>
                <a href="https://github.com/Mohitb07" target="_blank" rel="noreferrer" className="hover:bg-blue-900 rounded-none hover:scale-110 transition-all ease-out  p-2 text-4xl bg-[#333333]"><AiFillGithub/></a>
            </div>
            <div className="text-4xl rotate-0 cursor-pointer">
                <IoMdRocket onClick={() => window.scrollTo(0,0)}/>
            </div>
            <div className="text-xs flex items-center space-x-1">
                <AiOutlineCopyright className="text-base"/><span>Mohit Singh Bisht 2021</span> 
            </div>
            <div className="space-x-2">
                <span className="text-xs">+91-8929689980</span>,
                <span className="text-xs">bmohit980@gmail.com</span>

            </div>
        </div>
    )
}

export default Footer
