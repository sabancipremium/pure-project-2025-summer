import CalculationStepper from './CalculationStepper'

const IntroductionContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header font-gothic">
        An Accelerated Course in Magneto-Mechanics
      </h1>
      
      <div className="space-y-12">
        {/* The Big Picture */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-gothic">
            🌟 The Big Picture: Engineering with &quot;Smart&quot; Materials
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="text-lg font-medium text-blue-800 mb-4">
              &quot;What if your phone&apos;s memory was powered by stretching instead of electricity? 
              What if bridges could report their own stress levels?&quot;
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to the world of <strong>&quot;Smart Materials&quot;</strong> - materials that respond 
            intelligently to external stimuli like magnetic fields and mechanical forces. These 
            materials are revolutionizing Micro-Electro-Mechanical Systems (MEMS), spintronic 
            devices, and high-sensitivity sensors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The frontier of this field lies in coupling different physical properties—specifically, 
            linking a material&apos;s magnetism with its mechanical structure.
          </p>
        </section>

        {/* The Language of Material Properties */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-gothic">
            📐 The Language of Material Properties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Scalar: Temperature (T)
              </h3>
              <p className="text-gray-600 text-sm mb-3">A single value</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <span className="font-mono">25°C</span>
              </div>
            </div>
            
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Vector: Force (F⃗)
              </h3>
              <p className="text-gray-600 text-sm mb-3">A value with direction</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <span className="font-mono">10N → x</span>
              </div>
            </div>
            
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Tensor: Stress (σᵢⱼ)
              </h3>
              <p className="text-gray-600 text-sm mb-3">Properties with two directions</p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <span className="font-mono text-xs">Matrix 3×3</span>
              </div>
            </div>
          </div>
        </section>

        {/* Magnetic Anisotropy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-gothic">
            🧭 Magnetic Anisotropy: A Crystal&apos;s Internal Compass
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Magnetic anisotropy describes how a material has preferred directions for its 
            magnetization - like an internal compass with <strong>easy axes</strong> (low energy) 
            and <strong>hard axes</strong> (high energy).
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-center text-lg font-mono mb-2">
              E<sub>K</sub> = K₁(α₁²α₂² + α₂²α₃² + α₃²α₁²) + ...
            </p>
            <p className="text-center text-gray-600 text-sm">
              Where K₁ is the anisotropy constant we want to control
            </p>
          </div>
        </section>

        {/* Magnetostriction & Villari Effect */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-gothic">
            ⚡ Magnetostriction & Villari Effect: The Two-Way Street
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Magnetostriction</h3>
              <p className="text-green-700 text-sm">
                Applying a magnetic field (B⃗) causes a shape change
              </p>
              <div className="mt-3 text-center">
                <span className="font-mono text-sm">B⃗ → ΔL</span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Villari Effect</h3>
              <p className="text-purple-700 text-sm">
                Applying mechanical stress (σ) changes the magnetic state (M⃗)
              </p>
              <div className="mt-3 text-center">
                <span className="font-mono text-sm">σ → ΔM⃗</span>
              </div>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg mt-4">
            <p className="text-purple-800 font-medium text-center">
              🎯 Our project focuses on exploiting the <strong>Villari Effect</strong> 
              to engineer magnetic response
            </p>
          </div>
        </section>

        {/* Heusler Alloys */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-gothic">
            💎 The Chosen Materials: Heusler Alloys
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Heusler alloys represent a &quot;perfect storm&quot; of properties for our research:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <span className="text-2xl mb-2 block">🔥</span>
              <p className="text-sm font-medium">High magnetic ordering temperatures</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <span className="text-2xl mb-2 block">🔬</span>
              <p className="text-sm font-medium">Highly ordered crystal structures</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <span className="text-2xl mb-2 block">⚛️</span>
              <p className="text-sm font-medium">Strong magneto-electronic coupling</p>
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 font-gothic">
            🎯 Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We perform quantum mechanical simulations to precisely map how applying mechanical 
            strain reorients the magnetic easy axis in Heusler alloys. Our goal is to calculate 
            the <strong>magnetoelastic coupling coefficients</strong> (B₁, B₂), which are the 
            &apos;conversion factors&apos; between mechanical strain and magnetic energy.
          </p>
          <div className="bg-gray-800 p-4 rounded text-center">
            <span className="font-mono text-lg">E<sub>total</sub> = E<sub>K</sub> + E<sub>me</sub></span>
            <p className="text-gray-400 text-sm mt-2">
              Total energy = Magnetic anisotropy + Magnetoelastic coupling
            </p>
          </div>
        </section>

        {/* Interactive Calculation Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
              🧮 Calculation in Action: Interactive Guide
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 font-dm-sans leading-relaxed">
              Ready to see the theory in practice? Walk through our step-by-step calculation process 
              below to understand exactly how we derive the magnetoelastic coupling coefficients 
              from first-principles calculations. This interactive guide breaks down the complex 
              process into simple, understandable steps.
            </p>
          </div>
          <CalculationStepper />
        </section>
      </div>
    </div>
  )
}

export default IntroductionContent
