import { Check, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RulesRegulations() {
  return (
    <section id="rules" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Rules & Regulations</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Familiarize yourself with the competition guidelines to ensure fair play and safety for all participants.
          </p>
        </div>

        <Card className="bg-gray-900 border-blue-900 mx-auto max-w-4xl shadow-lg hover:shadow-blue-900/20 transition-shadow">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Competition Rules & Regulations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-400 mr-3 rounded-full"></span>
                Team Requirements
              </h3>
              <div className="space-y-3 pl-4">
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    Each team must consist of 2-5 members, with at least one faculty advisor.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    All team members must be currently enrolled students at an accredited educational institution.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    Registration must be completed by the deadline with all required documentation submitted.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-400 mr-3 rounded-full"></span>
                Robot Specifications
              </h3>
              <div className="space-y-3 pl-4">
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">Robot weight must not exceed 15kg (33lbs).</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">Maximum dimensions: 50cm x 50cm x 50cm (19.7in x 19.7in x 19.7in).</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">Voltage must not exceed 24V DC at any point in the electrical system.</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    All robots must have a clearly marked and accessible emergency stop button.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-400 mr-3 rounded-full"></span>
                Safety Requirements
              </h3>
              <div className="space-y-3 pl-4">
                <div className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    All team members must wear safety glasses when working on or operating robots.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    No combustible materials, explosives, or flammable liquids are permitted.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    Robots must have no exposed sharp edges or points that could cause injury.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    All robots must pass a safety inspection before being allowed to compete.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-400 mr-3 rounded-full"></span>
                Competition Procedures
              </h3>
              <div className="space-y-3 pl-4">
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">Teams must attend all mandatory briefings and safety orientations.</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">Judges' decisions are final and cannot be appealed.</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    Wireless communication must use standard 2.4GHz or 5GHz bands with proper interference protection.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300">
                    Each match will last 3 minutes with a 30-second autonomous period at the beginning.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
