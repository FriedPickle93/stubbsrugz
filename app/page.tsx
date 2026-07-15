import { AboutSection } from "@/components/home/about-section";
import { CTASection } from "@/components/home/cta-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { getFeaturedProjects, getProjects } from "@/data/projects";

export default function Home() {
  const featured = getFeaturedProjects();
  const projects = getProjects();

  return (
    <>
      <HeroSection featuredProjects={featured} />
      <AboutSection />
      <ProcessSection />
      <FeaturedWorkSection projects={projects} />
      <WhyChooseSection />
      <CTASection />
    </>
  );
}
