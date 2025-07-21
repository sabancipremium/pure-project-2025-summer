const ReferencesContent = () => {
  const referenceCategories = [
    {
      title: "Fundamental Theory",
      icon: "📚",
      references: [
        {
          id: 1,
          authors: "Hohenberg, P. & Kohn, W.",
          title: "Inhomogeneous electron gas",
          journal: "Physical Review",
          volume: "136",
          pages: "B864-B871",
          year: "1964",
          doi: "10.1103/PhysRev.136.B864"
        },
        {
          id: 2,
          authors: "Kohn, W. & Sham, L. J.",
          title: "Self-consistent equations including exchange and correlation effects",
          journal: "Physical Review",
          volume: "140",
          pages: "A1133-A1138",
          year: "1965",
          doi: "10.1103/PhysRev.140.A1133"
        },
        {
          id: 3,
          authors: "Bruno, P.",
          title: "Tight-binding approach to the orbital magnetic moment and magnetocrystalline anisotropy of transition-metal monolayers",
          journal: "Physical Review B",
          volume: "39",
          pages: "865-868",
          year: "1989",
          doi: "10.1103/PhysRevB.39.865"
        }
      ]
    },
    {
      title: "Heusler Alloys",
      icon: "🔬",
      references: [
        {
          id: 4,
          authors: "Graf, T., Felser, C. & Parkin, S. S. P.",
          title: "Simple rules for the understanding of Heusler compounds",
          journal: "Progress in Solid State Chemistry",
          volume: "39",
          pages: "1-50",
          year: "2011",
          doi: "10.1016/j.progsolidstchem.2011.02.001"
        },
        {
          id: 5,
          authors: "Klaer, P., Balke, B., Alijani, V., Winterlik, J., Fecher, G. H., Felser, C. & Elmers, H. J.",
          title: "Element-specific magnetic moments and spin-resolved density of states in CoFeSi",
          journal: "Physical Review B",
          volume: "84",
          pages: "144413",
          year: "2011",
          doi: "10.1103/PhysRevB.84.144413"
        },
        {
          id: 6,
          authors: "Picozzi, S., Continenza, A. & Freeman, A. J.",
          title: "Co₂MnX (X = Si, Ge, Sn) Heusler compounds: An ab initio study of their structural, electronic, and magnetic properties at zero and elevated pressure",
          journal: "Physical Review B",
          volume: "66",
          pages: "094421",
          year: "2002",
          doi: "10.1103/PhysRevB.66.094421"
        }
      ]
    },
    {
      title: "Magnetostriction & Strain Engineering",
      icon: "🧲",
      references: [
        {
          id: 7,
          authors: "Villari, E.",
          title: "Ueber die Aenderungen des magnetischen Moments, welche der Zug und das Hindurchleiten eines galvanischen Stroms in einem Stabe von Stahl oder Eisen hervorbringen",
          journal: "Annalen der Physik",
          volume: "126",
          pages: "87-122",
          year: "1865",
          doi: "10.1002/andp.18652020107"
        },
        {
          id: 8,
          authors: "Duan, C.-G., Jaswal, S. S. & Tsymbal, E. Y.",
          title: "Predicted magnetoelectric effect in Fe/BaTiO₃ multilayers: Ferroelectric control of magnetism",
          journal: "Physical Review Letters",
          volume: "97",
          pages: "047201",
          year: "2006",
          doi: "10.1103/PhysRevLett.97.047201"
        },
        {
          id: 9,
          authors: "Hu, J.-M., Li, Z., Chen, L.-Q. & Nan, C.-W.",
          title: "High-density magnetoresistive random access memory operating at ultralow voltage at room temperature",
          journal: "Nature Communications",
          volume: "2",
          pages: "553",
          year: "2011",
          doi: "10.1038/ncomms1564"
        }
      ]
    },
    {
      title: "Computational Methods",
      icon: "💻",
      references: [
        {
          id: 10,
          authors: "Kresse, G. & Furthmüller, J.",
          title: "Efficient iterative schemes for ab initio total-energy calculations using a plane-wave basis set",
          journal: "Physical Review B",
          volume: "54",
          pages: "11169-11186",
          year: "1996",
          doi: "10.1103/PhysRevB.54.11169"
        },
        {
          id: 11,
          authors: "Perdew, J. P., Burke, K. & Ernzerhof, M.",
          title: "Generalized gradient approximation made simple",
          journal: "Physical Review Letters",
          volume: "77",
          pages: "3865-3868",
          year: "1996",
          doi: "10.1103/PhysRevLett.77.3865"
        },
        {
          id: 12,
          authors: "Wang, X., Yates, J. R., Souza, I. & Vanderbilt, D.",
          title: "Ab initio calculation of the anomalous Hall conductivity by Wannier interpolation",
          journal: "Physical Review B",
          volume: "74",
          pages: "195118",
          year: "2006",
          doi: "10.1103/PhysRevB.74.195118"
        }
      ]
    },
    {
      title: "Recent Advances",
      icon: "🚀",
      references: [
        {
          id: 13,
          authors: "Matsukura, F., Tokura, Y. & Ohno, H.",
          title: "Control of magnetism by electric fields",
          journal: "Nature Nanotechnology",
          volume: "10",
          pages: "209-220",
          year: "2015",
          doi: "10.1038/nnano.2015.22"
        },
        {
          id: 14,
          authors: "Song, C., Cui, B., Li, F., Zhou, X. & Pan, F.",
          title: "Recent progress in voltage control of magnetism: Materials, mechanisms, and performance",
          journal: "Progress in Materials Science",
          volume: "87",
          pages: "33-82",
          year: "2017",
          doi: "10.1016/j.pmatsci.2017.02.002"
        },
        {
          id: 15,
          authors: "Chen, A., Zhao, Y. & Li, P.",
          title: "Voltage controlled magnetic anisotropy in Fe/MgO heterostructures: A review",
          journal: "Journal of Physics D: Applied Physics",
          volume: "52",
          pages: "083001",
          year: "2019",
          doi: "10.1088/1361-6463/aaf792"
        }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header text-center">
        References
      </h1>
      
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              📖 Academic Foundation
            </h2>
            <p className="text-blue-800 max-w-4xl mx-auto">
              This research builds upon decades of theoretical and experimental work in 
              magnetostriction, density functional theory, and Heusler alloys. The following 
              references provide the scientific foundation for our computational methodology 
              and theoretical understanding.
            </p>
          </div>
        </section>

        {/* Reference Categories */}
        {referenceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {category.references.map((ref) => (
                    <div key={ref.id} className="border-l-4 border-blue-200 pl-6 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          [{ref.id}]
                        </span>
                      </div>
                      
                      <p className="text-gray-900 font-medium mb-2">
                        {ref.authors} ({ref.year})
                      </p>
                      
                      <p className="text-gray-800 mb-2 italic">
                        &quot;{ref.title}&quot;
                      </p>
                      
                      <p className="text-gray-600 text-sm mb-2">
                        <span className="font-medium">{ref.journal}</span>
                        {ref.volume && <span> <strong>{ref.volume}</strong></span>}
                        {ref.pages && <span>, {ref.pages}</span>}
                      </p>
                      
                      {ref.doi && (
                        <p className="text-blue-600 text-sm">
                          <span className="font-medium">DOI:</span>{" "}
                          <a 
                            href={`https://doi.org/${ref.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {ref.doi}
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Resources */}
        <section>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              📋 Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Software & Databases</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>VASP:</strong> Vienna Ab initio Simulation Package</li>
                  <li>• <strong>Materials Project:</strong> Computational materials database</li>
                  <li>• <strong>Bilbao Crystallographic Server:</strong> Symmetry analysis tools</li>
                  <li>• <strong>AFLOW:</strong> Automatic flow for materials discovery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Key Reviews</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Magnetostriction and magnetoelastic coupling reviews</li>
                  <li>• Heusler alloys comprehensive surveys</li>
                  <li>• DFT methodology and best practices</li>
                  <li>• Spin-orbit coupling computational methods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Information */}
        <section>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              📝 Citing This Work
            </h2>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 text-sm mb-4">
                If you use data or insights from this research, please cite:
              </p>
              <div className="bg-gray-800 p-4 rounded font-mono text-sm">
                <p className="text-green-400">
                  Author(s). &quot;Strain Engineering Magnetism in Heusler Alloys: 
                  A Computational Study of Magnetoelastic Coupling.&quot; 
                  PURE Project 2025 Summer Research Program. (2025).
                </p>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                * This is a preliminary citation format. Final publication details will be updated upon completion.
              </p>
            </div>
          </div>
        </section>

        {/* Copyright Notice */}
        <section>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3 text-center">
              ⚖️ Copyright & Academic Integrity
            </h3>
            <p className="text-yellow-800 text-sm text-center">
              All referenced works remain property of their respective authors and publishers. 
              This compilation is for educational and research purposes under fair use guidelines. 
              Please respect copyright laws and cite original sources appropriately.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReferencesContent
