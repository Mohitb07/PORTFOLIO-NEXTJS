import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

function Index() {
  return (
    <>
      <Head>
        <title>Mohit Bisht</title>
      </Head>
      <div className="bg-white">
        <Navbar />
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
