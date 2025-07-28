'use client';

import React from 'react';
import Math from '../../components/Math';

export default function DebugKaTeX() {
  const equations = [
    { label: "Double backslash", eq: "\\varepsilon_1 = h_0 + h_1 \\alpha_1^2" },
    { label: "Raw string", eq: String.raw`\varepsilon_1 = h_0 + h_1 \alpha_1^2` },
    { label: "Alternative epsilon", eq: String.raw`\epsilon_1 = h_0 + h_1 \alpha_1^2` },
    { label: "Simple alpha", eq: String.raw`\alpha^2` },
    { label: "Simple varepsilon", eq: String.raw`\varepsilon` },
    { label: "Simple epsilon", eq: String.raw`\epsilon` },
    { label: "Basic equation", eq: "x^2 + y^2 = z^2" },
    { label: "Fraction", eq: String.raw`\frac{1}{2}` },
    { label: "Square root", eq: String.raw`\sqrt{x}` }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">KaTeX Debug</h1>
      
      {equations.map((item, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <p className="text-sm font-medium text-gray-800 mb-1">
            {item.label}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Raw string: <code>{JSON.stringify(item.eq)}</code>
          </p>
          <div className="bg-gray-50 p-2 rounded">
            <Math equation={item.eq} block={true} />
          </div>
        </div>
      ))}
    </div>
  );
}
