"use client"

import { useState, useEffect, useRef } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Track which digits are animating
  const [animating, setAnimating] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  })

  // Use ref to store previous values without triggering re-renders
  const prevTimeRef = useRef<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Function to calculate time left
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Update the countdown
    const updateCountdown = () => {
      const newTimeLeft = calculateTimeLeft()
      const prev = prevTimeRef.current

      // Check which values changed to trigger animations
      const newAnimating = {
        days: prev.days !== newTimeLeft.days,
        hours: prev.hours !== newTimeLeft.hours,
        minutes: prev.minutes !== newTimeLeft.minutes,
        seconds: prev.seconds !== newTimeLeft.seconds,
      }

      // Update state and ref
      setTimeLeft(newTimeLeft)
      setAnimating(newAnimating)
      prevTimeRef.current = newTimeLeft

      // Reset animation flags after animation completes
      if (Object.values(newAnimating).some(Boolean)) {
        setTimeout(() => {
          setAnimating({
            days: false,
            hours: false,
            minutes: false,
            seconds: false,
          })
        }, 600)
      }
    }

    // Initial update
    updateCountdown()

    // Set up interval for updates
    const intervalId = setInterval(updateCountdown, 1000)

    // Clean up interval on unmount
    return () => clearInterval(intervalId)
  }, [targetDate]) // Only depend on targetDate

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className={animating.days ? "animate-flip" : ""}>
        <div className="rounded-xl bg-blue-900/30 p-4 backdrop-blur-sm border border-blue-900/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-900/30 to-blue-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
          <div className="text-4xl font-bold relative z-10">{timeLeft.days}</div>
          <div className="text-sm uppercase text-gray-300 relative z-10">Days</div>
        </div>
      </div>

      <div className={animating.hours ? "animate-flip" : ""}>
        <div className="rounded-xl bg-blue-900/30 p-4 backdrop-blur-sm border border-blue-900/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-900/30 to-blue-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
          <div className="text-4xl font-bold relative z-10">{formatNumber(timeLeft.hours)}</div>
          <div className="text-sm uppercase text-gray-300 relative z-10">Hours</div>
        </div>
      </div>

      <div className={animating.minutes ? "animate-flip" : ""}>
        <div className="rounded-xl bg-blue-900/30 p-4 backdrop-blur-sm border border-blue-900/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 relative overflow-hidden group flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-900/30 to-blue-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
          <div className="text-4xl font-bold relative z-10">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-sm uppercase text-gray-300 relative z-10">Minutes</div>
        </div>
      </div>

      <div className={animating.seconds ? "animate-flip" : ""}>
      <div className="rounded-xl bg-blue-900/30 p-4 backdrop-blur-sm border border-blue-900/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 relative overflow-hidden group flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-900/30 to-blue-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
          <div className="text-4xl font-bold relative z-10">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-sm uppercase text-gray-300 relative z-10">Seconds</div>
        </div>
      </div>
    </div>
  )
}
