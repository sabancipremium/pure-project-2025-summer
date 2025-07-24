'use client'

import { useState, useEffect } from 'react';
import { teamData, type Member } from '@/lib/teamData';
import MemberCard from './MemberCard';

// Shuffle function to randomize card order
const shuffleArray = (array: Member[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const TeamContent = () => {
  const [deck, setDeck] = useState<Member[]>([]);
  const [revealedCards, setRevealedCards] = useState<Member[]>([]);
  const [isPackOpened, setIsPackOpened] = useState(false);

  // Shuffle the deck on component mount
  useEffect(() => {
    if (teamData && teamData.length > 0) {
      setDeck(shuffleArray(teamData));
    }
  }, []);

  const handleOpenPack = () => {
    setIsPackOpened(true);
    // Reveal the first card automatically
    if (deck.length > 0) {
      const firstCard = deck[0];
      setRevealedCards([firstCard]);
      setDeck(prev => prev.slice(1));
    }
  };

  const handleRevealNext = () => {
    if (deck.length === 0) return;
    const nextCard = deck[0];
    setRevealedCards(prev => [...prev, nextCard]);
    setDeck(prev => prev.slice(1));
  };

  const resetDeck = () => {
    if (teamData && teamData.length > 0) {
      setDeck(shuffleArray(teamData));
      setRevealedCards([]);
      setIsPackOpened(false);
    }
  };

  // Show loading state if teamData is not available
  if (!teamData || teamData.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header text-center font-gothic">
          Meet the Research Team
        </h1>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 section-header text-center font-gothic">
        Meet the Research Team
      </h1>

      {/* Team Introduction */}
      <div className="mb-12">
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 font-gothic">
            🎓 Interactive Team Card Collection
          </h2>
          <p className="text-blue-800 max-w-3xl mx-auto font-dm-sans">
            Discover our interdisciplinary research team through an interactive card pack experience. 
            Click to reveal each team member&apos;s profile and learn about their expertise in 
            computational materials science and magnetoelastic phenomena.
          </p>
        </div>
      </div>

      {/* Card Pack - Only show if pack hasn't been opened */}
      {!isPackOpened && (
        <div className="flex justify-center mb-12">
          <div 
            className="relative cursor-pointer group"
            onClick={handleOpenPack}
          >
            {/* Card Stack Effect */}
            <div className="absolute top-2 left-2 w-64 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-30 transform rotate-3"></div>
            <div className="absolute top-1 left-1 w-64 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-60 transform rotate-1"></div>
            
            {/* Main Card Pack */}
            <div className="w-64 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex flex-col items-center justify-center text-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🎴</div>
              <h3 className="text-2xl font-bold mb-2 font-gothic">Team Cards</h3>
              <p className="text-center text-blue-100 mb-4 font-dm-sans">6 Members</p>
              <div className="bg-white bg-opacity-20 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold font-dm-sans">Click to Open</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Revealed Cards Grid */}
      {revealedCards.length > 0 && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revealedCards.map((member, index) => (
              <MemberCard 
                key={member.id} 
                member={member} 
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      {/* Control Buttons */}
      {isPackOpened && (
        <div className="flex justify-center gap-4 mb-8">
          {deck.length > 0 && (
            <button
              onClick={handleRevealNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 font-dm-sans"
            >
              <span>🎴</span>
              Reveal Next Card ({deck.length} remaining)
            </button>
          )}
          
          {deck.length === 0 && (
            <button
              onClick={resetDeck}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 font-dm-sans"
            >
              <span>🔄</span>
              Shuffle & Start Over
            </button>
          )}
        </div>
      )}

      {/* Completion Message */}
      {deck.length === 0 && revealedCards.length === (teamData?.length || 0) && (
        <div className="text-center mb-8">
          <div className="bg-green-50 p-6 rounded-lg inline-block">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2 font-gothic">
              Complete Team Revealed!
            </h3>
            <p className="text-green-700 font-dm-sans">
              You&apos;ve discovered all {teamData?.length || 0} team members. Ready to explore again?
            </p>
          </div>
        </div>
      )}

      {/* Additional Information */}
      {revealedCards.length > 0 && (
        <>
          {/* Acknowledgments */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center font-gothic">
              🙏 Acknowledgments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 font-gothic">Funding Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm font-dm-sans">
                  <li>• National Science Foundation (NSF)</li>
                  <li>• Department of Energy (DOE)</li>
                  <li>• University Research Grant Program</li>
                  <li>• PURE Summer Research Program 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 font-gothic">Computational Resources</h3>
                <ul className="space-y-2 text-gray-700 text-sm font-dm-sans">
                  <li>• University High-Performance Computing Center</li>
                  <li>• National Center for Supercomputing Applications</li>
                  <li>• Vienna Ab initio Simulation Package (VASP)</li>
                  <li>• Materials Project Database</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Collaboration Opportunities */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 font-gothic">
              🤝 Collaboration Opportunities
            </h2>
            <p className="mb-6 max-w-2xl mx-auto font-dm-sans">
              Interested in collaborating on magnetoelastic materials research? 
              We welcome partnerships with experimental groups, industry researchers, 
              and computational scientists.
            </p>
            <div className="space-y-2 space-x-0 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <a 
                href="mailto:contact@project.edu" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-dm-sans"
              >
                Get in Touch
              </a>
              <a 
                href="/references" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors font-dm-sans"
              >
                View Publications
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamContent;
