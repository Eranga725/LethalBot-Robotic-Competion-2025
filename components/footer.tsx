"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-950 py-12 border-t border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Robotic Battle</h3>
            <p className="mb-4 text-sm text-gray-400">
              The premier robotics competition for students and enthusiasts. Showcasing innovation, technical
              excellence, and the future of robotics.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors rounded-full bg-gray-900 p-2 hover:bg-gray-800"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors rounded-full bg-gray-900 p-2 hover:bg-gray-800"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors rounded-full bg-gray-900 p-2 hover:bg-gray-800"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors rounded-full bg-gray-900 p-2 hover:bg-gray-800"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#overview"
                  className="text-gray-400 hover:text-blue-400 hover:underline transition-colors flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                  Project Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#rules"
                  className="text-gray-400 hover:text-blue-400 hover:underline transition-colors flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link
                  href="#prizes"
                  className="text-gray-400 hover:text-blue-400 hover:underline transition-colors flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                  Team Prizes
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="text-gray-400 hover:text-blue-400 hover:underline transition-colors flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                  Event Timeline
                </Link>
              </li>
              {/*
              <li>
                
                <Link
                  href="#sponsors"
                  className="text-gray-400 hover:text-blue-400 hover:underline transition-colors flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                  Sponsors
                </Link>
              </li>
              */}
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 hover:underline transition-colors flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>


        </div>

        <div className="mt-12 border-t border-blue-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hansana Eranga. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 rounded-full bg-blue-900/50 p-3 text-blue-400 hover:bg-blue-900 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
