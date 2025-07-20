const InteractiveSimulation = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header">
        Interactive Magnetoelastic Simulation
      </h1>
      
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              🎮 Explore Strain-Magnetism Coupling
            </h2>
            <p className="text-blue-800">
              This interactive module allows you to apply virtual strain to Heusler alloys 
              and observe how the magnetic anisotropy responds in real-time. Adjust the strain 
              parameters and watch the magnetic easy axis reorient in 3D space.
            </p>
          </div>
        </section>

        {/* Simulation Interface */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Simulation Controls</h3>
                
                {/* Material Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Material
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Co₂FeSi</option>
                    <option>Co₂MnSi</option>
                    <option>Ni₂MnGa</option>
                  </select>
                </div>

                {/* Strain Controls */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biaxial Strain (%)
                    </label>
                    <input 
                      type="range" 
                      min="-2" 
                      max="3" 
                      step="0.1" 
                      defaultValue="0"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>-2%</span>
                      <span>0%</span>
                      <span>+3%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Uniaxial Strain (%)
                    </label>
                    <input 
                      type="range" 
                      min="-2" 
                      max="3" 
                      step="0.1" 
                      defaultValue="0"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>-2%</span>
                      <span>0%</span>
                      <span>+3%</span>
                    </div>
                  </div>
                </div>

                {/* Results Display */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Current Values</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">MAE:</span>
                      <span className="font-mono">0.15 meV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Easy Axis:</span>
                      <span className="font-mono">[001]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">B₁:</span>
                      <span className="font-mono">-8.5 MJ/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">B₂:</span>
                      <span className="font-mono">+12.3 MJ/m³</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visualization Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">3D Visualization</h3>
                
                {/* Placeholder for 3D visualization */}
                <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <span className="text-6xl mb-4 block">🔮</span>
                    <h4 className="text-xl font-semibold mb-2">Interactive 3D Viewer</h4>
                    <p className="text-gray-400">
                      Three.js/WebGL implementation coming soon
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Will show crystal structure, strain deformation, <br />
                      and magnetic anisotropy energy surface
                    </p>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                      <span className="font-medium text-red-800">Easy Axis</span>
                    </div>
                    <p className="text-red-700 text-xs">Preferred magnetization direction</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                      <span className="font-medium text-blue-800">Crystal Lattice</span>
                    </div>
                    <p className="text-blue-700 text-xs">Atomic positions and bonds</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                      <span className="font-medium text-green-800">Strain Field</span>
                    </div>
                    <p className="text-green-700 text-xs">Applied mechanical deformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              📚 Understanding the Simulation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What you&apos;re seeing:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Crystal structure of the Heusler alloy</li>
                  <li>• Applied strain deforming the lattice</li>
                  <li>• Magnetic anisotropy energy surface</li>
                  <li>• Real-time calculation of easy axis orientation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key observations:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• How strain magnitude affects MAE</li>
                  <li>• Spin reorientation transitions at critical strains</li>
                  <li>• Material-dependent strain sensitivity</li>
                  <li>• Coupling between structure and magnetism</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default InteractiveSimulation
