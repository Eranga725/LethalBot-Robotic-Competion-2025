import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function ContactUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Event Chairperson",
      image: "/cricketing-maestro-the-one-amp.jpeg.jpg",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Secretary",
      image: "/cricketing-maestro-the-one-amp.jpeg.jpg",
      email: "michael.chen@example.com",
      phone: "+1 (555) 234-5678",
    },
    {
      id: 3,
      name: "Dr. Robert Williams",
      role: "Head of Department",
      image: "/cricketing-maestro-the-one-amp.jpeg.jpg",
      email: "robert.williams@example.com",
      phone: "+1 (555) 345-6789",
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Contact Us</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Have questions about the competition? Reach out to our team for assistance.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center rounded-lg bg-gradient-to-b from-gray-900 to-blue-950 p-6 text-center border border-blue-900 shadow-lg hover:shadow-blue-900/30 transform transition-all hover:-translate-y-2"
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg shadow-blue-900/50">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                <p className="mb-4 text-blue-400">{member.role}</p>
                <div className="space-y-2 w-full">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <Mail className="h-4 w-4 text-blue-500 group-hover:text-blue-400" />
                    <span>{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <Phone className="h-4 w-4 text-blue-500 group-hover:text-blue-400" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
