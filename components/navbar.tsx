"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll events to update active section and navbar styling
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background opacity based on scroll position
      setIsScrolled(window.scrollY > 50)

      // Get all sections and determine which one is currently in view
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Setup smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
            // Close mobile menu if open
            setIsMenuOpen(false)
          }
        }
      })
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinkClass = (sectionId: string) => {
    return `text-sm font-medium transition-colors hover:text-blue-400 ${
      activeSection === sectionId ? "text-blue-400" : "text-gray-200"
    }`
  }

  const mobileNavLinkClass = (sectionId: string) => {
    return `block rounded-md px-3 py-2 text-base font-medium hover:bg-blue-900/50 hover:text-blue-400 ${
      activeSection === sectionId ? "bg-blue-900/30 text-blue-400" : "text-gray-200"
    }`
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#hero" className="flex items-center space-x-2">
          <img
            src="/logohu1.png"
            alt="Logo"
            className="h-auto w-auto max-h-28"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="#overview" className={navLinkClass("overview")}>
            Overview
          </Link>
          <Link href="#rules" className={navLinkClass("rules")}>
            Rules
          </Link>
          <Link href="#prizes" className={navLinkClass("prizes")}>
            Prizes
          </Link>
          <Link href="#roadmap" className={navLinkClass("roadmap")}>
            Timeline
          </Link>
          <Link href="#memories" className={navLinkClass("memories")}>
            Past Events
          </Link>
          {/*}
          <Link href="#sponsors" className={navLinkClass("sponsors")}>
            Sponsors
          </Link>*/}
          <Link href="#contact" className={navLinkClass("contact")}>
            Contact
          </Link>
        </nav>

        <Button className="hidden bg-blue-600 hover:bg-blue-700 md:inline-flex">Register Now</Button>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="#overview" className={mobileNavLinkClass("overview")} onClick={toggleMenu}>
            Overview
          </Link>
          <Link href="#rules" className={mobileNavLinkClass("rules")} onClick={toggleMenu}>
            Rules
          </Link>
          <Link href="#prizes" className={mobileNavLinkClass("prizes")} onClick={toggleMenu}>
            Prizes
          </Link>
          <Link href="#roadmap" className={mobileNavLinkClass("roadmap")} onClick={toggleMenu}>
            Timeline
          </Link>
          <Link href="#memories" className={mobileNavLinkClass("memories")} onClick={toggleMenu}>
            Past Events
          </Link>
          <Link href="#sponsors" className={mobileNavLinkClass("sponsors")} onClick={toggleMenu}>
            Sponsors
          </Link>
          <Link href="#contact" className={mobileNavLinkClass("contact")} onClick={toggleMenu}>
            Contact
          </Link>
          <div className="mt-4 px-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
