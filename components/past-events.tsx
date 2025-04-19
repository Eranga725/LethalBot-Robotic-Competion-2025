"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface EventMemory {
  id: number
  image: string
  title: string
  description: string
  date: string
  location: string
  galleryUrl: string
}

export default function PastEvents() {
  const memories: EventMemory[] = [
    {
      id: 1,
      image: "/487848495_1084831190330232_2723098124022848755_n.jpg",
      title: "2024 Robot Battle",
      description: "New Bots, Same Thrills: The Legacy Continues! Bigger battles, fiercer clashes honoring the past while forging the future..",
      date: "June 12, 2023",
      location: "Sltc Research University, Padukka",
      galleryUrl: "https://www.facebook.com/share/19pbKaouqU/?",
    },
    {
      id: 2,
      image: "/475654821_1034644315348920_8651796016699448881_n.jpg",
      title: "2022 Lethabots Robot Battle",
      description: "Throwback Chaos: When Bots First Ruled the Arena! Relive the sparks, crashes, and legendary smackdowns that started it all.",
      date: "June 10, 2022",
      location: "Sltc Research University, Padukka",
      galleryUrl: "https://www.facebook.com/share/16HdeGjJTT/?",
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

  return (
    <section id="memories" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Past Event Memories</h2>
          <p className="mx-auto max-w-3xl text-gray-400 mb-8">
            Relive the excitement and innovation from our previous robotics competitions.
          </p>
        </motion.div>

        {/* Memory Cards - 2 Column Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {memories.map((memory) => (
            <motion.div key={memory.id} variants={itemVariants}>
              <a href={memory.galleryUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="overflow-hidden bg-gray-900 border-blue-900 h-full shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="aspect-video overflow-hidden relative group">
                    <Image
                      src={memory.image || "/placeholder.svg"}
                      alt={memory.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-sm font-medium text-blue-400 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
                        View Gallery <ExternalLink className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{memory.title}</h3>
                      <ExternalLink className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{memory.description}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-blue-400" />
                        <span>{memory.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-blue-400" />
                        <span>{memory.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Gallery Link 
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
        >
          <p className="mb-4 text-gray-400">Want to see more? Check out our complete photo gallery.</p>
          <a href="https://www.example.com/gallery" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-900/30 group">
              View Full Gallery
              <ExternalLink className="ml-2 h-4 w-4 group-hover:text-blue-300 transition-colors" />
            </Button>
          </a>
        </motion.div>
        */}
      </div>
    </section>
  )
}
