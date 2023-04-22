import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import Upper from "./Upper";
import Bottom from "./Bottom";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const Hero = () => {
  return (
    <main
      className={`w-full overflow-hidden  ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05]`}
    >
      <div className="z-10  w-full h-[120vh] sm:h-screen flex flex-col justify-start selection:text-[#76EDCB] selection:bg-[#0F1F21] ">
        {/* Floating images section */}
        <div className="sm:h-full  sm:w-[50%] absolute bottom-0 right-[10%] sm:right-0 sm:top-0">
          <div className="w-full h-full relative">
            {/* Image 1 */}
            <div className="absolute right-14 sm:right-2 bottom-[25%] z-[2] shadow-2xl shadow-black hover:bottom-[28%] duration-500">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] mr-10 sm:h-[400px] opacity-100  duration-200 flex items-center">
                <Image
                  alt=""
                  src="/art1.jpg"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="absolute -right-10 bottom-40 sm:left-20 sm:bottom-[15%] z-[1] hover:bottom-[190px] sm:hover:bottom-[17%] duration-500">
              <div className="relative w-[200px] h-[300px] sm:w-[300px] mr-10 sm:h-[400px] opacity-100 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/art2.jpg"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
        <nav className="w-full h-20 px-10 sm:px-20 flex items-center justify-between">
          <h1 className="font-semibold text-[18px]">Gen AI Hackathon</h1>
          {/* <Link href="https://y17tx8x76al.typeform.com/to/jJpZjK0N">
            <button className="rounded-md bg-white px-5 py-2 text-black shadow-[0px_10px_50px_rgba(16,185,129,0.4)] hover:shadow-[0px_10px_50px_rgba(16,185,129,0.6)] duration-200 font-medium hover:bg-white/[0.8] ">
              Join now
            </button>
          </Link> */}
        </nav>
        <div className="h-full w-full flex mt-20 sm:mt-0 sm:items-center">
          <div className="px-10 sm:px-20 selection:text-[#76EDCB] selection:bg-[#0F1F21] ">
            <h1 className="font-medium text-[1.75rem] sm:text-[3.75rem] text-transparent bg-clip-text leading-[45px]  sm:leading-[70px] bg-gradient-to-r to-[#83878E] from-white">
              Hong Kong&#39;s Premiere <br></br>Generative AI Hackathon
            </h1>
            <p className="max-w-xl text-white/[0.6] mt-4">
              For the first time, we&#39;re hosting developers, engineers,
              hackers from across Hong Kong, China, and Singapore to join and
              build cool things.
            </p>

            <Link
              target="_blank"
              href="https://y17tx8x76al.typeform.com/to/jJpZjK0N"
            >
              <button className="px-4 py-2 flex gap-2 items-center hover:gap-3 bg-white text-black rounded-full mt-10 shadow-[0px_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0px_10px_50px_rgba(16,185,129,0.6)] duration-200">
                Register now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Upper />
      <Bottom />
    </main>
  );
};

export default Hero;
