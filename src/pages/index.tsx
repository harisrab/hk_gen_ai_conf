import Details from "@/components/Details";
import EventLocation from "@/components/EventLocation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col bg-black">
      <Hero />
      <LogoMarquee />
      <EventLocation />
      <Speakers />
      <Details />
    </div>
  );
}
