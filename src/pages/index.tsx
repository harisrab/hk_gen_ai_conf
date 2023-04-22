import EventLocation from "@/components/EventLocation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <Hero />
      <LogoMarquee />
      <EventLocation />
    </div>
  );
}
