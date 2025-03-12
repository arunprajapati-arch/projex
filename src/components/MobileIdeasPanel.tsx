'use client';

import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Idea = string;

interface MobileIdeasPanelProps {
  ideas: Idea[];
}

export const MobileIdeasPanel = ({ ideas }: MobileIdeasPanelProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button 
          className="h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/30"
        >
          <Lightbulb className="h-6 w-6 text-purple-300" />
        </Button>
      </DrawerTrigger>
      
      <DrawerContent className="bg-neutral-800/95 backdrop-blur-xl border-t border-white/10 max-h-[85vh] overflow-hidden">
        <DrawerHeader className="border-b border-white/10 pb-4">
          <DrawerTitle className="text-xl font-bold text-white flex items-center">
            <Lightbulb className="h-5 w-5 text-purple-400 mr-2" /> Ideas
          </DrawerTitle>
          <DrawerDescription className="text-gray-400">
            Browse your collection of ideas
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-3">
            {ideas.map((idea, index) => (
              <div key={index} className="bg-neutral-800/50 p-3 rounded-lg hover:bg-purple-900/20 transition-colors">
                <p  className="text-gray-300">{idea}</p>
              </div>
            ))}
          </div>
        </div>
        
        <DrawerFooter className="border-t border-white/10 pt-4">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Add New Idea
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" className="text-white border-white/20 hover:bg-neutral-700">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
