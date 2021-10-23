import React from 'react'
import Card from '../components/Card/Card'
import project1 from '../public/1.png'
import project2 from '../public/2.png'
import project3 from '../public/3.png'
import dev from '../public/dev.gif'
import google from '../public/google.png'
import social from '../public/social.png'

function Projects() {
    return (
        <div className="text-black flex flex-col items-center space-y-5 my-10 mt-40">
            <h1 className="text-4xl text-black font-light">PROJECTS</h1>
            <p className="opacity-70">SOME OF MY WORK</p>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
                <Card src={project1} visit={'https://dirty-bits-next-js.vercel.app/'} source={'https://github.com/Mohitb07/DirtyBits-Next-Js'} title={"DirtyBits (In Dev)"} description={"DirtyBits is the platform to help you enhance your skills, expand your knowledge and prepare for technical interviews. "} tech={['#NextJS', '#TailwindCSS', '#Django(REST API)', '#Microservices', '#Docker', '#Kubernetes']}/>

                <Card src={dev} visit={''} source={'https://github.com/Mohitb07/Tickets-MicroService'} title={"TicDev (In Dev)"} description={"TicDev is an Online buying and selling of tickets for your favourite events."} tech={['#NextJs', '#NodeJS', '#MongoDB', '#Microservices', '#NAT streaming server', '#Docker', '#Kubernetes']}/>
                
                <Card src={project2} visit={'https://mohitb07.github.io/live_weather/'} source={'https://github.com/Mohitb07/live_weather'} title={"Live Weather"} description={"It shows the live weather based on the openweatherapi "} tech={['#ReactJS', '#RestAPI', '#openweatherAPI']}/>

                <Card src={social} visit={''} source={'https://github.com/Mohitb07/MERNG-Social-Media-APP'} title={"Social Media Clone"} description={"It's a social media platform to share users's view in front of other users, it's features are post like, comments, post creation/updation, follow/unfollow users and more,"} tech={['#ReactJS', '#GraphQl', '#MongoDB', '#MERNG']}/>

                <Card src={project3} visit={'https://bisht-task-manager-api.herokuapp.com/'} source={'https://github.com/Mohitb07/Task-Manager-REST-API'} title={"Task Manager API"} description={"Task Manager API is a REST based API to build a CRUD application easily with a proper authentication system."} tech={['#NodeJS', '#MongoDB', '#SSR', '#JWT', '#SendGrid']}/>

                <Card src={google} visit={'https://mohitb07.github.io/google/'} source={'https://github.com/Mohitb07/google'} title={"Google Clone"} description={"It's a basic google clone project which features just a searching funtionality for now."} tech={['#ReactJS', '#MaterialUI', '#FireBaseTool']}/>


            </div>
        </div>
    )
}

export default Projects
