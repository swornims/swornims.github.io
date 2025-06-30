import { motion } from "framer-motion";
import { floatingIcons } from "../constants";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center min-h-[36rem] relative">
        {/* Left Content */}
        <motion.section
          className="mx-auto max-w-screen-xl space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <section className="space-y-2">
            <p className="text-lg">Hello, my name is</p>
            <h1 className="text-7xl font-semibold">Swarnim Shakya</h1>
            <h2 className="text-7xl font-semibold text-gray-700">
              I build things for the web.
            </h2>
          </section>
          <p className="w-1/2">
            I am a computer science with a great enthusiasm in the web
            development world. I work primarily as a freelance software engineer
            building things on the web. With an experience spanning over 2
            years, I am proficient in the modern tools that build the internet
            we know today.
          </p>
          <a href="#portfolio">
            <button className="border border-gray-500 px-8 py-2 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out">
              Check out my portfolio
            </button>
          </a>
        </motion.section>
        {/* Right Side Floating Icons */}
        <section className="absolute right-30 top-10 w-80 h-96 pointer-events-none">
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
      <article className="bg-amber-300 h-13 w-30"></article>
    </>
  );
}
