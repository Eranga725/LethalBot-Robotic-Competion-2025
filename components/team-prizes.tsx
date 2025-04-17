import { Trophy, Award, Medal } from "lucide-react"

export default function TeamPrizes() {
  return (
    <section id="prizes" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Team Prizes</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Compete for prestigious awards and substantial prizes that recognize excellence in robotics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Winner */}
            <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-gray-900 to-yellow-900 p-8 text-center shadow-lg border border-yellow-700 transform transition-all hover:scale-105 hover:shadow-yellow-900/30 hover:shadow-xl">
            <div className="mb-6 rounded-full bg-yellow-900/50 p-4">
              <Trophy className="h-16 w-16 text-yellow-400" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Winner</h3>
            <p className="mb-4 text-3xl font-semibold text-yellow-300">$10,000</p>
            <p className="text-sm text-gray-300">
              Awarded to the team with the highest overall performance across all competition categories.
            </p>
            </div>

          {/* 1st Runner Up */}
            <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 p-8 text-center shadow-lg border border-gray-500 transform transition-all hover:scale-105 hover:shadow-gray-700/30 hover:shadow-xl">
            <div className="mb-6 rounded-full bg-gray-700/50 p-4">
              <Medal className="h-16 w-16 text-gray-300" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">1st Runner Up</h3>
            <p className="mb-4 text-3xl font-semibold text-gray-300">$5,000</p>
            <p className="text-sm text-gray-300">
              Awarded to the team that places second in the overall competition rankings.
            </p>
            </div>

          {/* 2nd Runner Up */}
            <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-gray-900 to-orange-900 p-8 text-center shadow-lg border border-orange-700 transform transition-all hover:scale-105 hover:shadow-orange-900/30 hover:shadow-xl">
            <div className="mb-6 rounded-full bg-orange-900/50 p-4">
              <Award className="h-16 w-16 text-orange-400" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">2nd Runner Up</h3>
            <p className="mb-4 text-3xl font-semibold text-orange-300">$2,500</p>
            <p className="text-sm text-gray-300">
              Awarded to the team that places third in the overall competition rankings.
            </p>
            </div>
        </div>
      </div>
    </section>
  )
}
