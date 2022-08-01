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

function Index() {
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
        <div className="bg1 absolute h-60 w-60 md:h-[500px] md:w-[500px]"></div>
        <div className="bg2 absolute h-60 w-60 md:h-[500px] md:w-[500px]"></div>
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
