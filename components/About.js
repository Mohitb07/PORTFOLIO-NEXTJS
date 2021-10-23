import React from 'react'
import { FaConnectdevelop } from 'react-icons/fa'
import { VscRepoForked } from 'react-icons/vsc'
import { MdOutlineComputer } from 'react-icons/md'

function About() {
    return (
        <div >
        <div  className="mt-10 flex flex-col bg-white text-black p-10 items-center w-full">
            <h1 className="lg:text-3xl font-semibold">A LITTLE ABOUT ME</h1>
            <img src="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp.jpg" alt="me" className="rounded-full h-40 w-40 mx-auto my-4 object-cover p-1 border-2 border-green-800" />
            <div className="lg:max-w-lg text-center mb-24 max-w-screen-sm">
                <p>Hey! My name is Mohit Singh Bisht and I'm a Full stack web developer with a passion for both front end and backend development.I have completed by Bachelor of Computer Application (BCA) from Intitute of Innovation in Technology and Management. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
                </p>
            </div>
            <div className="mt-52">
                <h1 className="text-4xl text-black font-semibold text-center">WHAT I DO</h1>
                <div className="mt-20 mb-52 lg:flex justify-center space-y-3 lg:space-x-8 items-center">

                    <div className="flex flex-col items-center space-y-8 lg:max-w-lg">                    
                        <FaConnectdevelop className="text-[10rem] bg-blue-600 text-white rounded-full p-12 hover:animate-spin"/>
                        <h3>Front End</h3>
                        <p className="text-center opacity-70">I have mostly worked in <span className="font-semibold">ReactJs</span> and doing it for the past 2 years, and i know HTML, CSS ,JS ,ReactJS ,Client Side Rendering and Tailwind in that area.</p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-8 lg:max-w-lg">
                    <MdOutlineComputer className="text-[10rem] bg-blue-600 text-white rounded-full p-12 hover:animate-spin"/>
                        <h3>Backend End</h3>
                        <p className="text-center opacity-70">I have mostly worked in NodeJS environment and doing it for the past 2 years, and i have done things like creating the <span className="font-semibold">RestAPIs</span> in NoSql(<span className="font-semibold">MongoDB</span>), Server Side Rendering and i am also familiar with <span className="font-semibold"> Microservices </span> Architecture.  </p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-8 lg:max-w-lg">
                    <VscRepoForked className="text-[10rem] bg-blue-600 text-white rounded-full p-12 hover:animate-spin"/>
                        <h3>DevOps</h3>
                        <p id="skills" className="text-center opacity-70">I also do some DevOps things like deploying to <span className="font-semibold">kubernetes</span> cluster, isolating the environment with <span className="font-semibold">docker</span> and using <span className="font-semibold">git</span> for version control, but i am just familiar with docker and kubernetes for now. </p>
                    </div>

                </div>
            </div>
          </div>
          </div>
    )
}

export default About
