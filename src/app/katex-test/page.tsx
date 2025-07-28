'use client'

import { useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';

export default function DirectKaTeXTest() {
  const mathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAndRenderMath = async () => {
      try {
        const katex = await import('katex');
        if (mathRef.current) {
          katex.default.render('E = mc^2', mathRef.current, {
            displayMode: true,
            strict: false,
            throwOnError: false
          });
        }
      } catch (error) {
        console.error('KaTeX error:', error);
        if (mathRef.current) {
          mathRef.current.innerHTML = 'KaTeX failed to load';
        }
      }
    };

    loadAndRenderMath();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Direct KaTeX Test</h1>
      <div>
        <p>Simple equation test:</p>
        <div ref={mathRef} className="my-4 text-center">
          Loading...
        </div>
      </div>
    </div>
  );
}
