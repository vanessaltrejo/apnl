import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeLocations } from "@/components/home/HomeLocations";
import { HomeCTA } from "@/components/home/HomeCTA";
import { FadeInUp } from "@/components/shared/FadeInUp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <HomeHero />
      <FadeInUp>
        <HomeServices />
      </FadeInUp>
      <FadeInUp>
        <HomeLocations />
      </FadeInUp>
      <FadeInUp>
        <HomeCTA />
      </FadeInUp>
    </div>
  );
}
