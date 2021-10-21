import React from 'react'

function About() {
    return (
        <>
        <div id="about" className="mt-10 flex flex-col bg-white text-black p-10 items-center w-full">
            <h1 className="lg:text-3xl font-semibold">A LITTLE ABOUT ME</h1>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="me" className="rounded-full h-40 w-40 mx-auto my-4 object-cover p-1 border-2 border-green-800" />
            <div className="lg:max-w-lg text-center mb-24 max-w-screen-sm">
                <p>Hey! My name is Brittany and I'm a web developer with a passion for front end development and design. I'm currently a third year student at Northeastern University pursuing a degree in information science with a minor in interaction design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
                </p>
            </div>
            <div className="mt-52">
                <h1 className="text-4xl text-black font-semibold text-center">WHAT I DO</h1>
                <div className="mt-20 mb-52 lg:flex justify-center">
                <div className="flex flex-col items-center space-y-8">
                    <img 
                    src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc" 
                    className="rounded-full h-44 border-2 border-green-500 object-contain"
                    />
                    <h3>Design</h3>
                    <p className="text-center">Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</p>
                </div>
                <div className="flex flex-col items-center space-y-8">
                    <img 
                    src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc" 
                    className="rounded-full h-44 border-2 border-green-500 object-contain"
                    />
                    <h3>Design</h3>
                    <p className="text-center">Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</p>
                </div>
                <div className="flex flex-col items-center space-y-8">
                    <img 
                    src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc" 
                    className="rounded-full h-44 border-2 border-green-500 object-contain"
                    />
                    <h3>Design</h3>
                    <p className="text-center">Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</p>
                </div>
                </div>
            </div>
          </div>
          </>
    )
}

export default About
