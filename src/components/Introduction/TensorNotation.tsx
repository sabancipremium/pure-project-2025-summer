'use client'

import { useState } from 'react'
import SimpleMath from '../SimpleMath'

interface IndexMapping {
  tensorIndices: string
  matrixIndex: number
  description: string
}

const indexMappings: IndexMapping[] = [
  { tensorIndices: '11', matrixIndex: 1, description: 'Normal strain/stress along x-axis' },
  { tensorIndices: '22', matrixIndex: 2, description: 'Normal strain/stress along y-axis' },
  { tensorIndices: '33', matrixIndex: 3, description: 'Normal strain/stress along z-axis' },
  { tensorIndices: '23 or 32', matrixIndex: 4, description: 'Shear strain/stress in yz-plane' },
  { tensorIndices: '13 or 31', matrixIndex: 5, description: 'Shear strain/stress in xz-plane' },
  { tensorIndices: '12 or 21', matrixIndex: 6, description: 'Shear strain/stress in xy-plane' }
]

const IndexMappingTable = ({ onSelect }: { onSelect: (index: number | null) => void }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    const newSelection = selectedIndex === index ? null : index
    setSelectedIndex(newSelection)
    onSelect(newSelection)
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        🗂️ Voigt Notation Index Mapping
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 font-semibold text-gray-900">Tensor Indices (ij)</th>
              <th className="text-center py-3 font-semibold text-gray-900">Matrix Index (m)</th>
              <th className="text-left py-3 font-semibold text-gray-900">Physical Meaning</th>
            </tr>
          </thead>
          <tbody>
            {indexMappings.map((mapping, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                  selectedIndex === mapping.matrixIndex ? 'bg-blue-50 border-blue-200' : ''
                }`}
                onClick={() => handleSelect(mapping.matrixIndex)}
              >
                <td className="py-3 font-mono text-blue-600">
                  {mapping.tensorIndices}
                </td>
                <td className="text-center py-3 font-mono text-purple-600 font-bold">
                  {mapping.matrixIndex}
                </td>
                <td className="py-3 text-gray-700">
                  {mapping.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        💡 Click on any row to see the transformation example
      </p>
    </div>
  )
}

const LiveConversion = ({ selectedIndex }: { selectedIndex: number | null }) => {
  const getExampleEquation = (index: number | null) => {
    if (!index) return null
    
    const examples = {
      1: {
        tensor: String.raw`\varepsilon_{11} = N_{1111} M_1^2 + N_{1122} M_2^2 + N_{1133} M_3^2 + 2N_{1123} M_2 M_3 + 2N_{1113} M_1 M_3 + 2N_{1112} M_1 M_2`,
        matrix: String.raw`\varepsilon_1 = N_{11} (M^2)_1 + N_{12} (M^2)_2 + N_{13} (M^2)_3 + N_{14} (M^2)_4 + N_{15} (M^2)_5 + N_{16} (M^2)_6`,
        explanation: "Normal strain along x-axis depends on all magnetization components"
      },
      4: {
        tensor: String.raw`\varepsilon_{23} = N_{2311} M_1^2 + N_{2322} M_2^2 + N_{2333} M_3^2 + 2N_{2323} M_2 M_3 + 2N_{2313} M_1 M_3 + 2N_{2312} M_1 M_2`,
        matrix: String.raw`\varepsilon_4 = N_{41} (M^2)_1 + N_{42} (M^2)_2 + N_{43} (M^2)_3 + N_{44} (M^2)_4 + N_{45} (M^2)_5 + N_{46} (M^2)_6`,
        explanation: "Shear strain in yz-plane - note the factor of 2 in cross terms"
      },
      6: {
        tensor: String.raw`\varepsilon_{12} = N_{1211} M_1^2 + N_{1222} M_2^2 + N_{1233} M_3^2 + 2N_{1223} M_2 M_3 + 2N_{1213} M_1 M_3 + 2N_{1212} M_1 M_2`,
        matrix: String.raw`\varepsilon_6 = N_{61} (M^2)_1 + N_{62} (M^2)_2 + N_{63} (M^2)_3 + N_{64} (M^2)_4 + N_{65} (M^2)_5 + N_{66} (M^2)_6`,
        explanation: "Shear strain in xy-plane with full tensor notation converted to matrix form"
      }
    }
    
    return examples[index as keyof typeof examples] || examples[1]
  }

  const example = getExampleEquation(selectedIndex)

  if (!example) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="text-center py-8">
          <div className="text-4xl mb-4">👆</div>
          <p className="text-gray-600">
            Select an index from the table above to see the transformation example
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
        ⚡ Live Tensor → Matrix Conversion
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-red-600 mb-3">Original Tensor Equation:</h4>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <SimpleMath equation={example.tensor} block={true} />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-yellow-100 px-4 py-2 rounded-full border border-yellow-300">
            <span className="text-yellow-800 font-medium">Voigt Transformation</span>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-green-600 mb-3">Simplified Matrix Equation:</h4>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <SimpleMath equation={example.matrix} block={true} />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Key insight:</strong> {example.explanation}
          </p>
        </div>
      </div>
    </div>
  )
}

const TensorNotation = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-gothic">
          📝 Demystifying Tensor Notation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Voigt notation is a mathematical shortcut that transforms complex 4th-rank tensor equations 
          into manageable 6×6 matrix operations. It's not new physics—just smarter bookkeeping.
        </p>
      </div>

      {/* The problem statement */}
      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
        <h3 className="font-semibold text-red-900 mb-3 font-gothic">
          😵‍💫 The Problem: Tensor Complexity
        </h3>
        <p className="text-red-800 mb-4">
          The full magnetostriction equation in tensor notation is intimidating:
        </p>
        <div className="bg-white p-4 rounded border">
          <SimpleMath equation={String.raw`\varepsilon_{ij} = N_{ijkl} M_k M_l`} block={true} />
        </div>
        <p className="text-red-800 text-sm mt-3">
          This innocent-looking equation actually represents 3×3×3×3 = 81 components! 
          For each of the 9 strain components εᵢⱼ, we need 9 magnetization terms MₖMₗ.
        </p>
      </div>

      {/* The solution */}
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-900 mb-3 font-gothic">
          💡 The Solution: Voigt Notation
        </h3>
        <p className="text-green-800 mb-4">
          Voigt notation exploits the symmetry of strain and stress tensors to reduce complexity:
        </p>
        <div className="bg-white p-4 rounded border">
          <SimpleMath equation={String.raw`\varepsilon_m = N_{mn} (M^2)_n`} block={true} />
        </div>
        <p className="text-green-800 text-sm mt-3">
          Now we have a clean 6×6 matrix equation instead of a 4th-rank tensor!
        </p>
      </div>

      {/* Interactive mapping table */}
      <IndexMappingTable onSelect={setSelectedIndex} />

      {/* Live conversion example */}
      <LiveConversion selectedIndex={selectedIndex} />

      {/* The magnetization vector transformation */}
      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-4 font-gothic">
          🔄 Magnetization Vector Transformation
        </h3>
        <p className="text-purple-800 mb-4">
          The magnetization products also get mapped using the same indices:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-purple-900 mb-3">Original Products:</h4>
            <div className="space-y-2 text-sm font-mono">
              <div>M₁² → (M²)₁</div>
              <div>M₂² → (M²)₂</div>
              <div>M₃² → (M²)₃</div>
              <div>M₂M₃ → (M²)₄</div>
              <div>M₁M₃ → (M²)₅</div>
              <div>M₁M₂ → (M²)₆</div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-purple-900 mb-3">Key Rules:</h4>
            <div className="space-y-2 text-sm text-purple-800">
              <div>• Square terms keep their values</div>
              <div>• Cross terms may need factor of 2</div>
              <div>• Maintains physical meaning</div>
              <div>• Reduces computational complexity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why it works */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-4 font-gothic">
          🎯 Why Voigt Notation Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-medium text-gray-900 mb-2">Symmetry</h4>
            <p className="text-gray-600 text-sm">
              Strain and stress tensors are symmetric: εᵢⱼ = εⱼᵢ
            </p>
          </div>
          <div className="bg-white p-4 rounded border">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-medium text-gray-900 mb-2">Reduction</h4>
            <p className="text-gray-600 text-sm">
              9 independent components → 6 independent components
            </p>
          </div>
          <div className="bg-white p-4 rounded border">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-medium text-gray-900 mb-2">Efficiency</h4>
            <p className="text-gray-600 text-sm">
              Matrix operations are faster and more intuitive
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TensorNotation
