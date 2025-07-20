const MethodsContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header">
        Computational Methodology
      </h1>
      
      <div className="space-y-12">
        {/* First-Principles Framework */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            ⚛️ First-Principles Framework
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Software & Theory</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>DFT Package:</strong> VASP (Vienna Ab initio Simulation Package)</li>
              <li><strong>Core-Valence Interactions:</strong> Projector-Augmented Wave (PAW) method</li>
              <li><strong>Exchange-Correlation:</strong> Generalized Gradient Approximation (GGA) with PBE functional</li>
              <li><strong>Energy Cutoff:</strong> ENCUT = 520 eV</li>
              <li><strong>K-point Mesh:</strong> High-density sampling for accurate integration</li>
            </ul>
          </div>
        </section>

        {/* Calculation Workflow */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🔄 Calculation Workflow
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-900 mb-3">
                1. Structural Relaxation
              </h3>
              <p className="text-blue-800 text-sm">
                Full relaxation of lattice parameters and ionic positions (ISIF=3) to find 
                ground state equilibrium structure. Force convergence: EDIFFG = -1E-3 eV/Å
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-900 mb-3">
                2. Strain Application
              </h3>
              <p className="text-green-800 text-sm">
                Apply specific strain states (e.g., biaxial strain εₓₓ = εᵧᵧ = ε) by fixing 
                in-plane lattice constants and allowing perpendicular relaxation (ISIF=4)
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-900 mb-3">
                3. Magnetic Anisotropy Energy (MAE) Calculation
              </h3>
              <p className="text-purple-800 text-sm">
                Non-collinear calculations with spin-orbit coupling (LSORBIT=.TRUE.). 
                MAE computed as E_MAE = E[100] - E[001] with constrained magnetization directions
              </p>
            </div>
          </div>
        </section>

        {/* Magnetoelastic Coefficients */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📊 Derivation of Magnetoelastic Coefficients
          </h2>
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <p className="text-gray-700 mb-4">
              The magnetoelastic energy in cubic systems is described by:
            </p>
            <div className="bg-gray-100 p-4 rounded text-center font-mono mb-4">
              E<sub>me</sub> = -B₁(εₓₓα₁² + εᵧᵧα₂² + εᵤᵤα₃²) - B₂(εₓᵧα₁α₂ + εᵧᵤα₂α₃ + εᵤₓα₃α₁)
            </div>
            <p className="text-gray-700 text-sm">
              Where B₁ and B₂ are magnetoelastic coupling coefficients extracted from 
              the linear slope of MAE vs. strain curves:
            </p>
            <div className="bg-gray-100 p-3 rounded text-center font-mono text-sm mt-3">
              B₁ = -∂E<sub>MAE</sub>/∂(εₓₓ - εᵤᵤ)
            </div>
          </div>
        </section>

        {/* Computational Details */}
        <section className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🖥️ Computational Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">Convergence Criteria</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Electronic: 1E-6 eV</li>
                <li>• Ionic: 1E-3 eV/Å</li>
                <li>• Stress: 1E-2 GPa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-3">System Size</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Unit cell calculations</li>
                <li>• ~16-32 atoms per cell</li>
                <li>• Multiple k-point meshes tested</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MethodsContent
