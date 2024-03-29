import { useState } from "react";
import SvgLogo from "../SvgLogo";
import { motion } from "framer-motion";
import Toggle from "../Toggle";
import Sidebar from "../Sidebar";

import InstaSvg from "../InstaSvg";
import LinkedinSvg from "../LinkedinSvg";
import GitSvg from "../GitSvg";

export default function Header() {
  // const [navOpen, setNavOpen] = useState(false)

  return (
    <div>
      <div className="md:block ">
        <a className="fixed z-40 top-0 left-10 h-10 flex justify-center items-center cursor-pointer">
          <SvgLogo width={34} heigh={20} fillColor="#141414" />
        </a>
        <div
          itemScope
          className="fixed z-40 top-0 right-10 md:top-1/2 md:right-0 h-10 md:h-0 md:w-10 flex md:flex-col justify-center items-center gap-x-5 md:gap-x-0 md:gap-y-5  md:-translate-y-1/2"
        >
          <a
            href="https://github.com/aBenve"
            rel="follow"
            target="_blank"
            itemprop="url"
          >
            <GitSvg fillColor="#141414" />
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-benvenuto-1a4809217/"
            rel="follow"
            target="_blank"
            itemprop="url"
          >
            <LinkedinSvg fillColor="#141414" />
          </a>
          <a
            href="https://www.instagram.com/agus.benve/"
            rel="follow"
            target="_blank"
            itemprop="url"
          >
            <InstaSvg fillColor="#141414" />
          </a>
        </div>
      </div>

      {/* <Toggle navOpen={navOpen} setNavOpen={setNavOpen}/>

            <Sidebar navOpen={navOpen}/> */}
    </div>
  );
}
