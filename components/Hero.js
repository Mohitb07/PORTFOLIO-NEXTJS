import { ArrowDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Ills from "../public/saly.svg";

function Hero() {
  const style = {
    // backgroundImage: `url(${`r-wave.svg`})`,
    backgroundSize: `cover`,
  };

  return (
    // <div className="-mt-16">
    //   <div className="hero min-h-screen glassBackground" style={style}>
    //     <div className="flex space-y-10 text-center hero-content text-neutral-content">
    //       <div className="max-w-md">
    //         <h1 className="mb-5 lg:text-6xl text-2xl font-extralight">
    //           HI, I'M MOHIT
    //         </h1>
    //         <p data-aos="fade-up" className="mb-5 text-lg opacity-70">
    //           I am a Full Stack Web Developer.
    //         </p>
    //       </div>
    //     </div>
    //     <div>
    //       <Image src={Ills} height={800} width={800} />
    //       <ArrowDownIcon
    //         className="text-center animate-bounce h-10"
    //         id="about"
    //       />
    //     </div>
    //   </div>
    // </div>
    // <div className="min-h-screen glassBackground -mt-16">
    //   <div className="bg-red-400 h-screen">
    //     <div className="flex flex-1 items-start">
    //       <div className="flex mx-auto max-w-[1200px] bg-red-300 h-full items-center justify-between">
    //         <div className="space-y-5 bg-red-100">
    //           <h1 className="lg:text-5xl text-2xl font-extralight ">Hello</h1>
    //           <h1 className="lg:text-5xl text-2xl font-extralight ">
    //             I am Mohit Bisht
    //           </h1>
    //           <h1 className="lg:text-3xl text-2xl font-extralight ">
    //             A <span className="text-purple-600 font-bold">FullStack</span>{" "}
    //             Developer
    //           </h1>
    //           <ArrowDownIcon
    //             className="text-center animate-bounce h-10 border-white rounded-full border "
    //             id="about"
    //           />
    //         </div>
    //         <div className="bg-red-200">
    //           <Image
    //             src={Ills}
    //             height={800}
    //             width={800}
    //             alt="rocket illustrator"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen glassBackground -mt-16">
      <div className="w-full md:w-1/2 mx-auto md:pl-7">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-2xl font-extralight ">Hello</h1>
            <h1 className="lg:text-5xl text-2xl font-extralight ">
              I am Mohit Bisht
            </h1>
            <h1 className="lg:text-3xl text-2xl font-extralight ">
              A <span className="text-purple-600 font-bold">FullStack</span>{" "}
              Developer
            </h1>
          </div>
          <div className="hover:scale-110 transition-all ease-in-out duration-500">
            <Image
              src={Ills}
              height={800}
              width={800}
              alt="rocket illustrator"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start mt-20">
          <ArrowDownIcon
            className="text-center h-10 p-2 md:p-3 md:h-16 border-4 border-white rounded-full"
            id="about"
          />
          <span>Learn more about Mohit</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
