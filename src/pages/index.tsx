import Bottom from "@/components/Bottom";
import Hero from "@/components/Hero";
import Upper from "@/components/Upper";
import { Inter } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <Hero />
      <footer className="w-full h-[140px]  bg-green-800/[0.05]">
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

      <main
        className={`w-full overflow-hidden  ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05]`}
      >
        <div className="z-10  w-full h-screen flex flex-col justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] "></div>

        <Upper />
        <Bottom />
      </main>
    </div>
  );
}
