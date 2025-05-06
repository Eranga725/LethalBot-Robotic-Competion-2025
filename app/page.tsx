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
import Script from 'next/script'

export default function Home() {
  const eventDate = "2025-04-05T19:00:00"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "LETHALBOTS 2025",
    "description": "Sri Lanka's premier robotics competition featuring robot battles and engineering innovation",
    "startDate": "2025-06-30T20:00:00",
    "endDate": "2025-06-30T23:00:00",
    "location": {
      "@type": "Place",
      "name": "Sri Lanka Technological Campus (SLTC)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Padukka",
        "addressRegion": "Western Province",
        "addressCountry": "Sri Lanka"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "SLTC Engineering",
      "url": "https://sltc.ac.lk"
    }
  }

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-16">
        <HeroSection registrationDeadline={eventDate} />
        <ProjectOverview />
        <RulesRegulations />
        <TeamPrizes />
        <Roadmap />
        <PastEvents />
        {/*<SponsorBar />*/}
        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}
