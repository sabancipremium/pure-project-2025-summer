'use client'

import { useState, useEffect } from 'react'

interface VisualizationControls {
  magneticField: number
  temperature: number
  showDomains: boolean
  showStrain: boolean
  animationSpeed: number
}

interface DomainVisualization {
  domains: Array<{
    id: number
    orientation: number
    size: number
    color: string
  }>
  overallMagnetization: { x: number; y: number }
  strainValue: number
}

// Simple deterministic pseudo-random function
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const FieldControls = ({ controls, onChange }: {
  controls: VisualizationControls
  onChange: (controls: VisualizationControls) => void
}) => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
      🎛️ Visualization Controls
    </h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Magnetic Field (mT): {controls.magneticField}
        </label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={controls.magneticField}
          onChange={(e) => onChange({
            ...controls,
            magneticField: parseInt(e.target.value)
          })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0 mT</span>
          <span>500 mT</span>
          <span>1000 mT</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Temperature (K): {controls.temperature}
        </label>
        <input
          type="range"
          min="77"
          max="600"
          step="10"
          value={controls.temperature}
          onChange={(e) => onChange({
            ...controls,
            temperature: parseInt(e.target.value)
          })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>77 K</span>
          <span>300 K</span>
          <span>600 K</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Animation Speed: {controls.animationSpeed}x
        </label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={controls.animationSpeed}
          onChange={(e) => onChange({
            ...controls,
            animationSpeed: parseFloat(e.target.value)
          })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="flex gap-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={controls.showDomains}
            onChange={(e) => onChange({
              ...controls,
              showDomains: e.target.checked
            })}
            className="mr-2"
          />
          <span className="text-sm text-gray-700">Show Domains</span>
        </label>
        
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={controls.showStrain}
            onChange={(e) => onChange({
              ...controls,
              showStrain: e.target.checked
            })}
            className="mr-2"
          />
          <span className="text-sm text-gray-700">Show Strain</span>
        </label>
      </div>
    </div>
  </div>
)

const InteractiveDomains = ({ controls }: { controls: VisualizationControls }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Generate domain visualization based on controls
  const fieldStrength = controls.magneticField / 1000 // Normalize to 0-1
  const tempFactor = (controls.temperature - 77) / (600 - 77) // Normalize temperature
  
  // Calculate domain properties
  const numDomains = Math.max(4, Math.floor(16 - fieldStrength * 12))
  const alignment = fieldStrength * 0.9 + 0.1
  
  const domains = Array.from({ length: numDomains }, (_, i) => {
    const baseAngle = (Math.PI * 2 * i) / numDomains
    const fieldInfluence = fieldStrength * Math.PI * 0.5
    // Use deterministic pseudo-random based on index and field strength
    const seed = i + fieldStrength * 100 + controls.temperature * 0.01
    const thermalNoise = (1 - alignment) * (seededRandom(seed) - 0.5) * Math.PI * 0.5
    
    return {
      id: i,
      orientation: baseAngle + fieldInfluence + thermalNoise,
      size: 20 + seededRandom(seed + 1) * 10,
      color: `hsl(${200 + i * 15}, 70%, ${60 + fieldStrength * 20}%)`
    }
  })

  const strainValue = fieldStrength * fieldStrength * 1000 // Quadratic strain response

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          🧲 Magnetic Domain Visualization
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Domain Structure</h4>
            <div className="w-full h-[300px] bg-gray-100 rounded border flex items-center justify-center">
              <span className="text-gray-500">Loading...</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Material Strain</h4>
            <div className="w-full h-[300px] bg-gray-100 rounded border flex items-center justify-center">
              <span className="text-gray-500">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        🧲 Magnetic Domain Visualization
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Domain visualization */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Domain Structure</h4>
          <svg width="100%" height="300" viewBox="0 0 300 300" className="border rounded">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="#374151"
                />
              </marker>
            </defs>
            
            {/* Domain boundaries */}
            <rect width="300" height="300" fill="none" stroke="#d1d5db" strokeWidth="2" />
            
            {/* Individual domains */}
            {controls.showDomains && domains.map((domain, index) => {
              const centerX = 50 + (index % 4) * 60
              const centerY = 50 + Math.floor(index / 4) * 60
              const arrowLength = domain.size
              const endX = centerX + Math.cos(domain.orientation) * arrowLength
              const endY = centerY + Math.sin(domain.orientation) * arrowLength
              
              return (
                <g key={domain.id}>
                  {/* Domain region */}
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={25}
                    fill={domain.color}
                    fillOpacity={0.3}
                    stroke={domain.color}
                    strokeWidth={1}
                  />
                  
                  {/* Magnetization arrow */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={endX}
                    y2={endY}
                    stroke="#374151"
                    strokeWidth={3}
                    markerEnd="url(#arrowhead)"
                  />
                </g>
              )
            })}
            
            {/* Applied field arrow */}
            <g>
              <text x="10" y="25" fontSize="12" fill="#dc2626" fontWeight="bold">
                H = {controls.magneticField} mT
              </text>
              <line
                x1="10"
                y1="35"
                x2={10 + fieldStrength * 80}
                y2="35"
                stroke="#dc2626"
                strokeWidth={4}
                markerEnd="url(#arrowhead)"
              />
            </g>
          </svg>
        </div>

        {/* Strain visualization */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Material Strain</h4>
          <svg width="100%" height="300" viewBox="0 0 300 300" className="border rounded">
            {controls.showStrain && (
              <>
                {/* Original shape */}
                <rect
                  x="50"
                  y="100"
                  width="100"
                  height="100"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                
                {/* Strained shape */}
                <rect
                  x="50"
                  y={100 - strainValue * 0.05}
                  width={100 + strainValue * 0.1}
                  height={100 + strainValue * 0.1}
                  fill="rgba(59, 130, 246, 0.2)"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />
                
                {/* Strain value display */}
                <text x="180" y="120" fontSize="14" fill="#374151">
                  ε = {strainValue.toFixed(0)} × 10⁻⁶
                </text>
                
                {/* Dimension arrows */}
                <g stroke="#ef4444" strokeWidth="2">
                  <line x1="45" y1="90" x2="45" y2="210" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
                  <line x1="40" y1="220" x2="160" y2="220" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
                </g>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Real-time measurements */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h5 className="font-medium text-blue-900 mb-2">Magnetization</h5>
          <div className="text-2xl font-bold text-blue-600">
            {(alignment * 100).toFixed(1)}%
          </div>
          <div className="text-sm text-blue-700">of saturation</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h5 className="font-medium text-green-900 mb-2">Strain</h5>
          <div className="text-2xl font-bold text-green-600">
            {strainValue.toFixed(0)}
          </div>
          <div className="text-sm text-green-700">× 10⁻⁶</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h5 className="font-medium text-purple-900 mb-2">Domain Count</h5>
          <div className="text-2xl font-bold text-purple-600">
            {numDomains}
          </div>
          <div className="text-sm text-purple-700">visible domains</div>
        </div>
      </div>
    </div>
  )
}

const HysteresisLoop = ({ controls }: { controls: VisualizationControls }) => {
  // Generate hysteresis data based on current field
  const generateHysteresisData = () => {
    const points = []
    for (let h = -1000; h <= 1000; h += 50) {
      const hNorm = h / 1000
      const tempFactor = 1 - (controls.temperature - 300) / 300 * 0.3
      
      // Simplified Langevin-like function with hysteresis
      let m
      if (Math.abs(hNorm) < 0.1) {
        m = hNorm * 3 // Linear region
      } else {
        m = Math.sign(hNorm) * (1 - Math.exp(-Math.abs(hNorm) * 2)) * 0.9
      }
      
      m *= tempFactor
      const strain = m * m * 1000 * tempFactor
      
      points.push({ field: h, magnetization: m, strain })
    }
    return points
  }

  const hysteresisData = generateHysteresisData()
  const currentPoint = hysteresisData.find(p => 
    Math.abs(p.field - controls.magneticField) < 25
  ) || hysteresisData[0]

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        📈 Magnetization and Strain Curves
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Magnetization loop */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">M-H Loop</h4>
          <svg width="100%" height="250" viewBox="0 0 400 250" className="border rounded bg-gray-50">
            {/* Axes */}
            <line x1="50" y1="200" x2="350" y2="200" stroke="#374151" strokeWidth="2" />
            <line x1="200" y1="30" x2="200" y2="220" stroke="#374151" strokeWidth="2" />
            
            {/* Axis labels */}
            <text x="360" y="205" fontSize="12" fill="#374151">H</text>
            <text x="205" y="25" fontSize="12" fill="#374151">M</text>
            
            {/* Hysteresis curve */}
            <path
              d={`M ${hysteresisData.map(p => 
                `${200 + p.field * 0.15},${200 - p.magnetization * 80}`
              ).join(' L ')}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            
            {/* Current point */}
            <circle
              cx={200 + currentPoint.field * 0.15}
              cy={200 - currentPoint.magnetization * 80}
              r="6"
              fill="#dc2626"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Strain curve */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Strain vs Field</h4>
          <svg width="100%" height="250" viewBox="0 0 400 250" className="border rounded bg-gray-50">
            {/* Axes */}
            <line x1="50" y1="200" x2="350" y2="200" stroke="#374151" strokeWidth="2" />
            <line x1="50" y1="30" x2="50" y2="220" stroke="#374151" strokeWidth="2" />
            
            {/* Axis labels */}
            <text x="360" y="205" fontSize="12" fill="#374151">H</text>
            <text x="30" y="25" fontSize="12" fill="#374151">ε</text>
            
            {/* Strain curve */}
            <path
              d={`M ${hysteresisData.map(p => 
                `${50 + (p.field + 1000) * 0.15},${200 - p.strain * 0.15}`
              ).join(' L ')}`}
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
            />
            
            {/* Current point */}
            <circle
              cx={50 + (currentPoint.field + 1000) * 0.15}
              cy={200 - currentPoint.strain * 0.15}
              r="6"
              fill="#dc2626"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

const InteractiveVisualizer = () => {
  const [controls, setControls] = useState<VisualizationControls>({
    magneticField: 0,
    temperature: 300,
    showDomains: true,
    showStrain: true,
    animationSpeed: 1.0
  })

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
          🎮 Interactive Magnetostriction Simulator
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore how magnetic fields and temperature affect domain structure and material strain. 
          Adjust the controls and watch the real-time response.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-3 font-gothic">
          🔬 What You&apos;re Observing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
          <div className="bg-white p-3 rounded border">
            <strong>Domain Rotation:</strong> Magnetic domains align with applied field, 
            changing from random orientations to parallel alignment.
          </div>
          <div className="bg-white p-3 rounded border">
            <strong>Strain Generation:</strong> Domain alignment causes crystal lattice 
            distortion, creating measurable dimensional changes.
          </div>
          <div className="bg-white p-3 rounded border">
            <strong>Temperature Effects:</strong> Higher temperatures increase thermal 
            energy, reducing domain alignment efficiency.
          </div>
        </div>
      </div>

      {/* Main visualization interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FieldControls controls={controls} onChange={setControls} />
        <div className="lg:col-span-2">
          <InteractiveDomains controls={controls} />
        </div>
      </div>

      {/* Hysteresis visualization */}
      <HysteresisLoop controls={controls} />

      {/* Learning objectives */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          🎯 Learning Objectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Try These Experiments:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">1.</span>
                <span>Start with zero field and gradually increase. Notice how domains align and strain develops.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">2.</span>
                <span>Compare the response at room temperature (300K) vs. liquid nitrogen (77K).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">3.</span>
                <span>Observe the quadratic relationship between magnetization and strain.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">4.</span>
                <span>Toggle domain visibility to focus on macroscopic strain behavior.</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Key Observations:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-green-500">📊</span>
                <span>Strain scales with H² at low fields (λ ∝ M²)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🌡️</span>
                <span>Higher temperature reduces saturation values</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🧲</span>
                <span>Domain walls disappear at high fields</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">⚡</span>
                <span>Hysteresis creates different loading/unloading paths</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveVisualizer
