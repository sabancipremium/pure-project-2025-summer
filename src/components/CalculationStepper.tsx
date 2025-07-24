'use client'

import { useState } from 'react'
import Math from './Math'

// Define the steps of the calculation
const calculationSteps = [
  {
    title: 'The Magnetoelastic Energy Equation',
    explanation: (
      <>
        The foundation of our calculation is the phenomenological model for magnetoelastic energy (E<sub>me</sub>) in a cubic crystal. This equation links the energy to applied strains (ε) and the magnetoelastic coupling coefficients (B₁ and B₂), which we want to find.
      </>
    ),
    content: (
      <div className="bg-gray-800 text-white p-6 rounded-lg">
        <Math 
          equation="E_{me} = B_1 (\varepsilon_{xx}\alpha_1^2 + \varepsilon_{yy}\alpha_2^2 + \varepsilon_{zz}\alpha_3^2) + B_2 (\varepsilon_{xy}\alpha_1\alpha_2 + \varepsilon_{xz}\alpha_1\alpha_3 + \varepsilon_{yz}\alpha_2\alpha_3)"
          block={true}
          className="text-white"
        />
        <div className="text-sm text-gray-300 text-center mt-4">
          <p>where α₁, α₂, α₃ are direction cosines of magnetization</p>
          <p>ε<sub>ij</sub> are strain tensor components</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Step 1: Applying Normal Strain (εₓₓ)',
    explanation: (
      <>
        First, we computationally apply a series of normal strains (εₓₓ) to the crystal lattice while keeping shear strain (εₓᵧ) at zero. For each strain value, we calculate the total magnetic energy using DFT (Density Functional Theory).
      </>
    ),
    content: (
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Strain (εₓₓ)</th>
            <th scope="col" className="px-6 py-3">Calculated Energy (meV/unit cell)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b"><td className="px-6 py-4">-0.01</td><td className="px-6 py-4">1.50</td></tr>
          <tr className="bg-gray-50 border-b"><td className="px-6 py-4">0.00</td><td className="px-6 py-4">0.00</td></tr>
          <tr className="bg-white border-b"><td className="px-6 py-4">+0.01</td><td className="px-6 py-4">-1.50</td></tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Step 2: Calculating B₁',
    explanation: (
      <>
        The magnetoelastic coefficient B₁ is the slope of the Energy vs. Normal Strain graph. By plotting the data from the previous step, we can determine its value. A steeper slope means a stronger coupling.
      </>
    ),
    content: (
      <div className="text-center">
        <div className="text-lg font-semibold mb-2">
          <Math equation="\text{Slope} = \frac{\Delta E}{\Delta \varepsilon_{xx}}" />
        </div>
        <div className="text-2xl font-bold text-indigo-600 mt-2">
          <Math equation="B_1 \approx -150 \text{ meV/unit cell}" />
        </div>
        <p className="text-xs text-gray-500 mt-1">(Calculated from the data points)</p>
      </div>
    ),
  },
  {
    title: 'Step 3: Applying Shear Strain (εₓᵧ)',
    explanation: (
      <>
        Next, we reset the normal strain to zero and apply a series of shear strains (εₓᵧ). Again, we calculate the total magnetic energy for each step.
      </>
    ),
    content: (
       <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Strain (εₓᵧ)</th>
            <th scope="col" className="px-6 py-3">Calculated Energy (meV/unit cell)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b"><td className="px-6 py-4">-0.01</td><td className="px-6 py-4">-0.50</td></tr>
          <tr className="bg-gray-50 border-b"><td className="px-6 py-4">0.00</td><td className="px-6 py-4">0.00</td></tr>
          <tr className="bg-white border-b"><td className="px-6 py-4">+0.01</td><td className="px-6 py-4">0.50</td></tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Step 4: Calculating B₂',
    explanation: (
      <>
        Similarly, B₂ is the slope of the Energy vs. Shear Strain graph. This value tells us how the material&apos;s magnetic energy responds to twisting or shearing forces.
      </>
    ),
    content: (
      <div className="text-center">
        <div className="text-lg font-semibold mb-2">
          <Math equation="\text{Slope} = \frac{\Delta E}{\Delta \varepsilon_{xy}}" />
        </div>
        <div className="text-2xl font-bold text-teal-600 mt-2">
          <Math equation="B_2 \approx 50 \text{ meV/unit cell}" />
        </div>
        <p className="text-xs text-gray-500 mt-1">(Calculated from the data points)</p>
      </div>
    ),
  },
  {
    title: 'Conclusion',
    explanation: (
      <>
        By performing these two sets of calculations, we have successfully determined the key magnetoelastic coupling coefficients. These values are crucial for predicting how the material will behave in real-world applications.
      </>
    ),
    content: (
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-sm text-gray-500">Normal Coupling</div>
          <div className="text-2xl font-bold text-indigo-600">
            <Math equation="B_1 = -150 \text{ meV/unit cell}" />
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Shear Coupling</div>
          <div className="text-2xl font-bold text-teal-600">
            <Math equation="B_2 = 50 \text{ meV/unit cell}" />
          </div>
        </div>
      </div>
    ),
  },
]

const CalculationStepper = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < calculationSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  const step = calculationSteps[currentStep]

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg border p-6 md:p-8">
      {/* Progress Bar */}
      <div className="flex items-center mb-6 gap-2">
        {calculationSteps.map((_, index) => (
          <div key={index} className="flex-1">
            <div
              className={`h-2 rounded-full transition-colors duration-300 ${
                index <= currentStep ? 'bg-indigo-500' : 'bg-gray-200'
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Step Counter */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500 font-dm-sans">
          Step {currentStep + 1} of {calculationSteps.length}
        </span>
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        <div className="transition-all duration-300 ease-in-out">
          <h3 className="text-2xl font-bold text-gray-900 font-gothic mb-4">
            {step.title}
          </h3>
          <p className="text-gray-600 mb-6 font-dm-sans leading-relaxed">
            {step.explanation}
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border">
            {step.content}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors font-dm-sans font-medium"
        >
          ← Previous
        </button>
        
        <div className="flex gap-2">
          {calculationSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentStep ? 'bg-indigo-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {currentStep === calculationSteps.length - 1 ? (
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors font-dm-sans"
          >
            🔄 Start Over
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors font-dm-sans"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}

export default CalculationStepper
