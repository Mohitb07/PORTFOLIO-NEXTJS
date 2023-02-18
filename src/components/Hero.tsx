import { ArrowDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { motion } from "framer-motion";

import data from '../data/data.json'

function Hero() {
  const imageContainer = {
    hidden: {
      scale: 0.3,
      transition: {
        delay: 0.5,
        x: { duration: 9 },
        scale: { duration: 1 },
      },
      x: 0,
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
    <div className="min-h-screen  glassBackground">
      <div className="w-full mx-auto p-4 2xl:w-[1250px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-around 2xl:justify-between pt-10 md:pt-0">
          <div className="space-y-7">
            <motion.h1
              variants={textAnimation1}
              initial="hidden"
              animate="visible"
              className="text-2xl font-extralight sm:text-[30px] md:text-2xl lg:text-3xl xl:text-4xl"
            >
              {data.hero.title[0]}
            </motion.h1>
            <motion.h1
              variants={textAnimation2}
              initial="hidden"
              animate="visible"
              className="text-2xl font-extralight sm:text-[30px] md:text-2xl lg:text-3xl xl:text-4xl"
              >
              {data.hero.title[1]}
            </motion.h1>
            <motion.h1
              variants={textAnimation3}
              initial="hidden"
              animate="visible"
              className="text-2xl font-extralight sm:text-[30px] md:text-2xl lg:text-3xl xl:text-4xl"
            >
              A <span className="text-purple-600 font-bold">{data.hero.title[2]}</span>{" "}
              Developer
            </motion.h1>
          </div>
          <motion.div
            className="transition-all ease-in-out duration-500 md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px] xl:h-[800px] xl:w-[800px]"
            variants={imageContainer}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={data.hero.image}
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
          <span>{data.hero.footer}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
