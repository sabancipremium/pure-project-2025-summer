'use client'

import Math from './Math';

const MathTest = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Math Component Test</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Simple Inline Math:</h3>
        <p>This is an inline equation: <Math equation="x^2 + y^2 = z^2" /></p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Simple Block Math:</h3>
        <Math equation="E = mc^2" block={true} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Greek Letters:</h3>
        <Math equation="\alpha + \beta = \gamma" block={true} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Subscripts and Superscripts:</h3>
        <Math equation="\varepsilon_{xx} + \alpha_1^2" block={true} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Complex Equation (Simplified):</h3>
        <Math equation="E_{me} = B_1 \varepsilon_{xx} + B_2 \varepsilon_{xy}" block={true} />
      </div>
    </div>
  );
};

export default MathTest;
