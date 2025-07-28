'use client'

import { useState } from 'react'
import SimpleMath from '../SimpleMath'

interface DerivationStep {
  equation: string
  explanation: string
  transformation: string
}

interface EquationBlockProps {
  title: string
  equation: string
  explanation: string
  className?: string
}

const EquationBlock = ({ title, equation, explanation, className = '' }: EquationBlockProps) => (
  <div className={`bg-white p-6 border border-gray-200 rounded-lg ${className}`}>
    <h3 className="font-semibold text-gray-900 mb-3 font-gothic">
      {title}
    </h3>
    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
      <SimpleMath equation={equation} block={true} />
    </div>
    <p className="text-gray-700 text-sm leading-relaxed">
      {explanation}
    </p>
  </div>
)

const DerivationStepper = ({ steps }: { steps: DerivationStep[] }) => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
      <h3 className="font-semibold text-blue-900 mb-4 font-gothic">
        Mathematical Derivation: From Field to Magnetization
      </h3>
      
      {/* Progress indicators */}
      <div className="flex items-center mb-6 gap-2">
        {steps.map((_, index) => (
          <div key={index} className="flex-1">
            <div
              className={`h-2 rounded-full transition-colors duration-300 ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Current step display */}
      <div className="min-h-[200px]">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="text-sm text-blue-600 font-medium mb-2">
            Step {currentStep + 1} of {steps.length}
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <SimpleMath equation={steps[currentStep].equation} block={true} />
          </div>
          <p className="text-gray-700 text-sm mb-3">
            {steps[currentStep].explanation}
          </p>
          {steps[currentStep].transformation && (
            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              <p className="text-blue-800 text-sm font-medium">
                Transformation: {steps[currentStep].transformation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
        >
          ← Previous
        </button>
        
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentStep ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentStep(currentStep < steps.length - 1 ? currentStep + 1 : steps.length - 1)}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

const FundamentalEquations = () => {
  const fieldToMagnetizationSteps: DerivationStep[] = [
    {
      equation: "\\varepsilon_{ij} = N_{ijkl} M_k M_l",
      explanation: "We start with the fundamental magnetostriction equation relating strain to magnetization components.",
      transformation: "Starting point: strain depends on magnetization"
    },
    {
      equation: "M_i = \\chi_{ij} H_j",
      explanation: "The magnetization is related to the applied field through the magnetic susceptibility tensor χ.",
      transformation: "Linear response relationship"
    },
    {
      equation: "M_k = \\chi H_k \\quad \\text{and} \\quad M_l = \\chi H_l",
      explanation: "For isotropic materials, the susceptibility tensor simplifies to a scalar χ, so each magnetization component is proportional to the corresponding field component.",
      transformation: "Isotropic approximation: χᵢⱼ → χδᵢⱼ"
    },
    {
      equation: "\\varepsilon_{ij} = N_{ijkl} (\\chi H_k)(\\chi H_l)",
      explanation: "Substituting the field-magnetization relationship into the original equation.",
      transformation: "Direct substitution of M_k and M_l"
    },
    {
      equation: "\\varepsilon_{ij} = N_{ijkl} \\chi^2 H_k H_l",
      explanation: "Factoring out the susceptibility terms gives us χ² as a coefficient.",
      transformation: "Factor out χ² from the product"
    },
    {
      equation: "\\varepsilon_{ij} = I_{ijkl} H_k H_l \\quad \\text{where} \\quad I_{ijkl} = N_{ijkl} \\chi^2",
      explanation: "This defines the relationship between the two magnetostriction tensors: the field-based tensor I is related to the magnetization-based tensor N by χ².",
      transformation: "Definition of field-based magnetostriction tensor"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
          🧮 Fundamental Equations of Magnetostriction
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The mathematical foundation of magnetostriction lies in understanding how magnetic fields 
          and magnetization couple to mechanical strain through tensor relationships.
        </p>
      </div>

      {/* Core equation blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EquationBlock
          title="Strain-Field Relationship"
          equation={String.raw`\varepsilon_{ij} = I_{ijkl} H_k H_l`}
          explanation="Direct coupling between applied magnetic field H and resulting strain ε. The fourth-rank tensor I contains the material-specific magnetostriction coefficients."
          className="border-blue-200 bg-blue-50"
        />
        
        <EquationBlock
          title="Strain-Magnetization Relationship"
          equation={String.raw`\varepsilon_{ij} = N_{ijkl} M_k M_l`}
          explanation="Alternative formulation using internal magnetization M instead of external field. The tensor N relates strain to the material's magnetic response."
          className="border-purple-200 bg-purple-50"
        />
      </div>

      {/* Susceptibility relationship */}
      <EquationBlock
        title="Magnetic Susceptibility"
        equation={String.raw`M_i = \chi_{ij} H_j`}
        explanation="The link between external field and internal magnetization. For isotropic materials, χᵢⱼ becomes a scalar χ, simplifying the mathematics significantly."
        className="border-green-200 bg-green-50"
      />

      {/* Key insight */}
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3 font-gothic">
          🔗 The Connection Between Tensors
        </h3>
        <div className="bg-white p-4 rounded-lg border mb-4">
          <SimpleMath equation={String.raw`I_{ijkl} = N_{ijkl} \chi^2`} block={true} />
        </div>
        <p className="text-amber-800 text-sm">
          This fundamental relationship shows that the two magnetostriction tensors are not independent. 
          The field-based tensor I is simply the magnetization-based tensor N scaled by χ², 
          connecting the macroscopic (field) and microscopic (magnetization) descriptions.
        </p>
      </div>

      {/* Interactive derivation */}
      <DerivationStepper steps={fieldToMagnetizationSteps} />

      {/* Physical interpretation */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          🎯 Physical Interpretation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border">
            <div className="text-2xl mb-2">🧲</div>
            <h4 className="font-medium text-gray-900 mb-2">External Field (H)</h4>
            <p className="text-gray-600 text-sm">
              What you control - the applied magnetic field that drives the process
            </p>
          </div>
          <div className="bg-white p-4 rounded border">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-medium text-gray-900 mb-2">Magnetization (M)</h4>
            <p className="text-gray-600 text-sm">
              Material&apos;s response - internal magnetic alignment induced by the field
            </p>
          </div>
          <div className="bg-white p-4 rounded border">
            <div className="text-2xl mb-2">📏</div>
            <h4 className="font-medium text-gray-900 mb-2">Strain (ε)</h4>
            <p className="text-gray-600 text-sm">
              Observable effect - physical deformation you can measure
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundamentalEquations
