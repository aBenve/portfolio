import { motion } from "framer-motion";
import AboutBgSvg from "../AboutBgSvg";
import DocumentSvg from "../DocumentSvg";
import PortfolioPDF from "../../assets/portfolio.pdf";

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
            <a
              className="text-sm p-1 rounded-full bg-transparent border-solid border-2 border-light w-10 h-10 flex items-center justify-center hover:bg-black hover:bg-opacity-25"
              rel="follow"
              target="_blank"
              onClick={() => {
                window.open(PortfolioPDF);
              }}
            >
              <DocumentSvg />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
