import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ConsultationForm() {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <div className="text-lime-500 text-sm font-semibold">CONTACT US</div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Get Free Consultation</h2>

        <div className="bg-[#0a192f] rounded-lg p-6 md:p-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Analytics"
                  width={200}
                  height={100}
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Insights</h3>
              <p className="text-gray-300 mb-6">
                Our consultation provides you with actionable insights based on data analysis and industry expertise.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <Image
                    src="/placeholder.svg?height=80&width=150"
                    alt="Chart 1"
                    width={150}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Image
                    src="/placeholder.svg?height=80&width=150"
                    alt="Chart 2"
                    width={150}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white/5 rounded-lg p-6">
                <form>
                  <div className="grid gap-4 mb-6">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-lime-500/20 hover:border-lime-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Schedule Call
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-lime-500/20 hover:border-lime-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </div>

                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-500/30">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

