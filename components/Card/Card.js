import React from 'react'
import Image from 'next/image'
import project from '../../public/1.png'

function Card(props) {
    const {tech} = props;
    return (
        <div>
            <div className="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl mb-10 border">
    <a href="#" className="w-full block h-full">
        <Image src={props.src} alt="blog photo"  className="w-full object-contain" height={150} width={290}/>
        <div className="w-full">
            <div className="flex justify-center space-x-5 p-4">
                <a href={props.visit} target="_blank" rel="noreferrer" className="text-indigo-500 text-md font-medium">
                    Visit
                </a>
                <a href={props.source} target="_blank" rel="noreferrer" className="text-indigo-500 text-md font-medium">
                    Source
                </a>
            </div>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {props.title}
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-light text-md text-xs">
                {props.description}
            </p>
            <div className="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5">
               {tech.map((item, i) => (
                    <div key={i} className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-200 rounded-2xl mb-2">
                    {item}
                    </div>
               ))}
            </div>
        </div>
    </a>
</div>
        </div>
    )
}

export default Card
