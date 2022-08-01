import { ArrowDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  const imageContainer = {
    hidden: {
      scale: 3,
      transition: {
        delay: 0.5,
        x: { duration: 9 },
        scale: { duration: 1 },
      },
      x: "-100vw",
    },
    visible: {
      scale: 1,
      x: 0,
    },
  };

  const textAnimation1 = {
    hidden: {
      opacity: 0,
      y: 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        ease: "easeInOut",
      },
    },
  };
  const textAnimation2 = {
    hidden: {
      opacity: 0,
      y: 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        ease: "easeInOut",
      },
    },
  };
  const textAnimation3 = {
    hidden: {
      opacity: 0,
      y: 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen glassBackground">
      <div className="w-full md:w-1/2 mx-auto md:pl-7">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-10 md:pt-0">
          <div className="space-y-7">
            <motion.h1
              variants={textAnimation1}
              initial="hidden"
              animate="visible"
              className="lg:text-5xl text-2xl font-extralight "
            >
              Hello
            </motion.h1>
            <motion.h1
              variants={textAnimation2}
              initial="hidden"
              animate="visible"
              className="lg:text-5xl text-2xl font-extralight "
            >
              I am Mohit Bisht
            </motion.h1>
            <motion.h1
              variants={textAnimation3}
              initial="hidden"
              animate="visible"
              className="lg:text-3xl text-2xl font-extralight "
            >
              A <span className="text-purple-600 font-bold">FullStack</span>{" "}
              Developer
            </motion.h1>
          </div>
          <motion.div
            className="transition-all ease-in-out duration-500"
            variants={imageContainer}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="https://i.postimg.cc/MGFX8MY9/Saly-1.png"
              height={800}
              width={800}
              alt="rocket illustrator"
            />
          </motion.div>
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
