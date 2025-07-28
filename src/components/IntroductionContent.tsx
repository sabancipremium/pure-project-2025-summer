import CalculationStepper from './CalculationStepper'
import Math from './Math'
import ProgressTracker from './Introduction/ProgressTracker'
import FundamentalEquations from './Introduction/FundamentalEquations'
import MagnetizationProcess from './Introduction/MagnetizationProcess'
import TensorNotation from './Introduction/TensorNotation'
import CrystalSymmetry from './Introduction/CrystalSymmetry'
import InteractiveVisualizer from './Introduction/InteractiveVisualizer'

const IntroductionContent = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header font-gothic text-center">
        An Accelerated Course in Magneto-Mechanics
      </h1>
      
      <div className="space-y-16">
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

        {/* Progress Tracker */}
        <ProgressTracker />

        {/* Fundamental Equations */}
        <FundamentalEquations />

        {/* Magnetization Process */}
        <MagnetizationProcess />

        {/* Tensor Notation */}
        <TensorNotation />

        {/* Crystal Symmetry */}
        <CrystalSymmetry />

        {/* Interactive Visualizer */}
        <InteractiveVisualizer />

        {/* Project Goals */}
        <section className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 font-gothic">
            🎯 Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We perform quantum mechanical simulations using <strong>Density Functional Theory (DFT)</strong> to precisely map how applying mechanical 
            strain reorients the magnetic easy axis in Heusler alloys. Our goal is to calculate 
            the <strong>magnetoelastic coupling coefficients</strong> (B₁, B₂), which quantify the 
            coupling strength between mechanical strain (ε) and magnetic anisotropy energy.
          </p>
          <div className="bg-gray-800 p-4 rounded text-center">
            <Math 
              equation={String.raw`E_{total} = E_K + E_{me}`}
              block={true}
              className="text-white"
            />
            <p className="text-gray-400 text-sm mt-2">
              Total energy = Intrinsic magnetic anisotropy + Strain-induced magnetoelastic coupling
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
