"use client"

import { Circle, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Roadmap() {
  const timelineEvents = [
    {
      title: "Registration Open",
      date: "April 24, 2025",
      description:
        "The battle begins here! Start crafting your ultimate combat robot. Let the countdown to glory begin.",
      status: "completed",
    },
    {
      title: "Registration Close",
      date: "July 04, 2025",
      description:
        "The gates are closing! Don't miss your chance to compete in the most electrifying robot showdown of the year.",
      status: "completed",
    },
    {
      title: "Awareness Meeting",
      date: "July 13, 2025",
      description:
        "Stay informed and battle-ready. This session covers final reminders, rule clarifications & safety protocols.",
      status: "completed",
    },
    {
      title: "Battle Draw",
      date: "July 14, 2025",
      description:
        "Find out your first opponent! The official match lineup will be revealed—get ready to plan your strategy.",
      status: "upcoming",
    },
    {
      title: "Battle Day",
      date: "July 15, 2025",
      description:
        "This is it. Step into the arena, showcase your creation, and fight for glory, innovation, and victory.",
      status: "upcoming",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Function to get the appropriate icon based on status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6" />
      case "in-progress":
        return <Clock className="h-6 w-6" />
      default:
        return <Circle className="h-6 w-6" />
    }
  }

  // Function to get the appropriate status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <div className="ml-4 rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-400">Completed</div>
      case "in-progress":
        return (
          <div className="ml-4 rounded-full bg-blue-800/50 px-3 py-1 text-sm text-blue-300 animate-pulse">
            In Progress
          </div>
        )
      default:
        return <div className="ml-4 rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-400">Upcoming</div>
    }
  }

  // Function to get the appropriate node style
  const getNodeStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
      case "in-progress":
        return "bg-blue-500 text-white shadow-lg shadow-blue-900/50"
      default:
        return "bg-gray-700 text-gray-300 shadow-lg"
    }
  }

  // Function to get the appropriate border style
  const getBorderStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "border-blue-600"
      case "in-progress":
        return "border-blue-500"
      default:
        return "border-gray-700"
    }
  }

  return (
    <section id="roadmap" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Event Timeline</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Mark these important dates on your calendar to stay on track throughout the competition.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {timelineEvents.map((event, index) => (
            <motion.div key={index} className="relative flex pb-12" variants={itemVariants}>
              {index !== timelineEvents.length - 1 && (
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-blue-900/50"></div>
                </div>
              )}
              <div
                className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${getNodeStyle(
                  event.status,
                )} transform transition-transform hover:scale-110`}
              >
                {getStatusIcon(event.status)}
              </div>
              <div className="flex-grow pl-6">
                <div className="mb-1 flex items-center">
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  {getStatusBadge(event.status)}
                </div>
                <p className="mb-2 text-sm font-semibold text-blue-400">{event.date}</p>
                <p className={`text-gray-400 bg-gray-900/50 p-4 rounded-lg border-l-4 ${getBorderStyle(event.status)}`}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
