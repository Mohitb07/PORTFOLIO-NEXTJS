import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion } from "framer-motion";

import data from "../data/data.json";

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
    <div className="min-h-screen glassBackground">
      <div className="p-4 space-y-14 md:space-y-40 lg:space-y-10">
        <div className="flex flex-col-reverse md:justify-between xl:justify-center p-1 md:flex-row items-center py-6 md:pt-0">
          <div className="space-y-7 text-center md:text-left">
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
              A{" "}
              <span className="text-purple-600 font-bold">
                {data.hero.title[2]}
              </span>{" "}
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
        <div className="flex items-center space-x-4 justify-center md:justify-start py-2">
          <div className="flex items-center p-1 mx-auto gap-4">
            <div>
              <div className="scrolldown">
                <div className="chevrons">
                  <div className="chevrondown"></div>
                  <div className="chevrondown"></div>
                </div>
              </div>
            </div>
            <span className="hidden md:block mb-3">{data.hero.footer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
