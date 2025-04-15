"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

interface EventMemory {
  id: number
  image: string
  title: string
  description: string
  date: string
  location: string
  fullDescription?: string
}

export default function PastEvents() {
  const [selectedMemory, setSelectedMemory] = useState<EventMemory | null>(null)

  const memories: EventMemory[] = [
    {
      id: 1,
      image: "/ga5.jpg",
      title: "2023 Grand Finals",
      description: "The exciting conclusion of last year's competition with Team RoboMasters taking the trophy.",
      date: "June 12, 2023",
      location: "Boston Convention Center",
      fullDescription:
        "The 2023 Grand Finals was a spectacular event that showcased the incredible talent and innovation of our participating teams. After three days of intense competition, Team RoboMasters emerged victorious with their revolutionary robot design featuring advanced autonomous navigation and precise mechanical control. The final match drew a record audience of over 2,000 spectators and was livestreamed to thousands more around the world. The competition featured robots competing in various challenges including obstacle courses, precision tasks, and head-to-head battles. Judges from leading technology companies and academic institutions evaluated each robot on innovation, performance, design quality, and technical implementation.",
    },
    {
      id: 2,
      image: "/ga5.jpg",
      title: "Robot Showcase Exhibition",
      description: "Innovative designs from previous competitions that pushed the boundaries of robotics.",
      date: "June 10, 2023",
      location: "Exhibition Hall",
      fullDescription:
        "The Robot Showcase Exhibition featured the most innovative designs from current and past competitions. Visitors could interact with the robots, speak with their creators, and learn about the engineering principles behind each design. This event was open to the public and attracted many young students, inspiring the next generation of robotics engineers and programmers. The exhibition included demonstrations of cutting-edge technologies including computer vision systems, advanced manipulators, autonomous navigation, and human-robot interaction interfaces. Industry representatives were particularly impressed by the high level of innovation and technical skill demonstrated by the student teams, with several projects receiving interest for potential commercial development.",
    },
  ]

  const openMemoryDetails = (memory: EventMemory) => {
    setSelectedMemory(memory)
  }

  const closeMemoryDetails = () => {
    setSelectedMemory(null)
  }

  return (
    <section id="memories" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Past Event Memories</h2>
          <p className="mx-auto max-w-3xl text-gray-400 mb-8">
            Relive the excitement and innovation from our previous robotics competitions.
          </p>
        </div>

        {/* Memory Cards - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {memories.map((memory) => (
            <Card
              key={memory.id}
              className="overflow-hidden bg-gray-900 border-blue-900 h-full shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openMemoryDetails(memory)}
            >
              <div className="aspect-video overflow-hidden relative group">
                <Image
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm font-medium text-blue-400 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    View Details
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-white mb-3">{memory.title}</h3>
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
          ))}
        </div>

        {/* Memory Detail Modal 
        <Dialog open={!!selectedMemory} onOpenChange={(open) => !open && closeMemoryDetails()}>
          <DialogContent className="bg-gray-900 border-blue-900 text-white max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-400">{selectedMemory?.title}</DialogTitle>
              <DialogDescription className="text-gray-400 flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-blue-400" />
                  <span>{selectedMemory?.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-blue-400" />
                  <span>{selectedMemory?.location}</span>
                </div>
              </DialogDescription>
            </DialogHeader>*

            <div className="relative aspect-video overflow-hidden rounded-md mb-4">
              {selectedMemory && (
                <Image
                  src={selectedMemory.image || "/placeholder.svg"}
                  alt={selectedMemory.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <p className="text-gray-300 leading-relaxed">{selectedMemory?.fullDescription}</p>
          </DialogContent>
        </Dialog>
        */}

        {/* View All Gallery Link */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-gray-400">Want to see more? Check out our full gallery of past events.</p>
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-900/30">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
