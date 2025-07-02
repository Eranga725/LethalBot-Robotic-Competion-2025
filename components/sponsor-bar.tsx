import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface Sponsor {
  id: number
  name: string
  logo: string
  tier: "Platinum" | "Gold" | "Bronze"
  type: "sponsor"
}

interface BeveragePartner {
  id: number
  name: string
  logo: string
  type: "beverage"
}

type Partner = Sponsor | BeveragePartner

export default function SponsorBar() {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Aramco Polythene",
      logo: "/ARAMCO POLYTHENE.png",
      tier: "Bronze",
      type: "sponsor",
    },
    {
      id: 2,
      name: "SLIR",
      logo: "SLIR.png",
      tier: "Bronze",
      type: "sponsor",
    },
    {
      id: 3,
      name: "Ceylonta Beach Resort & Spa",
      logo: "/Ceylonta.png",
      tier: "Bronze",
      type: "sponsor",
    },
  ]

  const beveragePartners: BeveragePartner[] = [
    {
      id: 4,
      name: "Sunquick",
      logo: "/sunquik.png",
      type: "beverage",
    },
    {
      id: 5,
      name: "Viva",
      logo: "/Remove-bg.ai_1751440155228.png",
      type: "beverage",
    },
  ]

  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Our Partners</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            We're grateful to these organizations for making the Robotic Battle Competition possible.
          </p>
        </div>

        {/* Main Sponsors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Official Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 max-w-[200px]">
                  <div
                    className={`absolute inset-0 rounded-xl ${
                      sponsor.tier === "Platinum"
                        ? "bg-gradient-to-b from-blue-500/20 via-blue-900/10 to-transparent"
                        : "bg-gradient-to-b from-yellow-500/20 via-yellow-900/10 to-transparent"
                    } p-[1px]`}
                  >
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center p-6  hover:bg-slate-300 transition-colors duration-300">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo - ${sponsor.tier} sponsor of Robotic Battle Competition`}
                        width={150}
                        height={150}
                        className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`text-center ${
                    sponsor.tier === "Platinum"
                      ? "text-blue-400"
                      : sponsor.tier === "Gold"
                      ? "text-yellow-400"
                      : sponsor.tier === "Bronze"
                      ? "text-amber-700"
                      : ""
                  } text-sm font-medium mb-1`}
                >
                  {sponsor.tier} Sponsor
                </div>
                <div className="text-white font-medium text-center">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Beverage Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Beverage Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {beveragePartners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 max-w-[180px]">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-green-500/20 via-green-900/10 to-transparent p-[1px]">
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center p-6 hover:bg-slate-300 transition-colors duration-300">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo - Beverage partner of Robotic Battle Competition`}
                        width={150}
                        height={150}
                        className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center text-green-400 text-sm font-medium mb-1">Beverage Partner</div>
                <div className="text-white font-medium text-center">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Become a Partner <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
