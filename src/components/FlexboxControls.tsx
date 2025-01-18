import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import type { FlexboxProperties } from './FlexboxVisualizer';

interface FlexboxControlsProps {
  properties: FlexboxProperties;
  updateProperty: (property: keyof FlexboxProperties, value: string) => void;
}

const FlexboxControls = ({ properties, updateProperty }: FlexboxControlsProps) => {
  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="justify-content" className="font-mono">justify-content</Label>
          <Select
            value={properties.justifyContent}
            onValueChange={(value) => updateProperty('justifyContent', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select justify-content" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flex-start">flex-start</SelectItem>
              <SelectItem value="flex-end">flex-end</SelectItem>
              <SelectItem value="center">center</SelectItem>
              <SelectItem value="space-between">space-between</SelectItem>
              <SelectItem value="space-around">space-around</SelectItem>
              <SelectItem value="space-evenly">space-evenly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="align-items" className="font-mono">align-items</Label>
          <Select
            value={properties.alignItems}
            onValueChange={(value) => updateProperty('alignItems', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select align-items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flex-start">flex-start</SelectItem>
              <SelectItem value="flex-end">flex-end</SelectItem>
              <SelectItem value="center">center</SelectItem>
              <SelectItem value="stretch">stretch</SelectItem>
              <SelectItem value="baseline">baseline</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="flex-direction" className="font-mono">flex-direction</Label>
          <Select
            value={properties.flexDirection}
            onValueChange={(value) => updateProperty('flexDirection', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flex-direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="row">row</SelectItem>
              <SelectItem value="row-reverse">row-reverse</SelectItem>
              <SelectItem value="column">column</SelectItem>
              <SelectItem value="column-reverse">column-reverse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="flex-wrap" className="font-mono">flex-wrap</Label>
          <Select
            value={properties.flexWrap}
            onValueChange={(value) => updateProperty('flexWrap', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flex-wrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nowrap">nowrap</SelectItem>
              <SelectItem value="wrap">wrap</SelectItem>
              <SelectItem value="wrap-reverse">wrap-reverse</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default FlexboxControls;