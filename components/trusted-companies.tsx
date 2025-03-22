import Image from "next/image"

export default function TrustedCompanies() {
  // Company logo data with real company logos
  const companies = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: 2,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: 5,
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      id: 6,
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-lime-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Trusted By 3,000+ Companies</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Industry leaders across the globe rely on our expertise to drive innovation and growth
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.id}
              className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 cursor-pointer w-32 md:w-36 h-16 flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity duration-500 object-contain max-h-12"
              />
            </div>
          ))}
        </div>
        
        {/* Subtle animated gradient line */}
        <div className="max-w-5xl mx-auto mt-16 relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}