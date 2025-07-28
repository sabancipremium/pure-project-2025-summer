'use client';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

interface MathProps {
  equation: string;
  block?: boolean;
  className?: string;
}

const Math = ({ equation, block = false, className = '' }: MathProps) => {
  if (block) {
    return <BlockMath math={equation} />;
  }
  return <InlineMath math={equation} />;
};

export default Math;
