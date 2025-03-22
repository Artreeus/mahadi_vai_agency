'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function HeroCarousel() {
  // For client-side hydration issues
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Carousel slide data
  const slides = [
    {
      id: 1,
      badge: "#1 AWARD-WINNING AGENCY WITH 10+ YEARS",
      title: "From Sparks To Spectacular",
      description: "Leading tech solutions provider with cutting-edge expertise in software development, AI integration, and innovative digital solutions. Elevate your business with our specialized software solutions.",
      buttonText: "Get Started",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      badge: "INNOVATIVE TECH SOLUTIONS",
      title: "Transform Your Digital Presence",
      description: "We build cutting-edge web applications and mobile experiences that engage your customers and drive business growth. Our expert team delivers solutions that stand out in today's competitive landscape.",
      buttonText: "Our Services",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      badge: "AI & DATA-DRIVEN EXPERTISE",
      title: "Unlock Your Data Potential",
      description: "Harness the power of AI and data analytics to make informed decisions. Our data scientists and AI experts create custom solutions that turn your data into actionable insights and competitive advantages.",
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <section className="relative bg-[#0a192f] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade" 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return `<span class="${className} w-3 h-3 bg-white/50 mx-1 rounded-full transition-all duration-300 hover:bg-lime-500 opacity-70 hover:opacity-100"></span>`;
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={1000}
        slidesPerView={1}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="pt-20 pb-32">
            {/* Individual Slide */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/85 to-[#0a192f]/50 z-10"></div>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className="object-cover"
              />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row items-center h-full">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <div className="inline-block bg-lime-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {slide.badge}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    {slide.title.split(' ').map((word, i, arr) => 
                      i === arr.length - 1 ? 
                        <span key={i} className="text-lime-500">{word} </span> : 
                        <span key={i}>{word} </span>
                    )}
                  </h1>
                  <p className="text-gray-300 mb-8 max-w-lg text-base md:text-lg">
                    {slide.description}
                  </p>
                  <div className="flex space-x-4">
                    <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-full px-6 py-6 h-auto transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                      {slide.buttonText}
                    </Button>
                    <Button variant="outline" className=" text-black  rounded-full   h-auto transition-all duration-300">
                      Watch Demo
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-lime-500/30 shadow-2xl shadow-lime-500/10 transform transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a192f]/30 z-10 rounded-full"></div>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover scale-125 animate-slow-zoom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom navigation and pagination */}
        <div className="container mx-auto px-4 relative">
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <div className="swiper-pagination flex justify-center space-x-2"></div>
          </div>
          
          {/* <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-lime-500 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:text-black" aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button className=" swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-lime-500 hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:text-black" aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button> */}
        </div>
      </Swiper>
      
      {/* CSS for animations */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #84cc16 !important;
          opacity: 1 !important;
          transform: scale(1.3);
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          display: none;
        }
        
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 15s alternate infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}