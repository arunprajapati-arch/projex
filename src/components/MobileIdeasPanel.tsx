'use client';

import { Button } from '@/components/ui/button';
import { Lightbulb, Plus, X, Link as LinkIcon, ArrowLeft, Edit, Trash, Save } from 'lucide-react';
import React, { useState } from 'react';
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

type Idea = {
  id: string;
  title: string;
  description?: string;
  resources?: { url: string; title: string }[];
};

// Updated dummy data with descriptions and resources
const initialIdeas: Idea[] = [
  {
    id: "idea-0",
    title: "Build a personal finance tracker app",
    description: "Create an application that helps users track expenses, set budgets, and visualize spending patterns.",
    resources: [
      { url: "https://example.com/finance-app", title: "UI Design Examples" },
      { url: "https://example.com/chart-libs", title: "Chart Libraries" }
    ]
  },
  {
    id: "idea-1",
    title: "Create a browser extension for productivity",
    description: "Develop a browser extension that blocks distracting websites and tracks productive time usage.",
    resources: [
      { url: "https://example.com/browser-extensions", title: "Extension Development Guide" }
    ]
  },
  {
    id: "idea-2",
    title: "Design a minimalist task manager",
    description: "Build a clean, distraction-free task management application focused on simplicity.",
  },
  {
    id: "idea-3",
    title: "Make a recipe collection tool",
    description: "Create an app for collecting, organizing and sharing recipes with meal planning features.",
    resources: [
      { url: "https://example.com/recipe-apis", title: "Recipe APIs" },
      { url: "https://example.com/food-images", title: "Food Photography" }
    ]
  },
  {
    id: "idea-4",
    title: "Develop a habit tracking app",
    description: "Build an application to help users establish and maintain positive daily habits.",
  }
];

export const MobileIdeasPanel = () => {
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detail' | 'edit'>('list');
  const [editableIdea, setEditableIdea] = useState<Idea | null>(null);
  const [newResource, setNewResource] = useState({ url: '', title: '' });
  const [newIdeaTitle, setNewIdeaTitle] = useState('');
  
  const handleIdeaClick = (idea: Idea) => {
    setSelectedIdea({...idea});
    setViewMode('detail');
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedIdea(null);
    setEditableIdea(null);
  };

  const handleEditMode = () => {
    if (selectedIdea) {
      setEditableIdea({...selectedIdea});
      setViewMode('edit');
    }
  };

  const handleCancelEdit = () => {
    setEditableIdea(null);
    setViewMode('detail');
  };

  const handleSaveEdit = () => {
    if (editableIdea) {
      const updatedIdeas = ideas.map(idea => 
        idea.id === editableIdea.id ? {...editableIdea} : idea
      );
      setIdeas(updatedIdeas);
      setSelectedIdea({...editableIdea});
      setEditableIdea(null);
      setViewMode('detail');
    }
  };

  const handleAddResource = () => {
    if (editableIdea && newResource.url && newResource.title) {
      const resources = editableIdea.resources || [];
      setEditableIdea({
        ...editableIdea, 
        resources: [...resources, { ...newResource }]
      });
      setNewResource({ url: '', title: '' });
    }
  };

  const handleRemoveResource = (index: number) => {
    if (editableIdea && editableIdea.resources) {
      const updatedResources = [...editableIdea.resources];
      updatedResources.splice(index, 1);
      setEditableIdea({...editableIdea, resources: updatedResources});
    }
  };

  const handleAddIdea = () => {
    if (!newIdeaTitle.trim()) return;
    
    const newIdea: Idea = {
      id: `idea-${Date.now()}`,
      title: newIdeaTitle.trim(),
      description: '',
      resources: []
    };
    
    setIdeas([newIdea, ...ideas]);
    setNewIdeaTitle('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddIdea();
    }
  };

  const renderIdeaList = () => (
    <>
      <DrawerHeader className="border-b border-white/10 pb-4">
        <DrawerTitle className="text-xl font-bold text-white flex items-center">
          <Lightbulb className="h-5 w-5 text-blue-400 mr-2" /> Ideas
        </DrawerTitle>
        <DrawerDescription className="text-gray-400">
          Browse your collection of ideas
        </DrawerDescription>
      </DrawerHeader>
      
      <div className="p-4">
        <div className="mt-2 flex items-center gap-2">
          <input 
            type="text"
            placeholder="Type an idea and press Enter..."
            className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={newIdeaTitle}
            onChange={(e) => setNewIdeaTitle(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white p-2"
            onClick={handleAddIdea}
            disabled={!newIdeaTitle.trim()}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto thin-scrollbar">
        <div className="p-4 space-y-3">
          {ideas.length > 0 ? (
            ideas.map((idea) => (
              <div 
                key={idea.id} 
                className="bg-neutral-800/50 p-3 rounded-lg border border-white/5 hover:bg-blue-900/20 hover:border-blue-700/50 transition-all cursor-pointer"
                onClick={() => handleIdeaClick(idea)}
              >
                <p className="text-gray-300">{idea.title}</p>
                {idea.resources && idea.resources.length > 0 && (
                  <div className="mt-1 flex items-center">
                    <LinkIcon className="w-3 h-3 text-blue-400 mr-1" />
                    <span className="text-xs text-gray-500">{idea.resources.length} resources</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No ideas yet. Add your first one!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const renderIdeaDetail = () => (
    <>
      <DrawerHeader className="border-b border-white/10 pb-4">
        <DrawerTitle className="text-xl font-bold text-white flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="mr-2 -ml-2 text-gray-400 hover:text-white p-1"
              onClick={handleBackToList}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            Idea Details
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-400 hover:text-blue-300 p-1"
            onClick={handleEditMode}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </DrawerTitle>
      </DrawerHeader>
      
      <div className="flex-1 overflow-y-auto thin-scrollbar p-4">
        {selectedIdea && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">{selectedIdea.title}</h3>
            
            {selectedIdea.description && (
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-400 mb-1">Description</h4>
                <p className="text-gray-300">{selectedIdea.description}</p>
              </div>
            )}
            
            {selectedIdea.resources && selectedIdea.resources.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Resources</h4>
                <div className="space-y-2">
                  {selectedIdea.resources.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 bg-neutral-700/30 rounded-md hover:bg-blue-900/30 transition-colors text-gray-300 hover:text-blue-200"
                    >
                      <LinkIcon className="h-4 w-4 mr-2 text-blue-400" />
                      <span>{resource.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
  
  const renderEditIdea = () => (
    <>
      <DrawerHeader className="border-b border-white/10 pb-4">
        <DrawerTitle className="text-xl font-bold text-white flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="mr-2 -ml-2 text-gray-400 hover:text-white p-1"
              onClick={handleCancelEdit}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            Edit Idea
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-green-400 hover:text-green-300 p-1"
            onClick={handleSaveEdit}
          >
            <Save className="h-4 w-4" />
          </Button>
        </DrawerTitle>
      </DrawerHeader>
      
      <div className="flex-1 overflow-y-auto thin-scrollbar p-4">
        {editableIdea && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
              <input
                type="text"
                value={editableIdea.title}
                onChange={(e) => setEditableIdea({...editableIdea, title: e.target.value})}
                className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea
                value={editableIdea.description || ''}
                onChange={(e) => setEditableIdea({...editableIdea, description: e.target.value})}
                rows={4}
                className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-400">Resources</label>
              </div>
              
              <div className="space-y-3 mb-4">
                {editableIdea.resources && editableIdea.resources.length > 0 ? (
                  editableIdea.resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-neutral-700/30 p-2 rounded-md">
                      <div className="flex-1 truncate">
                        <p className="text-sm text-gray-300 truncate">{resource.title}</p>
                        <p className="text-xs text-gray-500 truncate">{resource.url}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 p-1 h-auto"
                        onClick={() => handleRemoveResource(index)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-2">
                    <p className="text-gray-500 text-sm">No resources added yet</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-2 border border-white/10 rounded-lg p-3 bg-neutral-800/50">
                <h4 className="text-sm font-medium text-gray-400">Add Resource</h4>
                <input
                  type="text"
                  placeholder="Title"
                  value={newResource.title}
                  onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                  className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
                />
                <input
                  type="url"
                  placeholder="URL (https://...)"
                  value={newResource.url}
                  onChange={(e) => setNewResource({...newResource, url: e.target.value})}
                  className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
                />
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleAddResource}
                  disabled={!newResource.url || !newResource.title}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Resource
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button 
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30"
        >
          <Lightbulb className="h-6 w-6 text-blue-300" />
        </Button>
      </DrawerTrigger>
      
      <DrawerContent className="bg-neutral-800/95 backdrop-blur-xl border-t border-white/10 max-h-[85vh] overflow-hidden">
        {viewMode === 'list' && renderIdeaList()}
        {viewMode === 'detail' && renderIdeaDetail()}
        {viewMode === 'edit' && renderEditIdea()}
        
        <DrawerFooter className="border-t border-white/10 pt-4">
          <DrawerClose asChild>
            <Button variant="outline" className="text-white border-white/20 hover:bg-neutral-700">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
      
      <style jsx global>{`
        .thin-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
        }
        .thin-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </Drawer>
  );
};
