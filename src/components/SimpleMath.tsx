'use client';

import React from 'react';
import 'katex/dist/katex.min.css';

interface SimpleMathProps {
  equation: string;
  block?: boolean;
}

// Completely fresh Math component
const SimpleMath: React.FC<SimpleMathProps> = ({ equation, block = false }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !ref.current) return;

    import('katex').then((katex) => {
      if (ref.current) {
        try {
          // Force clear
          ref.current.innerHTML = '';
          
          console.log('SimpleMath rendering:', equation);
          
          katex.default.render(equation, ref.current, {
            displayMode: block,
            throwOnError: false,
            strict: false,
            trust: (context) => true, // Trust all commands
            macros: {},
            colorIsTextColor: false
          });
          
          console.log('SimpleMath result:', ref.current.textContent);
          
        } catch (error) {
          console.error('SimpleMath error:', error);
          ref.current.innerHTML = `<span style="color:red">[Error: ${equation}]</span>`;
        }
      }
    }).catch(console.error);
  }, [mounted, equation, block]);

  if (!mounted) {
    return <span>Loading...</span>;
  }

  return <div ref={ref} />;
};

export default SimpleMath;
