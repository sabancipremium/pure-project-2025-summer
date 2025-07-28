'use client'

import { useState, useEffect } from 'react'
import Math from '../Math'

interface PhaseInfo {
  name: string
  description: string
  icon: string
  color: string
  fieldRange: [number, number]
}

const magnetizationPhases: PhaseInfo[] = [
  {
    name: 'Demagnetized State',
    description: 'Random magnetic domains with zero net magnetization. No applied field.',
    icon: '🔀',
    color: 'gray',
    fieldRange: [0, 0.1]
  },
  {
    name: 'Domain Wall Motion',
    description: 'Low field causes favorable domains to grow by moving domain walls.',
    icon: '🔲',
    color: 'blue',
    fieldRange: [0.1, 0.4]
  },
  {
    name: 'Domain Rotation',
    description: 'Higher field rotates magnetic moments away from easy axes toward field direction.',
    icon: '🔄',
    color: 'purple',
    fieldRange: [0.4, 0.8]
  },
  {
    name: 'Saturation',
    description: 'All magnetic moments aligned with field. Maximum magnetization achieved.',
    icon: '🎯',
    color: 'green',
    fieldRange: [0.8, 1.0]
  }
]

const FieldSlider = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
      🧲 Applied Magnetic Field
    </h3>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Field Strength (H)</span>
        <span className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
          {value.toFixed(2)} H₀
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>0</span>
        <span>H₀</span>
      </div>
    </div>
  </div>
)

const StrainCurve = ({ fieldValue }: { fieldValue: number }) => {
  // Simulate realistic magnetostriction curve
  const calculateStrain = (h: number): number => {
    if (h < 0.1) return 0.1 * h // Linear initial region
    if (h < 0.4) return 0.01 + 0.3 * (h - 0.1) // Domain wall motion
    if (h < 0.8) return 0.1 + 0.6 * (h - 0.4) // Domain rotation (steepest)
    return 0.34 + 0.1 * (h - 0.8) // Saturation approach
  }

  const currentStrain = calculateStrain(fieldValue)
  const maxStrain = calculateStrain(1.0)

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        📊 Magnetostriction Response
      </h3>
      
      {/* Current values */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-3 rounded">
          <div className="text-sm text-blue-600">Current Strain</div>
          <div className="text-lg font-mono text-blue-900">
            {(currentStrain * 1000).toFixed(1)} × 10⁻³
          </div>
        </div>
        <div className="bg-purple-50 p-3 rounded">
          <div className="text-sm text-purple-600">Saturation λₛ</div>
          <div className="text-lg font-mono text-purple-900">
            {(maxStrain * 1000).toFixed(1)} × 10⁻³
          </div>
        </div>
      </div>

      {/* Simplified visual curve */}
      <div className="relative h-32 bg-gray-50 rounded border overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 120">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="30" height="12" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 12" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Curve path */}
          <path
            d="M 10 110 Q 50 100 100 80 Q 150 40 200 30 Q 250 25 290 20"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          
          {/* Current position marker */}
          <circle
            cx={10 + fieldValue * 280}
            cy={110 - currentStrain * 90}
            r="4"
            fill="#dc2626"
            stroke="white"
            strokeWidth="2"
          />
          
          {/* Axes labels */}
          <text x="150" y="115" textAnchor="middle" className="text-xs fill-gray-600">
            Applied Field (H)
          </text>
          <text x="5" y="60" textAnchor="middle" className="text-xs fill-gray-600" transform="rotate(-90 5 60)">
            Strain (ε)
          </text>
        </svg>
      </div>

      {/* Mathematical relationship */}
      <div className="mt-4 bg-gray-50 p-4 rounded border">
        <Math 
          equation={String.raw`\lambda(H) = \lambda_s \left[\frac{3}{2}\left(\cos^2\theta - \frac{1}{3}\right)\right]`}
          block={true}
        />
        <p className="text-xs text-gray-600 mt-2">
          Where θ is the angle between magnetization and measurement direction
        </p>
      </div>
    </div>
  )
}

const DomainAnimation = ({ phase }: { phase: string }) => {
  const [animationFrame, setAnimationFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 4)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const getDomainPattern = () => {
    switch (phase) {
      case 'Demagnetized State':
        return [
          ['↗️', '↙️', '↖️'],
          ['↙️', '↗️', '↘️'],
          ['↖️', '↘️', '↗️']
        ]
      case 'Domain Wall Motion':
        return [
          ['→', '↗️', '↖️'],
          ['→', '→', '↘️'],
          ['→', '↘️', '↗️']
        ]
      case 'Domain Rotation':
        return [
          ['→', '↗️', '→'],
          ['→', '→', '→'],
          ['→', '↘️', '→']
        ]
      case 'Saturation':
        return [
          ['→', '→', '→'],
          ['→', '→', '→'],
          ['→', '→', '→']
        ]
      default:
        return [['→', '→', '→']]
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        🔬 Magnetic Domain Structure
      </h3>
      
      <div className="grid grid-cols-3 gap-1 mb-4 max-w-32 mx-auto">
        {getDomainPattern().map((row, i) =>
          row.map((arrow, j) => (
            <div
              key={`${i}-${j}`}
              className="w-8 h-8 bg-gray-100 border rounded flex items-center justify-center text-lg transition-all duration-500"
              style={{
                transform: animationFrame % 2 === 0 ? 'scale(1)' : 'scale(0.95)',
              }}
            >
              {arrow}
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Current Phase:</div>
        <div className="font-medium text-gray-900">{phase}</div>
      </div>
    </div>
  )
}

const MagnetizationProcess = () => {
  const [fieldStrength, setFieldStrength] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(magnetizationPhases[0])

  useEffect(() => {
    const phase = magnetizationPhases.find(p => 
      fieldStrength >= p.fieldRange[0] && fieldStrength <= p.fieldRange[1]
    ) || magnetizationPhases[0]
    setCurrentPhase(phase)
  }, [fieldStrength])

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
          ⚡ The Physical Process: Journey to Saturation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Understanding magnetostriction requires visualizing what happens inside the material 
          as the magnetic field increases from zero to saturation.
        </p>
      </div>

      {/* Interactive controls and visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FieldSlider value={fieldStrength} onChange={setFieldStrength} />
        <DomainAnimation phase={currentPhase.name} />
        <StrainCurve fieldValue={fieldStrength} />
      </div>

      {/* Current phase description */}
      <div className={`bg-${currentPhase.color}-50 p-6 rounded-lg border border-${currentPhase.color}-200`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{currentPhase.icon}</span>
          <h3 className="font-semibold text-gray-900 font-gothic">
            {currentPhase.name}
          </h3>
        </div>
        <p className="text-gray-700">
          {currentPhase.description}
        </p>
      </div>

      {/* Process overview */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          🎯 Complete Magnetization Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {magnetizationPhases.map((phase, index) => (
            <div
              key={phase.name}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                phase.name === currentPhase.name 
                  ? `bg-${phase.color}-100 border-${phase.color}-300 shadow-md`
                  : 'bg-white border-gray-200 hover:shadow-sm'
              }`}
              onClick={() => setFieldStrength((phase.fieldRange[0] + phase.fieldRange[1]) / 2)}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{phase.icon}</div>
                <div className="font-medium text-sm text-gray-900 mb-2">
                  {phase.name}
                </div>
                <div className="text-xs text-gray-600">
                  H: {phase.fieldRange[0]}-{phase.fieldRange[1]} H₀
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mathematical description */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          📐 Mathematical Description of Saturation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Saturation Magnetization</h4>
            <div className="bg-gray-50 p-4 rounded border mb-3">
              <Math equation={String.raw`M_s = N \mu_B g_J J`} block={true} />
            </div>
            <p className="text-sm text-gray-600">
              Where N is the number density, μ&#x2088; is the Bohr magneton, 
              g_J is the Landé factor, and J is the total angular momentum.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Saturation Magnetostriction</h4>
            <div className="bg-gray-50 p-4 rounded border mb-3">
              <Math equation={String.raw`\lambda_s = \frac{3}{2}\lambda_{100}\left(\alpha_1^2 - \frac{1}{3}\right)`} block={true} />
            </div>
            <p className="text-sm text-gray-600">
              The maximum strain achieved when all magnetic moments are aligned, 
              dependent on crystal orientation and material constants.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MagnetizationProcess
