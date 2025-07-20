const ProjectOverview = () => {
  const features = [
    {
      title: "Magnetoelastic Coupling",
      description: "Understanding how mechanical strain influences magnetic properties in Heusler alloys",
      icon: "🧲"
    },
    {
      title: "DFT Calculations", 
      description: "First-principles quantum mechanical simulations using density functional theory",
      icon: "⚛️"
    },
    {
      title: "Strain Engineering",
      description: "Applying controlled mechanical strain to tune magnetic anisotropy",
      icon: "🔧"
    },
    {
      title: "Interactive Visualization",
      description: "3D simulations showing real-time magnetic response to applied strain",
      icon: "📊"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This project explores the fascinating world of magnetostriction in Heusler alloys, 
            investigating how mechanical forces can control magnetic behavior at the atomic level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow interactive-element"
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Research Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Calculate Coefficients</h4>
              <p className="text-gray-600 text-sm">
                Determine magnetoelastic coupling coefficients B₁ and B₂
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Map Mechanisms</h4>
              <p className="text-gray-600 text-sm">
                Understand underlying physics of strain-induced magnetic changes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enable Applications</h4>
              <p className="text-gray-600 text-sm">
                Guide design of next-generation spintronic devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectOverview
