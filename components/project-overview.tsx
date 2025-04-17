import { Rocket, Zap, Trophy, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectOverview() {
  return (
    <section id="overview" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Project Overview</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
          SLTC LETHALBOTS 2025 is a dynamic robot battle competition organized by the undergraduates of Sri Lanka Technological
Campus (SLTC). Students from all universities across the nation participate in this event which emerged from the shared
enthusiasm for innovation and technology with the goal of motivating engineering and robotics interests.

          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Rocket className="mb-2 h-8 w-8 text-blue-400" />
              <CardTitle className="text-white">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Showcase cutting-edge robotics technology and creative solutions to complex challenges.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Zap className="mb-2 h-8 w-8 text-blue-400" />
              <CardTitle className="text-white">Competition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Test your robot's capabilities against others in various challenging arenas and scenarios.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Trophy className="mb-2 h-8 w-8 text-blue-400" />
              <CardTitle className="text-white">Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Win prestigious awards and gain recognition from industry leaders and academic institutions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Users className="mb-2 h-8 w-8 text-blue-400" />
              <CardTitle className="text-white">Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Connect with fellow enthusiasts, potential employers, and mentors in the robotics field.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
