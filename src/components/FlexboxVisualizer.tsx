import React from 'react';
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import FlexboxPreview from './FlexboxPreview';
import FlexboxControls from './FlexboxControls';

export type FlexboxProperties = {
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
  flexWrap: string;
};

const FlexboxVisualizer = () => {
  const [properties, setProperties] = React.useState<FlexboxProperties>({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  });

  const updateProperty = (property: keyof FlexboxProperties, value: string) => {
    setProperties(prev => ({
      ...prev,
      [property]: value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Flexbox Visualizer</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <FlexboxControls properties={properties} updateProperty={updateProperty} />
        <FlexboxPreview properties={properties} />
      </div>
    </div>
  );
};

export default FlexboxVisualizer;