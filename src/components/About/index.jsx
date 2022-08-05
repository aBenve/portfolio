import { motion } from "framer-motion";
import AboutBgSvg from "../AboutBgSvg";

export default function About({ scrolled, animDuration }) {
  return (
    <>
      <motion.div
        className="lg:w-[40rem] w-[30rem] lg:left-36 left-20 absolute top-15 hidden md:block"
        animate={{
          opacity: scrolled ? 1 : 0,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: animDuration / 3,
          ease: "easeInOut",
          delay: scrolled ? animDuration : 0,
        }}
      >
        <AboutBgSvg />
      </motion.div>
      <div
        id="About"
        className="relative left-1/6 w-full text-dark mb-32 md:mb-0 "
      >
        <motion.div
          animate={{
            opacity: scrolled ? 1 : 0,
            x: scrolled ? 0 : -20,
          }}
          initial={{
            opacity: 0,
            x: -20,
          }}
          transition={{
            duration: animDuration / 3,
            ease: "easeInOut",
            delay: scrolled ? animDuration : 0,
          }}
          className="font-secondary lg:text-2xl text-lg italic mb-2 "
        >
          About
        </motion.div>
        <motion.div
          animate={{
            opacity: scrolled ? 1 : 0,
            y: scrolled ? 0 : -10,
          }}
          initial={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: animDuration / 3,
            ease: "easeInOut",
            delay: scrolled ? animDuration : 0,
          }}
          className="font-primary lg:text-4xl md:text-2xl text-xl font-bold w-1/2"
        >
          <p className="text-dark">
            Software engineering student at{" "}
            <a href="https://www.itba.edu.ar/">ITBA</a>,
          </p>
          <p className="text-light">frontend and UX/UI design enthusiast.</p>
          <div className="flex mt-5 gap-x-5 ">
            <button
              className="bg-second-dark  text-sm lg:text-lg px-3 lg:px-4  rounded-lg font-medium text-light font-primary"
              onClick={() => {
                // scroll to contact
                document.getElementById("Contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </button>
            <button className="text-sm p-1 rounded-full bg-transparent border-solid border-2 border-light w-10 h-10 flex items-center justify-center hover:bg-black hover:bg-opacity-25">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 "
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V8L10 1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 1V8H17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
