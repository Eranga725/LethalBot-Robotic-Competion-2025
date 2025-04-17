import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface Sponsor {
  id: number
  name: string
  logo: string
  tier: "Platinum" | "Gold"
}

export default function SponsorBar() {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "TechCorp Industries",
      logo: "/transparentcolor-Copy.png", 
      tier: "Platinum",
    },
    {
      id: 2,
      name: "Quantum Robotics",
      logo: "/transparentcolor-Copy.png", 
      tier: "Platinum",
    },
    {
      id: 3,
      name: "FutureTech Solutions",
      logo: "/transparentcolor-Copy.png", 
      tier: "Gold",
    },
    {
      id: 4,
      name: "RoboInnovate Labs",
      logo: "/transparentcolor-Copy.png", 
      tier: "Gold",
    },
  ]

  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Our Sponsors</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            We're grateful to these organizations for making the Robotic Battle Competition possible.
          </p>
        </div>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4">
                <div
                  className={`absolute inset-0 rounded-xl ${
                    sponsor.tier === "Platinum"
                      ? "bg-gradient-to-b from-blue-500/20 via-blue-900/10 to-transparent"
                      : "bg-gradient-to-b from-yellow-500/20 via-yellow-900/10 to-transparent"
                  } p-[1px]`}
                >
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center p-6 hover:bg-gray-800 transition-colors duration-300">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={150}
                      height={150}
                      className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`text-center ${
                  sponsor.tier === "Platinum" ? "text-blue-400" : "text-yellow-400"
                } text-sm font-medium`}
              >
                {sponsor.tier} Sponsor
              </div>
              <div className="text-white font-medium mt-1">{sponsor.name}</div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Become a Sponsor <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
