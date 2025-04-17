"use client"

import { Info, Target, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ProjectOverview() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="overview" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Project Overview</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            SLTC LETHALBOTS 2025 is the premier robotics battle competition in Sri Lanka, bringing together the
            brightest minds to compete, learn, and innovate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <Info className="mb-2 h-8 w-8 text-blue-400" />
                <CardTitle className="text-white">About the Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  SLTC LETHALBOTS 2025 is a dynamic robot battle competition organized by the undergraduates of Sri
                  Lanka Technological Campus (SLTC). Students from all universities across the nation participate in
                  this event which emerged from the shared enthusiasm for innovation and technology with the goal of
                  motivating engineering and robotics interests.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <Target className="mb-2 h-8 w-8 text-blue-400" />
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  For the lack of hands-on tech engagement among undergraduates, LETHALBOTS 2025 serves as our project
                  to enhance robot design and building experiences through an impressive platform which helps students
                  participate in robot battles for exciting technological innovation.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Card className="bg-gray-900 border-blue-900 shadow-lg transform transition-all hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <Lightbulb className="mb-2 h-8 w-8 text-blue-400" />
                <CardTitle className="text-white">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  LETHALBOTS 2025 offers its participants more than competition because it embraces engineering
                  excellence with team spirit through a celebration of Sri Lankan robotic advancement.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
