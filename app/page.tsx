import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProjectOverview from "@/components/project-overview"
import RulesRegulations from "@/components/rules-regulations"
import TeamPrizes from "@/components/team-prizes"
import Roadmap from "@/components/roadmap"
import PastEvents from "@/components/past-events"
import SponsorBar from "@/components/sponsor-bar"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"

export default function Home() {
  const eventDate = "2025-04-05T19:00:00"

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Navbar />
      <main className="pt-16">
        <HeroSection registrationDeadline={eventDate} />
        <ProjectOverview />
        <RulesRegulations />
        <TeamPrizes />
        <Roadmap />
        <PastEvents />
        <SponsorBar />
        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}
