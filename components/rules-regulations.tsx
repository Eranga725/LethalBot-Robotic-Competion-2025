"use client"

import { Check, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function RulesRegulations() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="rules" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Rules & Regulations</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Familiarize yourself with the competition guidelines to ensure fair play and safety for all participants.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
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
                    <p className="text-gray-300">Maximum of 3 team members, including alternates.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Each participant can be in only one team.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">One team leader required to handle all communications.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Participants under 18 must be accompanied by a legal guardian.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Choose an appropriate, pronounceable team name.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">
                      Teams may give a separate robot name (defaults to team name if not).
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Team leader must register all members and the robot.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">All members must wear official event tags.</p>
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
                    <p className="text-gray-300">Robot weight must not exceed 15kg.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">
                      Dimension of the robot must be within 40cm x 40cm x 40cm (L × W × H).
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Must have an internal power supply, max 24V between any two points.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">No internal combustion engines.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">No detachable or secondary robots.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Must have a clearly indicated start switch.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Must not pose danger to judges, operators, or spectators.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Must not damage the arena floor or fencing.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">No liquids, signal jammers, or hazardous materials.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Must avoid radio frequency conflicts (use digital transmitters).</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">All robots must pass a technical inspection.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Any hazardous functions may be restricted by judges.</p>
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
                    <p className="text-gray-300">Robots undergo initial inspection before competing.</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">A second inspection is required before the semifinals.</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Any breach of safety rules results in immediate disqualification.</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">
                      Includes: turning on weapons in restricted areas, causing damage, unsafe behavior.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Teams have 1 minute for robot calibration before a match.</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">No code or hardware changes allowed during calibration.</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Robot must be deactivated before handling.</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">
                      At least 2 team members must know how to safely activate/deactivate the robot.
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
                    <p className="text-gray-300">Double-elimination format – each team gets two chances.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Matches are 2 minutes long (active fight time).</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Teams must arrive 15 minutes before the match.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">1 timeout per team per match (no repairs allowed).</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Battle side of the arena selection is decided by a coin toss.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Disqualification for rule violations, inactivity, or surrender.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">Late comers directly enter the loser's bracket.</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <p className="text-gray-300">No signal jammers or hazardous devices allowed.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
