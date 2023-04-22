import React from 'react'
import Upper from './Upper';
import Bottom from './Bottom';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const EventLocation = () => {
  return (
    <main
      className={`w-full overflow-hidden  ${inter.variable} flex flex-col items-center justify-between relative bg-green-800/[0.05]`}
    >
      <div className="z-10  w-full h-screen flex flex-col justify-between selection:text-[#76EDCB] selection:bg-[#0F1F21] "></div>

      <Upper />
      <Bottom />
    </main>
  );
}

export default EventLocation