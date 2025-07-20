const ResultsContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header">
        Data and Discussion
      </h1>
      
      <div className="space-y-12">
        {/* Ground State Properties */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📋 Ground State Properties
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4">
              <h3 className="font-semibold text-gray-900">Calculated Equilibrium Properties</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Compound</th>
                      <th className="text-center py-2 font-semibold text-gray-900">a₀ (Å)</th>
                      <th className="text-center py-2 font-semibold text-gray-900">B₀ (GPa)</th>
                      <th className="text-center py-2 font-semibold text-gray-900">μ<sub>total</sub> (μ<sub>B</sub>)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Co₂FeSi</td>
                      <td className="text-center py-3">5.65</td>
                      <td className="text-center py-3">198</td>
                      <td className="text-center py-3">6.0</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Co₂MnSi</td>
                      <td className="text-center py-3">5.68</td>
                      <td className="text-center py-3">185</td>
                      <td className="text-center py-3">5.0</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Ni₂MnGa</td>
                      <td className="text-center py-3">5.84</td>
                      <td className="text-center py-3">142</td>
                      <td className="text-center py-3">4.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Values compared with experimental and theoretical references (citations to be added)
              </p>
            </div>
          </div>
        </section>

        {/* Strain-Dependent MAE */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📊 Strain-Dependent Magnetic Anisotropy
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900 mb-4">Key Finding</h3>
            <p className="text-blue-800">
              For Co₂FeSi, a spin-reorientation transition (SRT) from in-plane [100] to 
              out-of-plane [001] is observed under biaxial tensile strain at ε = 1.4%, 
              evidenced by the sign change in MAE.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <span className="text-4xl mb-2 block">📈</span>
                <p className="font-medium">MAE vs. Strain Plot</p>
                <p className="text-sm">(Interactive visualization to be implemented)</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Multi-panel plot showing MAE vs. Strain (%) for each compound under 
              different strain conditions (uniaxial, biaxial).
            </p>
          </div>
        </section>

        {/* Magnetoelastic Coefficients */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🎯 Magnetoelastic Coupling Coefficients
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4">
              <h3 className="font-semibold text-gray-900">Calculated B₁ and B₂ Values</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Compound</th>
                      <th className="text-center py-2 font-semibold text-gray-900">B₁ (MJ/m³)</th>
                      <th className="text-center py-2 font-semibold text-gray-900">B₂ (MJ/m³)</th>
                      <th className="text-center py-2 font-semibold text-gray-900">|B₁/B₂|</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Co₂FeSi</td>
                      <td className="text-center py-3">-8.5</td>
                      <td className="text-center py-3">+12.3</td>
                      <td className="text-center py-3">0.69</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Co₂MnSi</td>
                      <td className="text-center py-3">-6.2</td>
                      <td className="text-center py-3">+9.8</td>
                      <td className="text-center py-3">0.63</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Ni₂MnGa</td>
                      <td className="text-center py-3">-15.4</td>
                      <td className="text-center py-3">+18.7</td>
                      <td className="text-center py-3">0.82</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mt-6">
            <h3 className="font-semibold text-green-900 mb-3">Impact Statement</h3>
            <p className="text-green-800">
              The large magnitude and opposing signs of B₁ and B₂ in Ni₂MnGa suggest a high 
              degree of tunability and complex anisotropic response to shear vs. normal strain, 
              making it a prime candidate for anisotropic strain-gated devices.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🔬 Research Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">Key Achievements</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Calculated magnetoelastic coefficients for 3 Heusler alloys</li>
                <li>• Identified strain-induced spin reorientation transitions</li>
                <li>• Established structure-property relationships</li>
                <li>• Provided design guidelines for strain-tunable devices</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">Future Applications</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Strain-tunable magnetic sensors</li>
                <li>• Spintronic memory devices</li>
                <li>• Magneto-mechanical actuators</li>
                <li>• Smart material design optimization</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ResultsContent
