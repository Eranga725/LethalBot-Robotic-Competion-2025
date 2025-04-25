import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function ContactUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Sadeepa Dilshan",
      role: "Event Chairperson",
      image: "/02156.png",
      email: "lethalbots@sltc.ac.lk",
      phone: "+94 (72) 311 08798",
    },
    {
      id: 2,
      name: "Duhun Perera",
      role: "Secretary",
      image: "/IMG_7672.JPG",
      email: "lethalbots@sltc.ac.lk",
      phone: "+94 (77) 917 5642",
    },
    {
      id: 3,
      name: "Dr. Migara Karunarathne",
      role: "Dean Faculty Of Technology",
      image: "/DSC09123-scaled.jpg",
      email: "migarak@sltc.ac.lk",
      phone: "+94 (71) 403 3934",
    },
    {
      id: 4,
      name: "Dr. Chamith Chandrarathna",
      role: "Acting Department Head - Applied Electronics",
      image: "/WhatsApp Image 2025-04-25 at 13.10.00_63b9aff2.jpg",
      email: "chamithc@sltc.ac.lk",
      phone: "+94 (70) 475 5732",
    },
    {
      id: 5,
      name: "Mr. Ashan Pathirana",
      role: "Mechanical & Mechatronics",
      image: "/WhatsApp Image 2025-04-25 at 13.10.27_f31fc22b.jpg",
      email: "ashanp@sltc.ac.lk",
      phone: "+94 (70) 197 4366",
    },
  ]

  return (
    <section id="contact" className="py-24 flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Contact Us</h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Have questions about the competition? Reach out to our team for assistance.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3 justify-center">
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
