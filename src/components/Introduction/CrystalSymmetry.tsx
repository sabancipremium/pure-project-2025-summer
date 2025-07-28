'use client'

import { useState } from 'react'
import SimpleMath from '../SimpleMath'

interface CrystalSystem {
  name: string
  pointGroups: string[]
  independentConstants: number
  matrix: string[][]
  description: string
  examples: string[]
  symmetryOperations: string[]
}

const crystalSystems: CrystalSystem[] = [
  {
    name: 'Cubic',
    pointGroups: ['m3m', '432', '-43m'],
    independentConstants: 3,
    matrix: [
      ['N₁₁', 'N₁₂', 'N₁₂', '0', '0', '0'],
      ['N₁₂', 'N₁₁', 'N₁₂', '0', '0', '0'],
      ['N₁₂', 'N₁₂', 'N₁₁', '0', '0', '0'],
      ['0', '0', '0', 'N₄₄', '0', '0'],
      ['0', '0', '0', '0', 'N₄₄', '0'],
      ['0', '0', '0', '0', '0', 'N₄₄']
    ],
    description: 'Highest symmetry system with three independent constants. All cubic directions are equivalent.',
    examples: ['Iron (Fe)', 'Nickel (Ni)', 'Terfenol-D', 'Galfenol'],
    symmetryOperations: ['4-fold rotation', '3-fold rotation', 'mirror planes', 'inversion center']
  },
  {
    name: 'Hexagonal',
    pointGroups: ['6/mmm', '622', '6mm', '-62m'],
    independentConstants: 4,
    matrix: [
      ['N₁₁', 'N₁₂', 'N₁₃', '0', '0', '0'],
      ['N₁₂', 'N₁₁', 'N₁₃', '0', '0', '0'],
      ['N₃₁', 'N₃₁', 'N₃₃', '0', '0', '0'],
      ['0', '0', '0', 'N₄₄', '0', '0'],
      ['0', '0', '0', '0', 'N₄₄', '0'],
      ['0', '0', '0', '0', '0', 'N₆₆']
    ],
    description: 'Six-fold rotational symmetry along c-axis. Note: N₆₆ = N₁₁ - N₁₂',
    examples: ['Zinc (Zn)', 'Cobalt (Co)', 'Rare earth metals'],
    symmetryOperations: ['6-fold rotation', 'mirror planes', 'inversion center']
  },
  {
    name: 'Orthorhombic',
    pointGroups: ['mmm', '222', 'mm2'],
    independentConstants: 9,
    matrix: [
      ['N₁₁', 'N₁₂', 'N₁₃', '0', '0', '0'],
      ['N₂₁', 'N₂₂', 'N₂₃', '0', '0', '0'],
      ['N₃₁', 'N₃₂', 'N₃₃', '0', '0', '0'],
      ['0', '0', '0', 'N₄₄', '0', '0'],
      ['0', '0', '0', '0', 'N₅₅', '0'],
      ['0', '0', '0', '0', '0', 'N₆₆']
    ],
    description: 'Three perpendicular 2-fold axes. Each crystallographic direction has different properties.',
    examples: ['Many rare earth compounds', 'Some ferrites'],
    symmetryOperations: ['Three 2-fold rotations', 'mirror planes', 'inversion center']
  }
]

const CrystalSelector = ({ selectedCrystal, onChange }: { 
  selectedCrystal: string; 
  onChange: (crystal: string) => void 
}) => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
      🔮 Select Crystal System
    </h3>
    <div className="grid grid-cols-1 gap-3">
      {crystalSystems.map((crystal) => (
        <button
          key={crystal.name}
          onClick={() => onChange(crystal.name)}
          className={`p-4 rounded-lg border text-left transition-all duration-200 ${
            selectedCrystal === crystal.name
              ? 'bg-blue-50 border-blue-300 shadow-md'
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-sm'
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium text-gray-900">{crystal.name}</div>
              <div className="text-sm text-gray-600">
                {crystal.independentConstants} independent constants
              </div>
            </div>
            <div className="text-sm text-blue-600 font-mono">
              {crystal.pointGroups.join(', ')}
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>
)

const MagnetostrictionMatrix = ({ crystalType }: { crystalType: string }) => {
  const crystal = crystalSystems.find(c => c.name === crystalType) || crystalSystems[0]

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        📊 Magnetostriction Matrix: {crystal.name}
      </h3>
      
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-50"></th>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <th key={i} className="border border-gray-300 p-2 bg-gray-50 font-mono">
                  {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {crystal.matrix.map((row, i) => (
              <tr key={i}>
                <td className="border border-gray-300 p-2 bg-gray-50 font-mono font-bold">
                  {i + 1}
                </td>
                {row.map((cell, j) => (
                  <td 
                    key={j} 
                    className={`border border-gray-300 p-2 text-center font-mono ${
                      cell === '0' ? 'text-gray-400' : 'text-blue-600 font-semibold'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded border">
          <h4 className="font-medium text-blue-900 mb-2">Point Groups</h4>
          <div className="text-sm text-blue-800 font-mono">
            {crystal.pointGroups.join(', ')}
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded border">
          <h4 className="font-medium text-green-900 mb-2">Independent Constants</h4>
          <div className="text-sm text-green-800 font-bold">
            {crystal.independentConstants} out of 36 total
          </div>
        </div>
      </div>
    </div>
  )
}

const SymmetryExplanation = ({ crystalType }: { crystalType: string }) => {
  const crystal = crystalSystems.find(c => c.name === crystalType) || crystalSystems[0]

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        🔍 Symmetry Analysis: {crystal.name}
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Description</h4>
          <p className="text-gray-700 text-sm">
            {crystal.description}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Symmetry Operations</h4>
          <div className="grid grid-cols-2 gap-2">
            {crystal.symmetryOperations.map((op, index) => (
              <div key={index} className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                • {op}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Material Examples</h4>
          <div className="flex flex-wrap gap-2">
            {crystal.examples.map((example, index) => (
              <span 
                key={index}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const DirectionCosines = () => (
  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
    <h3 className="font-semibold text-amber-900 mb-4 font-gothic">
      🧭 Direction Cosines and Crystal Orientation
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium text-amber-900 mb-3">Mathematical Definition</h4>
        <div className="bg-white p-4 rounded border space-y-3">
          <SimpleMath equation={String.raw`\alpha_1 = \cos(\theta_x)`} block={true} />
          <SimpleMath equation={String.raw`\alpha_2 = \cos(\theta_y)`} block={true} />
          <SimpleMath equation={String.raw`\alpha_3 = \cos(\theta_z)`} block={true} />
        </div>
        <div className="mt-3 bg-white p-3 rounded border">
          <SimpleMath equation={String.raw`\alpha_1^2 + \alpha_2^2 + \alpha_3^2 = 1`} block={true} />
        </div>
      </div>

      <div>
        <h4 className="font-medium text-amber-900 mb-3">Physical Meaning</h4>
        <div className="space-y-3 text-sm text-amber-800">
          <div className="bg-white p-3 rounded border">
            <strong>α₁:</strong> Projection of magnetization along x-axis
          </div>
          <div className="bg-white p-3 rounded border">
            <strong>α₂:</strong> Projection of magnetization along y-axis
          </div>
          <div className="bg-white p-3 rounded border">
            <strong>α₃:</strong> Projection of magnetization along z-axis
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 bg-white p-4 rounded border">
      <h4 className="font-medium text-gray-900 mb-3">Simplified Cubic Crystal Strain</h4>
      <div className="bg-gray-50 p-4 rounded">
        <SimpleMath equation={String.raw`\varepsilon_1 = h_0 + h_1 \alpha_1^2`} block={true} />
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Where h₀ = Ms²N₁₂ and h₁ = Ms²(N₁₁ - N₁₂)
      </p>
    </div>
  </div>
)

const CrystalSymmetry = () => {
  const [selectedCrystal, setSelectedCrystal] = useState('Cubic')

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
          💎 Crystal Symmetry and Magnetostriction
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Crystal symmetry dramatically simplifies magnetostriction tensors. Higher symmetry 
          means fewer independent constants and more predictable material behavior.
        </p>
      </div>

      {/* Introduction to symmetry */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-3 font-gothic">
          🎯 The Power of Crystal Symmetry
        </h3>
        <p className="text-blue-800 mb-4">
          From 36 potential magnetostriction tensor components, crystal symmetry reduces the number 
          of independent constants dramatically:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border text-center">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Cubic Systems</div>
          </div>
          <div className="bg-white p-4 rounded border text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Hexagonal Systems</div>
          </div>
          <div className="bg-white p-4 rounded border text-center">
            <div className="text-2xl font-bold text-purple-600">9</div>
            <div className="text-sm text-gray-600">Orthorhombic Systems</div>
          </div>
        </div>
      </div>

      {/* Interactive crystal explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CrystalSelector selectedCrystal={selectedCrystal} onChange={setSelectedCrystal} />
        <div className="lg:col-span-2">
          <MagnetostrictionMatrix crystalType={selectedCrystal} />
        </div>
      </div>

      {/* Detailed symmetry explanation */}
      <SymmetryExplanation crystalType={selectedCrystal} />

      {/* Direction cosines section */}
      <DirectionCosines />

      {/* Practical implications */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          🔬 Practical Implications for Material Design
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">High Symmetry (Cubic)</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Fewer constants to measure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Isotropic response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Easier modeling and prediction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">✗</span>
                <span>Limited directional control</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Low Symmetry (Orthorhombic)</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Directional anisotropy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Tunable response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">✗</span>
                <span>More complex characterization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">✗</span>
                <span>Orientation-dependent properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrystalSymmetry
