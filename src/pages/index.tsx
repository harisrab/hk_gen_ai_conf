import Bottom from "@/components/Bottom";
import Upper from "@/components/Upper";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  return (
    <main
      className={`w-screen overflow-hidden h-screen ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05]`}
    >
      <div className="z-10  w-full h-screen flex flex-col justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] ">
        <nav className="w-full h-20 px-10 sm:px-20 flex items-center justify-between">
          <h1 className="font-semibold text-[18px]">Gen AI Hackathon</h1>
          <Link href="https://y17tx8x76al.typeform.com/to/jJpZjK0N">
            <button className="rounded-md bg-white px-5 py-2 text-black shadow-[0px_10px_50px_rgba(16,185,129,0.4)] hover:shadow-[0px_10px_50px_rgba(16,185,129,0.6)] duration-200 font-medium hover:bg-white/[0.8] ">
              Join now
            </button>
          </Link>
        </nav>
        <div className="px-10 sm:px-20 selection:text-[#76EDCB] selection:bg-[#0F1F21] ">
          <h1 className="font-medium text-[1.75rem] sm:text-[3.75rem] text-transparent bg-clip-text leading-[45px]  sm:leading-[70px] bg-gradient-to-r to-[#83878E] from-white">
            Hong Kong&#39;s Premiere <br></br>Generative AI Hackathon
          </h1>
          <p className="max-w-xl text-white/[0.6] mt-4">
            For the first time, we&#39;re hosting developers, engineers, hackers
            from across Hong Kong, China, and Singapore to join and build cool
            things.
          </p>

          <Link target="_blank" href='https://y17tx8x76al.typeform.com/to/jJpZjK0N'>
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

        <footer className="w-full h-[140px] -mt-5">
          <Marquee className="h-full" gradient={false}>
            {/* <div className="flex items-center gap-2 h-full"> */}
              <div className="relative w-[200px] mr-10 h-[60px] opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/hku_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>

              <div className="relative w-[200px] h-[25px]  opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/microsoft_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>

              <div className="relative w-[200px] h-[40px] opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/cyberport_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
              <div className="relative w-[200px] h-[40px] opacity-60 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/clearbot_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
              <div className="relative w-[200px] h-[20px] opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/deploifai_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
              <div className="relative w-[200px] h-[60px] opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/goodnotes_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
              <div className="relative w-[200px] h-[80px] opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/insilicomed_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
              <div className="relative w-[200px] h-[20px] opacity-40 hover:opacity-50 duration-200 flex items-center">
                <Image
                  alt=""
                  src="/marquee/fanolabs_logo.png"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  quality={100}
                  priority={true}
                />
              </div>
            {/* </div> */}
          </Marquee>
        </footer>
      </div>
      <Upper />
      <Bottom />
    </main>
  );
}
