const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-xl font-bold">
                Strain Engineering Magnetism in Heusler Alloys
              </h3>
              <p className="mt-4 text-gray-300 text-sm">
                A computational research project exploring magnetostriction and strain-dependent 
                anisotropy in Heusler alloys using density functional theory.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Research
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <span className="text-sm text-gray-300">
                      Magnetoelastic Coupling
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-300">
                      DFT Calculations
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-300">
                      Strain Engineering
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Materials
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <span className="text-sm text-gray-300">
                      Heusler Alloys
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-300">
                      Magnetic Anisotropy
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-300">
                      Spintronics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} PURE Project 2025 Summer. This research is conducted 
            for educational and scientific purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
