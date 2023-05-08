import { Inter } from "next/font/google";
import Link from "next/link";
import Bottom from "./Bottom";
import Upper from "./Upper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const Details = () => {
  return (
    <main
      className={`w-full overflow-hidden my-40 ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05] `}
    >
      <div className="z-10  w-full h-auto flex flex-col justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] items-center sm:flex-row">
        <div className="px-10 sm:px-20 selection:text-[#76EDCB] selection:bg-[#0F1F21] w-full">
          <h1 className="font-medium mb-20 text-[1.55rem] sm:text-[3rem] text-transparent bg-clip-text leading-[45px]  sm:leading-[70px] bg-gradient-to-r to-[#484848] from-white">
            Hackathon Details{" "}
          </h1>

          <div>
            <ul className="flex gap-y-10 gap-4 flex-wrap justify-between items-center">
              <li className="w-[400px] h-[400px] bg-[#76EDCB]/[0.05] hover:bg-[#76EDCB]/[0.1] duration-200 p-6">
                <h2 className="text-[#76EDCB] text-[20px] font-semibold mb-5">
                  Workshops and keynotes
                </h2>
                <p className="mb-5 text-[15px]">
                  We&#39;ve invited some of the leading minds who&#39;re
                  building technology in Hong Kong in some of the biggest
                  companies to give short lectures on building tools and
                  applications with GPT technology.
                </p>

                <ul className="flex flex-col gap-2  text-[15px]">
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    An introduction to AI Agents
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    How AI is impacting industries in HK?
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Alex Zhavoronkov on Dating AI
                  </li>
                </ul>
              </li>
              <li className="w-[400px] h-[400px] bg-[#76EDCB]/[0.05] hover:bg-[#76EDCB]/[0.1] duration-200 p-6">
                <h2 className="text-[#76EDCB] text-[20px] font-semibold mb-5">
                  Hacking theme
                </h2>
                <p className="mb-5 text-[15px]">
                  Open-ended electrifying builds of various bootstrapped
                  applications of GPT autonomous agents and apps that use
                  Generative AI: 
                </p>

                <ul className="flex flex-col gap-2  text-[15px]">
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    AutoGPTs
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Self-browsing tools
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    GPT Backends
                  </li>
                </ul>
              </li>
              <li className="w-[400px] h-[400px] bg-emerald-800/[0.1] hover:bg-emerald-800/[0.2] duration-200 p-6">
                <h2 className="text-[#76EDCB] text-[20px] font-semibold mb-5">
                  Win Amazing Prizes
                </h2>

                <ul className="flex flex-col gap-5">
                  <li>
                    <p className="mb-2 text-[18px] font-semibold">
                      🥇First Prize
                    </p>
                    <p className="text-[14px] text-white/[0.5]">
                      $500 USD in Azure credits + $1000 USD Cash prize +
                      Fast-tracked innovation hub.
                    </p>
                  </li>
                  <li>
                    <p className="mb-2 text-[18px] font-semibold">
                      🥈Second Prize
                    </p>
                    <p className="text-[14px] text-white/[0.5]">
                      $200 USD in Azure credits + $600 USD Cash prize +
                      Fast-tracked innovation hub
                    </p>
                  </li>
                  <li>
                    <p className="mb-2 text-[18px] font-semibold">
                      🥉 Third Prize
                    </p>
                    <p className="text-[14px] text-white/[0.5]">
                      $100 USD in Azure Credits + 200 USD in Cash Prize +
                      Fast-tracked innovation hub
                    </p>
                  </li>
                </ul>
              </li>
              <li className="w-[400px] h-[400px] bg-[#76EDCB]/[0.05] hover:bg-[#76EDCB]/[0.1] duration-200 p-6">
                <h2 className="text-[#76EDCB] text-[20px] font-semibold mb-5">
                  Open access to LLMs
                </h2>
                <p className="mb-5 text-[15px]">
                  🔐 Free and open access to instances hosting Whisper,
                  VectorDBs, GPTs, and instances of other LLMs running on fast
                  servers + access allowed to open-source repos 💻
                </p>

                <ul className="flex flex-col gap-2  text-[15px]">
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    OpenAI Whisper
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    GPT-3, GPT-3.5, ChatGPT, GPT-4
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Cohere APIs
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Open-source Flan-T5, Vicuna, LLaMA
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Vector Databases
                  </li>
                </ul>
              </li>
              <li className="w-[400px] h-[400px] bg-[#76EDCB]/[0.05] hover:bg-[#76EDCB]/[0.1] duration-200 p-6">
                <h2 className="text-[#76EDCB] text-[20px] font-semibold mb-5">
                  Free Training Infrastructure
                </h2>
                <p className="mb-5 text-[15px]">
                  Training can cost money, but for this event, we&#39;re making
                  the infrastructure freely available. We&#39;re partnering with
                  Deploifi to help you train models on multiple GPUs.
                </p>

                <ul className="flex flex-col gap-2  text-[15px]">
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Microsoft Azure Instances
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    Deploifi support for orchestrating training
                  </li>
                </ul>
              </li>
              <li className="w-[400px] h-[400px] bg-[#76EDCB]/[0.05] hover:bg-[#76EDCB]/[0.1] duration-200 p-6">
                <h2 className="text-[#76EDCB] text-[20px] font-semibold mb-5">
                  Get Prepared
                </h2>
                <p className="mb-5 text-[15px]">
                  We&#39;re preparing 📕
                  <Link
                  target="_blank"
                    href={
                      "https://dour-nerine-025.notion.site/386f0deb08d046e0b2c8b82e4d329c2c?v=f221034125e14d1696e7af4083c383bd"
                    }
                  >
                    <span className="text-red-500 mr-1 hover:underline duration-200 hover:opacity-60">
                      The Little Red Book
                    </span>
                  </Link>
                  for you that contains a plethora of references to some
                  important developments, papers, blogs to stay current with
                  Generative AI.
                </p>

                <ul className="flex flex-col gap-2  text-[15px]">
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>
                    References to important papers{" "}
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>A
                    collection of repositories and books
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-[#76EDCB] rounded-full"></div>A
                    Materials to learn Dark Arts of AI
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Upper />
      <Bottom />
    </main>
  );
};

export default Details;
