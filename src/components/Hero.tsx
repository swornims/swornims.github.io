import { motion } from "framer-motion";
import { floatingIcons } from "../constants";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center min-h-[36rem] relative px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <motion.section
          className="mx-auto max-w-screen-xl space-y-6 md:space-y-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <section className="space-y-2">
            <p className="text-base sm:text-lg">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Swarnim Shakya
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-700 leading-tight">
              I build things for the web.
            </h2>
          </section>
          <p className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 text-sm sm:text-base leading-relaxed">
            I am a computer science with a great enthusiasm in the web
            development world. I work primarily as a freelance software engineer
            building things on the web. With an experience spanning over 2
            years, I am proficient in the modern tools that build the internet
            we know today.
          </p>
          <a href="#portfolio">
            <button className="border border-gray-500 px-6 sm:px-8 py-2 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out text-sm sm:text-base">
              Check out my portfolio
            </button>
          </a>
        </motion.section>

        {/* Right Side Floating Icons - Hidden on mobile */}
        <section className="hidden lg:block absolute right-4 xl:right-30 top-10 w-60 xl:w-80 h-96 pointer-events-none">
          {floatingIcons.map((icon, index) => (
            <motion.img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className={icon.style}
              animate={{
                x: icon.animation.x,
                y: icon.animation.y,
                rotate: icon.animation.rotate,
              }}
              transition={{
                duration: icon.animation.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </section>
      </div>
      <article className="bg-amber-300 h-8 sm:h-10 md:h-13 w-20 sm:w-24 md:w-30"></article>
    </>
  );
}
