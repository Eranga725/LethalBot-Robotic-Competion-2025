import { CheckCircle2, Circle, Clock } from "lucide-react"

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Event Timeline</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Mark these important dates on your calendar to stay on track throughout the competition.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Timeline Item 1 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-900/50"></div>
            </div>
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/50 transform transition-transform hover:scale-110">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="flex-grow pl-6">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-white">Registration Opens</h3>
                <div className="ml-4 rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-400">Completed</div>
              </div>
              <p className="mb-2 text-sm font-semibold text-blue-400">September 1, 2023</p>
              <p className="text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-600">
                Teams can register online and submit initial concept proposals. Early bird registration discounts
                available until September 15.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-900/50"></div>
            </div>
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/50 transform transition-transform hover:scale-110">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="flex-grow pl-6">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-white">Registration Deadline</h3>
                <div className="ml-4 rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-400">Completed</div>
              </div>
              <p className="mb-2 text-sm font-semibold text-blue-400">December 31, 2023</p>
              <p className="text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-600">
                Final day to complete registration and submit all required team documentation. No extensions will be
                granted.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-900/50"></div>
            </div>
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/50 transform transition-transform hover:scale-110">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex-grow pl-6">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-white">Design Submission</h3>
                <div className="ml-4 rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-400">In Progress</div>
              </div>
              <p className="mb-2 text-sm font-semibold text-blue-400">February 15, 2024</p>
              <p className="text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-600">
                Teams must submit detailed design documents, including technical specifications, CAD models, and
                preliminary code.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-900/50"></div>
            </div>
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-gray-300 shadow-lg transform transition-transform hover:scale-110">
              <Circle className="h-6 w-6" />
            </div>
            <div className="flex-grow pl-6">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-white">Progress Report</h3>
                <div className="ml-4 rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-400">Upcoming</div>
              </div>
              <p className="mb-2 text-sm font-semibold text-blue-400">April 1, 2024</p>
              <p className="text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 border-gray-700">
                Mid-point check-in with video demonstration of robot progress and functionality. Feedback will be
                provided.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-900/50"></div>
            </div>
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-gray-300 shadow-lg transform transition-transform hover:scale-110">
              <Circle className="h-6 w-6" />
            </div>
            <div className="flex-grow pl-6">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-white">Final Submission</h3>
                <div className="ml-4 rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-400">Upcoming</div>
              </div>
              <p className="mb-2 text-sm font-semibold text-blue-400">May 15, 2024</p>
              <p className="text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 border-gray-700">
                Final technical documentation, code repository, and video demonstration must be submitted for
                pre-competition review.
              </p>
            </div>
          </div>

          {/* Timeline Item 6 */}
          <div className="relative flex">
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-gray-300 shadow-lg transform transition-transform hover:scale-110">
              <Circle className="h-6 w-6" />
            </div>
            <div className="flex-grow pl-6">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-white">Competition Days</h3>
                <div className="ml-4 rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-400">Upcoming</div>
              </div>
              <p className="mb-2 text-sm font-semibold text-blue-400">June 10-12, 2024</p>
              <p className="text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 border-gray-700">
                The main event! Three days of intense competition, workshops, networking events, and the awards
                ceremony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
