const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Strain Engineering Magnetism in Heusler Alloys
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Exploring magnetostriction and strain-dependent anisotropy using 
          computational methods and density functional theory
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Research
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Interactive Simulation
          </button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-white opacity-5 rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero
