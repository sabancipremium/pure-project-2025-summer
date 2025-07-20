const TeamContent = () => {
  const teamMembers = [
    {
      name: "Dr. Principal Investigator",
      role: "Project Leader & Theoretical Physicist",
      description: "Expertise in computational materials science and magnetism",
      email: "pi@university.edu",
      specialties: ["DFT Calculations", "Magnetic Materials", "Theory Development"]
    },
    {
      name: "Research Student 1",
      role: "Graduate Researcher",
      description: "Computational modeling and data analysis specialist",
      email: "student1@university.edu", 
      specialties: ["VASP Simulations", "Python Programming", "Data Visualization"]
    },
    {
      name: "Research Student 2", 
      role: "Undergraduate Researcher",
      description: "Website development and interactive visualizations",
      email: "student2@university.edu",
      specialties: ["Web Development", "Three.js", "UI/UX Design"]
    },
    {
      name: "Collaborator",
      role: "Materials Science Expert",
      description: "Experimental validation and materials synthesis",
      email: "collaborator@institute.edu",
      specialties: ["Heusler Synthesis", "Magnetic Characterization", "Strain Testing"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header text-center">
        Meet the Research Team
      </h1>
      
      <div className="space-y-12">
        {/* Team Introduction */}
        <section>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              🎓 Collaborative Research Excellence
            </h2>
            <p className="text-blue-800 max-w-3xl mx-auto">
              Our interdisciplinary team combines expertise in theoretical physics, computational 
              materials science, and experimental validation to advance the understanding of 
              magnetoelastic phenomena in Heusler alloys.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow interactive-element"
              >
                {/* Profile Picture Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="text-center pt-4 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    📧 {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Acknowledgments */}
        <section>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              🙏 Acknowledgments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Funding Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• National Science Foundation (NSF)</li>
                  <li>• Department of Energy (DOE)</li>
                  <li>• University Research Grant Program</li>
                  <li>• PURE Summer Research Program 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Computational Resources</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• University High-Performance Computing Center</li>
                  <li>• National Center for Supercomputing Applications</li>
                  <li>• Vienna Ab initio Simulation Package (VASP)</li>
                  <li>• Materials Project Database</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Opportunities */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              🤝 Collaboration Opportunities
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Interested in collaborating on magnetoelastic materials research? 
              We welcome partnerships with experimental groups, industry researchers, 
              and computational scientists.
            </p>
            <div className="space-y-2 space-x-0 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <a 
                href="mailto:contact@project.edu" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Publications
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeamContent
