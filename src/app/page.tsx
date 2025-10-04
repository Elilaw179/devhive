import { Hero } from "@/components/sections/hero";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeServices } from "@/components/sections/home-services";
import { HomeProjects } from "@/components/sections/home-projects";
import { HomeContact } from "@/components/sections/home-contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeContact />
    </div>
  );
}
