import AboutSummary from "@/components/AboutSummary";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import MainPage from "@/components/MainPage";
import ProjectShowcase from "@/components/ProjectShowcase ";

export default function Home() {
  return (
    <>
      <Hero />
      <MainPage>

        <AboutSummary />
        <ProjectShowcase />
        <ContactCTA />
        </MainPage>
    </>
  );
}
