import React from 'react'
import Card from '../components/Card/Card'
import project1 from '../public/1.png'

function Projects() {
    return (
        <div className="text-black flex flex-col items-center space-y-5 my-10 mt-40">
            <h1 className="text-4xl text-black font-light">PROJECTS</h1>
            <p className="opacity-70">SOME OF MY WORK</p>
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10">
                <Card src={project1} title={"DirtyBits"} description={""} tech={['#NextJS', '#TailwindCSS', '#Django(REST API)', '#Microservices']}/>
                <Card src={project1} title={"DirtyBits"} description={""} tech={['#NextJS', '#TailwindCSS', '#Django(REST API)', '#Microservices']}/>
                <Card src={project1} title={"DirtyBits"} description={""} tech={['#NextJS', '#TailwindCSS', '#Django(REST API)', '#Microservices']}/>
                <Card src={project1} title={"DirtyBits"} description={""} tech={['#NextJS', '#TailwindCSS', '#Django(REST API)', '#Microservices']}/>
                <Card src={project1} title={"DirtyBits"} description={""} tech={['#NextJS', '#TailwindCSS', '#Django(REST API)', '#Microservices']}/>
            </div>
        </div>
    )
}

export default Projects
