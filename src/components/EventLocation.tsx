import Image from "next/image";
import Bottom from "./Bottom";
import Upper from "./Upper";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const EventLocation = () => {
  return (
    <main
      className={`w-full overflow-hidden  ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05] `}
    >
      <div className="z-10  w-full h-screen flex flex-col justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] items-center sm:flex-row">
        <div className="px-10 sm:px-20 selection:text-[#76EDCB] selection:bg-[#0F1F21] w-full">
          <h1 className="font-medium text-[1.55rem] sm:text-[3rem] text-transparent bg-clip-text leading-[45px]  sm:leading-[70px] bg-gradient-to-r to-[#83878E] from-white">
            Unravel brilliance at The Mills
          </h1>
          <p className="max-w-xl text-white/[0.6] mt-4 mb-10">
            Join Hong Kong&#39;s first-ever Generative AI Hackathon at the
            iconic Mills venue - a hub for tech innovators and creative
            thinkers, where history, art, and technology converge to give birth
            creative ideas. Don&#39;t miss this unique opportunity to think
            outside the box and make your mark, to network with interesting
            minds working in the field of AI!
          </p>

          <p className="flex w-fit items-center hover:underline duration-150 opacity-50 hover:opacity-100 hover:cursor-pointer">
            <Link
              className="w-fit"
              href="https://www.themills.com.hk/en/about-the-mills/vision/"
            >
              <span className="flex items-center">
                Explore The Mills
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <div className="relative w-full sm:mr-10 h-[600px] opacity-100  duration-200 flex items-center">
            <Image
              alt=""
              src="/mills2.jpeg"
              fill={true}
              style={{ objectFit: "contain" }}
              quality={100}
              priority={true}
            />
          </div>
        </div>
      </div>

      <Upper />
      <Bottom />
    </main>
  );
};

export default EventLocation;
