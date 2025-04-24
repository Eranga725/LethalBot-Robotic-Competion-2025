"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import CountdownTimer from "./countdown-timer"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [targetDate, setTargetDate] = useState<Date>(new Date())
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)

    // Set the specific target date: November 4th, 2025 at 7:28 PM
    const date = new Date('2025-06-30T20:00:00')
    setTargetDate(date)

    // Trigger animations after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])  // Remove registrationDeadline dependency since we're using a hardcoded date

  const scrollToNextSection = () => {
    const overviewSection = document.getElementById("overview")
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isMounted) {
    return null
  }

  // Format the date for display
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(targetDate)

  return (
    <section id="hero" ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
      <video
      src="/background-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60">
      <div className="absolute inset-0 bg-blue-900/5"></div>
      </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
      
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">LETHALBOT ROBOT BATTLE</span>
            <span
            className={`mt-2 block transition-colors delay-200 duration-500 ${
            isVisible
            ? "text-blue-600 animate-color-change"
            : "text-blue-400"
            }`}
            >
             COMPETITION
            </span>
            <style jsx>{`
              @keyframes color-change {
              0% {
              color: #00bcd4; /* cyan-500 */
              }
              33% {
              color: #00acc1; /* cyan-600 */
              }
              66% {
              color: #0097a7; /* cyan-700 */
              }
              100% {
              color: #00bcd4; /* cyan-500 */
              }
              }
              .animate-color-change {
              animation: color-change 3s infinite;
              }
            `}</style>
          </h2>
        </div>

        <p
          className={`mb-8 max-w-3xl text-xl text-gray-300 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Join the ultimate robotics showdown and showcase your engineering skills
        </p>

        <div
          className={`mb-6 rounded-full bg-blue-900/10 px-6 py-2 backdrop-blur-sm border border-blue-900/10 transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-xl font-semibold">
          Registration Close : <span className="text-blue-400">{formattedDate}</span>
          </p>
        </div>

        <div
          className={`mb-10 w-full max-w-2xl transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/*
          <h2 className="mb-4 text-xl font-semibold">Time Remaining:</h2>*/}
          <CountdownTimer targetDate={targetDate} />
        </div>

        <div
          className={`flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-all duration-1000 delay-900 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
            <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 hover:scale-105 transition-transform"
            asChild
            >
            <a href="https://forms.gle/taVS7rvC8zRqvie89">Register Now</a>
            </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-950 text-lg px-8 py-6 hover:scale-105 transition-transform"
          >
             <a href="https://drive.google.com/file/d/1d0n-MaRuh-Wx5ELeLPhNWoXeoWrYGocM/view?usp=drive_link">
            Learn More</a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={scrollToNextSection}
            className="rounded-full bg-blue-900/30 p-2 backdrop-blur-sm hover:bg-blue-900/50 transition-colors animate-float"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="h-6 w-6 text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
