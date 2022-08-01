import React from "react";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import bg1 from "../public/bg-1.png";
import { motion } from "framer-motion";

function Index() {
  const bgContainer = {
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1200,
        ease: "easeInOut",
        delay: 9.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1200,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Mohit Bisht</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3751379106033986"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="bg-[#001220] overflow-hidden">
        <Navbar />
        <motion.div
          variants={bgContainer}
          initial="hidden"
          animate="visible"
          className="bg1 absolute h-60 w-60 md:h-[500px] md:w-[500px]"
        ></motion.div>
        <motion.div
          variants={bgContainer}
          initial="hidden"
          animate="visible"
          className="bg2 absolute h-60 w-60 md:h-[500px] md:w-[500px]"
        ></motion.div>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Index;
