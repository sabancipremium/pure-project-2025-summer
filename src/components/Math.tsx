'use client'

import 'katex/dist/katex.min.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-katex components to avoid SSR issues
const InlineMath = dynamic(() => import('react-katex').then(mod => ({ default: mod.InlineMath })), {
  ssr: false,
  loading: () => <span className="font-mono">Loading...</span>
});

const BlockMath = dynamic(() => import('react-katex').then(mod => ({ default: mod.BlockMath })), {
  ssr: false,
  loading: () => <div className="font-mono text-center">Loading...</div>
});

interface MathProps {
  equation: string;
  block?: boolean;
  className?: string;
}

const Math = ({ equation, block = false, className = '' }: MathProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server side to avoid hydration issues
  if (!isClient) {
    return (
      <span className={`font-mono ${className}`}>
        {equation}
      </span>
    );
  }

  try {
    if (block) {
      return (
        <div className={`text-center my-4 ${className}`}>
          <BlockMath math={equation} />
        </div>
      );
    } else {
      return (
        <span className={className}>
          <InlineMath math={equation} />
        </span>
      );
    }
  } catch (error) {
    console.error('KaTeX rendering error:', error, 'Equation:', equation);
    return (
      <span className={`text-red-500 font-mono ${className}`}>
        [Math Error: {equation}]
      </span>
    );
  }
};

export default Math;
