import { Inter } from "next/font/google";
import Bottom from "./Bottom";
import Speaker from "./Speaker";
import Upper from "./Upper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const Speakers = () => {
  const speakers = [
    {
      name: "Alex Zhavoronkov",
      linkedin: "https://linkedin.com/",
      label: "Founder Insilico Medicine",
      img: "/speakers/alex.png",
    },
    {
      name: "Sidhant Gupta",
      linkedin: "https://linkedin.com/",
      label: "Founder ClearBot",
      img: "/speakers/sidhant.png",
    },
    {
      name: "Dr. Albert Lam",
      linkedin: "https://linkedin.com/",
      label: "CTO Fano Labs",
      img: "/speakers/albert.png",
    },
    {
      name: "Steven Chan",
      linkedin: "https://linkedin.com/",
      label: "Founder Goodnotes",
      img: "/speakers/goodnotes.png",
    },
    {
      name: "Kelvin Tse",
      linkedin: "https://linkedin.com/",
      label: "Partner Microsoft Hong Kong",
      img: "/speakers/microsoft.png",
    },
    {
      name: "Ivan Lau",
      linkedin: "https://linkedin.com/",
      label: "Founder at Pantheon Labs",
      img: "/speakers/ivan.png",
    },
    {
      name: "Henson Tsai",
      linkedin: "https://linkedin.com/",
      label: "Founder, CTO at Sleekflow",
      img: "/speakers/sleekflow.png",
    },
    {
      name: "Liu Gang",
      linkedin: "https://linkedin.com/",
      label: "CTO at SenseTime",
      img: "/speakers/liu.png",
    },
  ];
  return (
    <main
      className={`w-full overflow-hidden  ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05] `}
    >
      <div className="z-10  w-full h-auto flex flex-col justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] items-center sm:flex-row">
        <div className="px-10 sm:px-20 selection:text-[#76EDCB] selection:bg-[#0F1F21] w-full">
          <h1 className="font-medium mb-20 text-[1.55rem] sm:text-[3rem] text-transparent bg-clip-text leading-[45px]  sm:leading-[70px] bg-gradient-to-r to-[#3e3e3e] from-white">
            Speakers and mentors{" "}
          </h1>

          <div>
            <ul className="flex items-center gap-5 flex-wrap justify-between">
              {speakers.map((speaker) => (
                <Speaker
                  name={speaker.name}
                  linkedin={speaker.linkedin}
                  label={speaker.label}
                  img={speaker.img}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Upper />
      <Bottom />
    </main>
  );
};

export default Speakers;
