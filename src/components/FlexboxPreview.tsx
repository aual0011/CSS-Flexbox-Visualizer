import React from 'react';
import { Card } from "@/components/ui/card"
import type { FlexboxProperties } from './FlexboxVisualizer';

interface FlexboxPreviewProps {
  properties: FlexboxProperties;
}

const FlexboxPreview = ({ properties }: FlexboxPreviewProps) => {
  const boxes = Array.from({ length: 6 }, (_, i) => i + 1);
  const colors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
    'bg-pink-400'
  ];

  return (
    <Card className="p-6">
      <div className="bg-slate-100 rounded-lg p-4 h-[400px] transition-all duration-300">
        <div
          className="flex h-full border-2 border-dashed border-slate-300 rounded-lg p-4 transition-all duration-300"
          style={{
            justifyContent: properties.justifyContent,
            alignItems: properties.alignItems,
            flexDirection: properties.flexDirection,
            flexWrap: properties.flexWrap
          }}
        >
          {boxes.map((num, index) => (
            <div
              key={num}
              className={`${colors[index]} w-16 h-16 flex items-center justify-center m-1 rounded-lg text-white font-bold shadow-md transition-transform hover:scale-105`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg">
        <code className="text-sm text-slate-700 font-mono">
          {`{
  justify-content: ${properties.justifyContent};
  align-items: ${properties.alignItems};
  flex-direction: ${properties.flexDirection};
  flex-wrap: ${properties.flexWrap};
}`}
        </code>
      </div>
    </Card>
  );
};

export default FlexboxPreview;