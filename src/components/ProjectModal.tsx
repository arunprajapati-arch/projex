"use client";

import React, { useEffect, useState } from 'react';
import { X, Edit, BarChart2, Clock, CheckCircle, Layers, Share2, GitBranch, Save } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

interface Project {
  name: string;
  description: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState<Project>({ ...project });
  const [isClosing, setIsClosing] = useState(false);

  // Handle smooth closing animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); // Match this duration with CSS animation
  };

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSave = () => {
    // Here you would typically update the project in your database
    setIsEditing(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-200 p-3 sm:p-0 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleOverlayClick}
    >
      <div 
        className={`relative w-full max-w-4xl bg-neutral-900 rounded-xl shadow-2xl border border-neutral-700/50 overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col transition-all duration-200 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-36 sm:h-48">
          <Image 
            src="/projectImage.jpg" 
            alt={project.name} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
          
          {/* Close button */}
          <button 
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-1.5 sm:p-2 transition-all"
            onClick={handleClose}
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          
          {/* Project title */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
            {isEditing ? (
              <input 
                type="text" 
                value={editedProject.name} 
                onChange={(e) => setEditedProject({...editedProject, name: e.target.value})}
                className="text-xl sm:text-2xl font-bold w-full bg-neutral-800/70 text-white border border-blue-500/30 rounded px-3 py-1"
              />
            ) : (
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                {project.name}
                <button 
                  className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </h1>
            )}
          </div>
        </div>
        
        {/* Navigation tabs */}
        <div className="flex border-b border-neutral-800 bg-neutral-900/95 overflow-x-auto thin-scrollbar-x">
          <button 
            className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2 ${activeTab === 'overview' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')}
          >
            <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Overview</span>
          </button>
          <button 
            className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2 ${activeTab === 'progress' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('progress')}
          >
            <BarChart2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Progress</span>
          </button>
          <button 
            className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2 ${activeTab === 'timeline' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('timeline')}
          >
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Timeline</span>
          </button>
          <button 
            className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2 ${activeTab === 'tasks' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('tasks')}
          >
            <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Tasks</span>
          </button>
        </div>
        
        {/* Content section with dynamic tab content */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 thin-scrollbar">
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white mb-2">Description</h2>
                {isEditing ? (
                  <textarea 
                    value={editedProject.description} 
                    onChange={(e) => setEditedProject({...editedProject, description: e.target.value})}
                    className="w-full bg-neutral-800 text-white border border-blue-500/30 rounded p-2 sm:p-3 h-24 sm:h-32"
                    placeholder="Enter project description..."
                  />
                ) : (
                  <p className="text-neutral-300 whitespace-pre-wrap text-sm sm:text-base">{project.description}</p>
                )}
              </div>
              
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white mb-2">Status</h2>
                <div className="flex flex-wrap items-center gap-2 sm:space-x-2">
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs sm:text-sm">On Track</div>
                  <span className="text-neutral-400 text-xs sm:text-sm">Updated 2 days ago</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white mb-2">Team</h2>
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">AB</div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">CD</div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-600 rounded-full flex items-center justify-center text-white text-xs">EF</div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-neutral-700 rounded-full flex items-center justify-center text-white text-xs">+2</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'progress' && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-base sm:text-lg font-semibold text-white">Progress Overview</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-300">Overall Completion</span>
                    <span className="text-sm text-blue-400">65%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-300">Frontend</span>
                    <span className="text-sm text-blue-400">80%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-neutral-300">Backend</span>
                    <span className="text-sm text-blue-400">50%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'timeline' && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-base sm:text-lg font-semibold text-white">Project Timeline</h2>
              <div className="relative border-l-2 border-neutral-700 ml-2 sm:ml-3 space-y-6 sm:space-y-8 py-2">
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-2.5 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 border-3 sm:border-4 border-neutral-900"></div>
                  <h3 className="text-white font-medium text-sm sm:text-base">Project Started</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm">March 15, 2023</p>
                  <p className="text-neutral-300 mt-1 text-xs sm:text-sm">Initial project setup and requirements gathering completed.</p>
                </div>
                
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-2.5 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-3 sm:border-4 border-neutral-900"></div>
                  <h3 className="text-white font-medium text-sm sm:text-base">Design Phase Completed</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm">April 2, 2023</p>
                  <p className="text-neutral-300 mt-1 text-xs sm:text-sm">UI/UX designs finalized and approved by stakeholders.</p>
                </div>
                
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-2.5 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-3 sm:border-4 border-neutral-900"></div>
                  <h3 className="text-white font-medium text-sm sm:text-base">Development in Progress</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm">Current</p>
                  <p className="text-neutral-300 mt-1 text-xs sm:text-sm">Frontend and backend development underway.</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'tasks' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-base sm:text-lg font-semibold text-white">Project Tasks</h2>
                <Button variant="outline" size="sm" className="text-xs">Add Task</Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center bg-neutral-800/50 p-2 sm:p-3 rounded-lg border border-neutral-700 text-xs sm:text-sm">
                  <input type="checkbox" className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 accent-blue-500" checked />
                  <span className="text-neutral-400 line-through flex-grow">Set up project repository</span>
                  <span className="text-xs text-neutral-500 hidden xs:inline">Completed</span>
                </div>
                
                <div className="flex items-center bg-neutral-800/50 p-2 sm:p-3 rounded-lg border border-neutral-700 text-xs sm:text-sm">
                  <input type="checkbox" className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 accent-blue-500" checked />
                  <span className="text-neutral-400 line-through flex-grow">Create wireframes</span>
                  <span className="text-xs text-neutral-500 hidden xs:inline">Completed</span>
                </div>
                
                <div className="flex items-center bg-neutral-800/50 p-2 sm:p-3 rounded-lg border border-neutral-700 text-xs sm:text-sm">
                  <input type="checkbox" className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 accent-blue-500" />
                  <span className="text-white flex-grow">Implement authentication system</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-1.5 sm:px-2 py-0.5 rounded">In Progress</span>
                </div>
                
                <div className="flex items-center bg-neutral-800/50 p-2 sm:p-3 rounded-lg border border-neutral-700 text-xs sm:text-sm">
                  <input type="checkbox" className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 accent-blue-500" />
                  <span className="text-white flex-grow">Create database models</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-1.5 sm:px-2 py-0.5 rounded">Todo</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer with action buttons */}
        <div className="border-t border-neutral-800 p-3 sm:p-4 flex flex-wrap sm:flex-nowrap gap-2 justify-between items-center bg-neutral-900/95">
          <div className="flex space-x-2 order-2 sm:order-1 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="text-neutral-300 text-xs flex items-center space-x-1 flex-1 sm:flex-auto justify-center">
              <Share2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Share</span>
            </Button>
            <Button variant="outline" size="sm" className="text-neutral-300 text-xs flex items-center space-x-1 flex-1 sm:flex-auto justify-center">
              <GitBranch className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Fork</span>
            </Button>
          </div>
          
          {isEditing ? (
            <div className="flex space-x-2 order-1 sm:order-2 w-full sm:w-auto">
              <Button variant="ghost" size="sm" className="text-neutral-300 text-xs flex-1 sm:flex-auto" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-1 text-xs flex-1 sm:flex-auto justify-center" onClick={handleSave}>
                <Save className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Save Changes</span>
              </Button>
            </div>
          ) : (
            <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 text-xs order-1 sm:order-2 w-full sm:w-auto" onClick={() => setIsEditing(true)}>
              Edit Project
            </Button>
          )}
        </div>
      </div>
      
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
        
        .thin-scrollbar-x::-webkit-scrollbar {
          height: 2px;
        }
        .thin-scrollbar-x::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        .thin-scrollbar-x::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
        }
        .thin-scrollbar-x::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
        
        @media (max-width: 640px) {
          .border-3 {
            border-width: 3px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
