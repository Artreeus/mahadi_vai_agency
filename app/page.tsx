import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechnologyStack from "@/components/technology-stack"
import CreativeWorks from "@/components/creative-works"
import ConsultationForm from "@/components/consultation-form"
import TrustedCompanies from "@/components/trusted-companies"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-10 bg-black/90 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/wlogo.jpg" alt="Spark TECH" width={150} height={50} />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-lime-400 transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link href="#" className="text-white hover:text-lime-400 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="#" className="text-white hover:text-lime-400 transition-colors text-sm font-medium">
              Our Team
            </Link>
            <Link href="#" className="text-white hover:text-lime-400 transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <Phone className="h-4 w-4 mr-2 text-lime-500" />
              <span className="text-sm text-white">+1 (123) 456-7890</span>
            </div>
            <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full transition-colors">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0a192f] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block bg-lime-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
                #1 AWARD-WINNING AGENCY WITH 10+ YEARS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                From Sparks To
                <br />
                Spectacular
              </h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                Leading tech solutions provider with cutting-edge expertise in software development, AI integration, and
                innovative digital solutions. Elevate your business with our specialized software solutions, providing
                the tools necessary for success.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=350&width=350"
                  alt="Team working together"
                  width={350}
                  height={350}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Spark Tech Building"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="text-lime-500 text-sm font-semibold mb-2">OUR EXPERTISE</div>
              <h2 className="text-3xl md:text-4xl font-bold text-lime-500 mb-6">We're Best In Software Development</h2>
              <p className="text-gray-300 mb-8">
                Empower your business through our cutting-edge software development. From the inception of your project
                to its deployment, we ensure excellence at every stage.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Custom Software</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Mobile Applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">AI/ML Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic & Sales Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <div className="text-lime-500 text-sm font-semibold mb-2">WHAT MAKES US STAND APART?</div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-lime-500 mb-6">
                Drive More Traffic &<br />
                Product Sales
              </h2>
              <p className="text-gray-300 mb-8">
                Our solutions are designed to increase your online visibility and convert visitors into customers.
              </p>
              <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full">Get Started</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="flex items-end space-x-4 h-[200px]">
                  <div className="w-16 bg-blue-500 h-[60%] rounded-t-md"></div>
                  <div className="w-16 bg-green-500 h-[80%] rounded-t-md"></div>
                  <div className="w-16 bg-yellow-500 h-[70%] rounded-t-md"></div>
                  <div className="w-16 bg-red-500 h-[90%] rounded-t-md"></div>
                </div>
                <div className="absolute top-0 right-0 bg-black/80 rounded-full p-4 text-center">
                  <div className="text-4xl font-bold">0+</div>
                  <div className="text-xs text-gray-300">Years Of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-right mb-6">
            <div className="text-lime-500 text-sm font-semibold">OUR SERVICES</div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 grid grid-cols-2 gap-4 mb-10 md:mb-0">
              <div className="bg-lime-500 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="text-black text-4xl mb-2">🚀</div>
                <div className="text-black font-semibold">INNOVATION</div>
              </div>
              <div className="bg-lime-500 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="text-black text-4xl mb-2">⚙️</div>
                <div className="text-black font-semibold">DEVELOPMENT</div>
              </div>
              <div className="bg-lime-500 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="text-black text-4xl mb-2">📱</div>
                <div className="text-black font-semibold">MOBILE APPS</div>
              </div>
              <div className="bg-lime-500 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                <div className="text-black text-4xl mb-2">🖥️</div>
                <div className="text-black font-semibold">WEB DEVELOPMENT</div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-lime-500 mb-6">
                Empowering Your
                <br />
                Business with
                <br />
                Technology Solutions
              </h2>
              <p className="text-gray-300 mb-8">
                We offer a complete technology ecosystem that supports the development of your business. From concept to
                execution, we provide the tools necessary for your success.
              </p>
              <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <TechnologyStack />

      {/* Creative Works Section */}
      <CreativeWorks />

      {/* Consultation Form Section */}
      <ConsultationForm />

      {/* Trusted Companies Section */}
      <TrustedCompanies />

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="/placeholder.svg?height=50&width=150"
                alt="Spark TECH"
                width={150}
                height={50}
                className="mb-6"
              />
              <p className="text-gray-400 mb-4">
                Leading tech solutions provider with cutting-edge expertise in software development and digital
                innovation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <span>f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <span>t</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <span>i</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                    Cloud Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">123 Tech Street, Silicon Valley, CA</li>
                <li className="text-gray-400">+1 (123) 456-7890</li>
                <li className="text-gray-400">info@sparktech.com</li>
              </ul>
              <Button className="mt-6 bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Spark TECH. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

