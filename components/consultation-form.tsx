'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ConsultationForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Add your form submission logic here
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <div className="inline-block bg-lime-500/20 text-lime-400 text-sm font-semibold px-3 py-1 rounded-full mb-2">
            CONTACT US
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Get Your <span className="text-lime-500">Free Consultation</span>
        </h2>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Take the first step towards optimizing your business with our expert consultation. We'll help you unlock your data's potential.
        </p>

        <div className="bg-[#112240] rounded-xl shadow-2xl shadow-black/20 p-8 md:p-10 max-w-5xl mx-auto border border-white/5">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="relative h-52 mb-8 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
                  alt="Data Analytics Dashboard"
                  fill
                  className="object-cover rounded-lg transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Strategy</h3>
              <p className="text-gray-300 mb-8">
                Our consultation provides you with actionable insights based on comprehensive data analysis and industry expertise. We'll help you identify opportunities and optimize your business processes.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-lime-500/30 transition-all duration-300 hover:bg-white/10 group">
                  <div className="relative h-36 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                      alt="Analytics Dashboard"
                      fill
                      className="object-cover rounded-md group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <p className="text-white text-sm font-medium">In-depth Analysis</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-lime-500/30 transition-all duration-300 hover:bg-white/10 group">
                  <div className="relative h-36 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800"
                      alt="Data Visualization"
                      fill
                      className="object-cover rounded-md group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <p className="text-white text-sm font-medium">Smart Insights</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-4 text-gray-300 text-sm">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert Analysis</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Actionable Insights</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-500/20 rounded-full mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Request Submitted!</h3>
                    <p className="text-gray-300 mb-6">We'll get back to you within 24 hours with your free consultation details.</p>
                    <Button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-lime-500 hover:bg-lime-600 text-black font-medium transition-all duration-300"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold text-white mb-6">Request Your Free Consultation</h3>
                    
                    <div className="space-y-5 mb-6">
                      <div>
                        <label htmlFor="name" className="text-gray-300 text-sm mb-1.5 block">Full Name</label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          required
                          className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50 h-11"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="text-gray-300 text-sm mb-1.5 block">Email Address</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50 h-11"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="text-gray-300 text-sm mb-1.5 block">Phone Number</label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (123) 456-7890"
                          className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50 h-11"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="text-gray-300 text-sm mb-1.5 block">How can we help?</label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or requirements..."
                          className="bg-white/10 border-0 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:ring-1 focus:ring-lime-500/50 min-h-[100px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-lime-500/20 hover:border-lime-500/50 transition-all duration-300 transform hover:scale-105"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Schedule Call
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-lime-500/20 hover:border-lime-500/50 transition-all duration-300 transform hover:scale-105"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        Live Chat
                      </Button>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-lime-500 hover:bg-lime-600 text-black font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-500/30 h-12"
                    >
                      Get Free Consultation
                    </Button>
                    
                    <p className="text-gray-400 text-xs text-center mt-4">
                      By submitting this form, you agree to our <a href="#" className="text-lime-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-lime-400 hover:underline">Terms of Service</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}