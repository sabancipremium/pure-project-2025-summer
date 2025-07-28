'use client';

import React from 'react';

export default function KaTeXValidation() {
  const [results, setResults] = React.useState<string[]>([]);
  
  React.useEffect(() => {
    const testKaTeX = async () => {
      try {
        const katex = await import('katex');
        const testResults: string[] = [];
        
        // Test cases from KaTeX docs
        const testCases = [
          { name: 'Simple fraction', latex: '\\frac{1}{2}' },
          { name: 'Square root', latex: '\\sqrt{x^2 + y^2}' },
          { name: 'Greek alpha', latex: '\\alpha' },
          { name: 'Greek varepsilon', latex: '\\varepsilon' },
          { name: 'Greek epsilon', latex: '\\epsilon' },
          { name: 'Subscript', latex: 'x_1' },
          { name: 'Superscript', latex: 'x^2' },
          { name: 'Combined', latex: '\\alpha_1^2' },
          { name: 'Original equation', latex: '\\varepsilon_1 = h_0 + h_1 \\alpha_1^2' }
        ];
        
        for (const test of testCases) {
          try {
            const tempDiv = document.createElement('div');
            katex.default.render(test.latex, tempDiv, {
              displayMode: true,
              throwOnError: false,
              strict: false,
              trust: true
            });
            
            const textContent = tempDiv.textContent || '';
            const hasGreek = /[α-ωΑ-Ω]/.test(textContent);
            
            testResults.push(`${test.name}: ${hasGreek ? '✅' : '❌'} "${textContent}"`);
          } catch (error) {
            testResults.push(`${test.name}: ❌ Error: ${error}`);
          }
        }
        
        setResults(testResults);
      } catch (error) {
        setResults([`Failed to load KaTeX: ${error}`]);
      }
    };
    
    testKaTeX();
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">KaTeX Validation Test</h1>
      <div className="space-y-2">
        {results.map((result, index) => (
          <div key={index} className="font-mono text-sm p-2 bg-gray-100 rounded">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}
