import Math from './Math'

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
              <p className="text-green-800 text-sm mb-3">
                Apply specific strain states (e.g., biaxial strain) by fixing 
                in-plane lattice constants and allowing perpendicular relaxation (ISIF=4):
              </p>
              <div className="bg-white p-3 rounded border">
                <Math equation="\varepsilon_{xx} = \varepsilon_{yy} = \varepsilon" block={true} />
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-900 mb-3">
                3. Magnetic Anisotropy Energy (MAE) Calculation
              </h3>
              <p className="text-purple-800 text-sm mb-3">
                Non-collinear calculations with spin-orbit coupling (LSORBIT=.TRUE.). 
                MAE computed as:
              </p>
              <div className="bg-white p-3 rounded border">
                <Math equation="E_{MAE} = E[100] - E[001]" block={true} />
              </div>
              <p className="text-purple-800 text-sm mt-2">
                with constrained magnetization directions
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
            <div className="bg-gray-50 p-6 rounded-lg border">
              <Math 
                equation="E_{me} = -B_1(\varepsilon_{xx}\alpha_1^2 + \varepsilon_{yy}\alpha_2^2 + \varepsilon_{zz}\alpha_3^2) - B_2(\varepsilon_{xy}\alpha_1\alpha_2 + \varepsilon_{yz}\alpha_2\alpha_3 + \varepsilon_{zx}\alpha_3\alpha_1)"
                block={true}
              />
            </div>
            <p className="text-gray-700 text-sm mt-4 mb-4">
              Where B₁ and B₂ are magnetoelastic coupling coefficients extracted from 
              the linear slope of MAE vs. strain curves:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border mt-3 mb-4">
              <Math 
                equation="B_1 = -\frac{\partial E_{MAE}}{\partial(\varepsilon_{xx} - \varepsilon_{zz})}"
                block={true}
              />
            </div>
            <p className="text-gray-700 text-sm mb-3">
              The total magnetic energy combines intrinsic anisotropy and strain-induced effects:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border">
              <Math 
                equation="E_{total} = E_K + E_{me}"
                block={true}
              />
            </div>
          </div>
        </section>

        {/* Mathematical Framework */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📐 Mathematical Framework
          </h2>
          <div className="space-y-4">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-semibold text-amber-900 mb-3">
                Strain Tensor Components
              </h3>
              <p className="text-amber-800 text-sm mb-3">
                The strain tensor in Voigt notation includes both normal and shear components:
              </p>
              <div className="bg-white p-4 rounded border">
                <Math 
                  equation="\boldsymbol{\varepsilon} = \begin{pmatrix} \varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\ \varepsilon_{xy} & \varepsilon_{yy} & \varepsilon_{yz} \\ \varepsilon_{xz} & \varepsilon_{yz} & \varepsilon_{zz} \end{pmatrix}"
                  block={true}
                />
              </div>
            </div>
            
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-semibold text-rose-900 mb-3">
                Direction Cosines
              </h3>
              <p className="text-rose-800 text-sm mb-3">
                Magnetization direction is described by normalized direction cosines:
              </p>
              <div className="bg-white p-4 rounded border">
                <Math 
                  equation="\alpha_1^2 + \alpha_2^2 + \alpha_3^2 = 1"
                  block={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Computational Details */}
        <section className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🖥️ Computational Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-gray-300 mb-3">
              Energy Convergence Test
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Self-consistent field convergence follows:
            </p>
            <div className="bg-gray-700 p-4 rounded">
              <Math 
                equation="|E_{n+1} - E_n| < 10^{-6} \text{ eV}"
                block={true}
                className="text-white"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MethodsContent
