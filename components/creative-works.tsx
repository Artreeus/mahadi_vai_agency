"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = ["All Work", "Website", "Mobile App", "UI/UX", "Branding"]

const works = [
  {
    id: 1,
    title: "Project 1",
    category: "Website",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Mobile App",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Project 3",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Project 4",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function CreativeWorks() {
  const [activeCategory, setActiveCategory] = useState("All Work")

  const filteredWorks = activeCategory === "All Work" ? works : works.filter((work) => work.category === activeCategory)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-right mb-2">
          <div className="text-lime-500 text-sm font-semibold">PORTFOLIO</div>
        </div>
        <h2 className="text-3xl font-bold text-lime-500 mb-8">Creative Works</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === activeCategory ? "default" : "outline"}
              className={
                category === activeCategory
                  ? "bg-lime-500 hover:bg-lime-600 text-black rounded-full transition-all"
                  : "border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 hover:text-lime-500 transition-all"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className="relative group overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-lime-500/20"
            >
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                <div className="text-center bg-black/60 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-lime-500 text-xl font-bold mb-2">{work.title}</div>
                  <div className="text-white text-sm">{work.category}</div>
                  <Button className="mt-4 bg-lime-500 hover:bg-lime-600 text-black text-xs rounded-full px-4 py-1 h-auto">
                    View Project
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <span className="text-black text-xs font-bold">0{index + 1}</span>
                </div>
                <div className="text-white text-sm font-medium">{work.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full transform transition-transform hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

