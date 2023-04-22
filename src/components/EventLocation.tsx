import Image from "next/image";
import Bottom from "./Bottom";
import Upper from "./Upper";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const EventLocation = () => {
  return (
    <main
      className={`w-full overflow-hidden  ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05]`}
    >
      <div className="z-10  w-full h-screen flex justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] items-center">
        <div className="px-10 sm:px-20 selection:text-[#76EDCB] selection:bg-[#0F1F21] w-full">
          <h1 className="font-medium text-[1.55rem] sm:text-[3rem] text-transparent bg-clip-text leading-[45px]  sm:leading-[70px] bg-gradient-to-r to-[#83878E] from-white">
            Unravel brilliance at The Mills
          </h1>
          <p className="max-w-xl text-white/[0.6] mt-4">
            Join Hong Kong&#39;s first-ever Generative AI Hackathon at the
            iconic Mills venue - a hub for tech innovators and creative
            thinkers, where history, art, and technology converge to give birth
            creative ideas. Don&#39;t miss this unique opportunity to think
            outside the box and make your mark, to network with interesting
            minds working in the field of AI!
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <div className="relative w-[600px] mr-10 h-[600px] opacity-100 hover:opacity-50 duration-200 flex items-center">
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
