import { ArrowDownIcon } from "@heroicons/react/outline";

function Hero() {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${`hero1.jpg`})`,
    backgroundSize: `cover`,
  };

  return (
    <div className="-mt-16">
      <div className="hero min-h-screen" style={style}>
        <div className="hero-overlay from-black to-black opacity-10"></div>
        <div className="flex flex-col space-y-10 text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-6xl text-2xl font-extralight">
              HI, I'M MOHIT
            </h1>
            <p data-aos="fade-up" className="mb-5 text-lg opacity-70">
              I am a Full Stack Web Developer.
            </p>
          </div>
          <ArrowDownIcon
            className="text-center animate-bounce h-10"
            id="about"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
