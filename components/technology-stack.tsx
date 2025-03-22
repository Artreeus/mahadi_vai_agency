const technologies = {
  uiuxDesign: [
    { name: "Figma", icon: "🎨" },
    { name: "Sketch", icon: "🖌️" },
    { name: "Adobe XD", icon: "🎭" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "Illustrator", icon: "🎨" },
  ],
  aiDevelopment: [
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "⚙️" },
    { name: "OpenAI", icon: "🤖" },
  ],
  mobileAppDevelopment: [
    { name: "Flutter", icon: "📱" },
    { name: "React Native", icon: "⚛️" },
    { name: "Swift", icon: "🍎" },
    { name: "Kotlin", icon: "🤖" },
  ],
  webDevelopment: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Vue.js", icon: "🟩" },
    { name: "Next.js", icon: "⬛" },
    { name: "PHP", icon: "🐘" },
  ],
  qualityAssurance: [
    { name: "Selenium", icon: "🧪" },
    { name: "Postman", icon: "📬" },
  ],
}

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-500 mb-2">Technology Stack</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          We leverage the latest technologies to create exceptional solutions that drive your business forward.
        </p>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">UI/UX DESIGN</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {technologies.uiuxDesign.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:shadow-lime-500/20 transform hover:-translate-y-1"
              >
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:bg-lime-500/20 transition-colors">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <div className="text-xs text-gray-300 group-hover:text-lime-500 transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">AI Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {technologies.aiDevelopment.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:shadow-lime-500/20 transform hover:-translate-y-1"
              >
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:bg-lime-500/20 transition-colors">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <div className="text-xs text-gray-300 group-hover:text-lime-500 transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Mobile App Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {technologies.mobileAppDevelopment.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:shadow-lime-500/20 transform hover:-translate-y-1"
              >
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:bg-lime-500/20 transition-colors">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <div className="text-xs text-gray-300 group-hover:text-lime-500 transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Web Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {technologies.webDevelopment.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:shadow-lime-500/20 transform hover:-translate-y-1"
              >
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:bg-lime-500/20 transition-colors">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <div className="text-xs text-gray-300 group-hover:text-lime-500 transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quality Assurance Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
            {technologies.qualityAssurance.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:shadow-lime-500/20 transform hover:-translate-y-1"
              >
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:bg-lime-500/20 transition-colors">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <div className="text-xs text-gray-300 group-hover:text-lime-500 transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

