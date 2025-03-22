import Image from "next/image"

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-lime-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted By 3,000+ Companies</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 cursor-pointer"
            >
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt={`Company ${item}`}
                width={120}
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

