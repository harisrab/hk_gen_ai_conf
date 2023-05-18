import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <footer className="w-full h-[140px] items-center flex  bg-green-800/[0.05] mt-10 sm:mt-0 mb-10 sm:mb-0">
      <Marquee className="h-full flex items-center" gradient={false}>
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
  );
};

export default LogoMarquee;
