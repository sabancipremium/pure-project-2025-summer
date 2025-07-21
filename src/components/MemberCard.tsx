'use client'

import { useState } from 'react';
import { type Link, type Member } from '@/lib/teamData';
import LinkButton from './LinkButton';

interface MemberCardProps {
  member: Member;
  index: number;
}

const MemberCard = ({ member, index }: MemberCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div 
      className={`relative rounded-xl p-6 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 card-hover-effect ${
        isRevealed ? 'animate-slide-in-up' : ''
      }`}
      style={{ 
        backgroundColor: member.bgColor,
        animationDelay: `${index * 150}ms`
      }}
      onClick={handleReveal}
    >
      {/* Card Content */}
      <div className="relative z-10">
        {/* Profile Picture Placeholder */}
        <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl font-bold font-jetbrains">
            {getInitials(member.name)}
          </span>
        </div>

        {/* Member Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-gothic">
            {member.name}
          </h3>
          <p className="text-gray-700 font-semibold mb-1 font-dm-sans">
            {member.duty}
          </p>
          <p className="text-gray-600 text-sm font-dm-sans">
            {member.university}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 justify-center">
          {member.links.map((link, idx) => (
            <LinkButton key={idx} link={link} />
          ))}
        </div>
      </div>

      {/* Scratch-off Overlay */}
      {!isRevealed && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-95 transition-opacity duration-700 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <div className="text-4xl mb-3">🎴</div>
            <p className="text-lg font-semibold font-gothic">Click to Reveal</p>
            <p className="text-sm opacity-75 font-dm-sans">Team Member Card</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
