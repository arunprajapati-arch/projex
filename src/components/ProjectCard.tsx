"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project { 
    name: string;
    description: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div 
        className="w-full h-[19rem] rounded-xl overflow-hidden bg-neutral-800/40 backdrop-blur-lg border border-neutral-700/30 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/20 transition-all duration-300 relative group flex flex-col cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Glass effect shadow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-70 transition-all duration-300 -z-10"></div>
        
        {/* Image section with slightly increased height */}
        <div className="h-36 overflow-hidden relative flex-shrink-0">
            <Image 
                src={"/projectImage.jpg"} 
                alt={project.name}
                fill 
                className="object-cover transition-all duration-700 group-hover:scale-105" 
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
            <div className="absolute top-3 right-3">
                <span className="bg-purple-600/80 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-xs font-medium shadow-[0_2px_10px_rgba(124,_58,_237,_0.5)] border border-purple-500/30">Live</span>
            </div>
        </div>
        
        {/* Content section with optimized spacing */}
        <div className="p-4 flex flex-col flex-grow bg-gradient-to-br from-neutral-800/70 via-neutral-800/80 to-neutral-900/90 relative z-10">
            {/* Title */}
            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-100 truncate">
                {project.name}
            </h2>
            
            {/* Description as single line with ellipsis and more padding */}
            <p className="text-neutral-300 text-sm mt-2 truncate">
                {project.description}
            </p>
            
            {/* Simple footer with auto margin top */}
            <div className="flex justify-between items-center pt-3 border-t border-neutral-700/30 mt-auto">
                <div className="text-sm text-neutral-400">
                    <span className="inline-block bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">On Track</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-purple-300 bg-neutral-800/50 hover:bg-purple-900/30 px-3 py-1 rounded-lg transition-all duration-300 flex items-center gap-1.5"
                >
                    <span className="text-xs">Details</span>
                    <ExternalLink className="h-3 w-3" />
                </Button>
            </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && (
        <ProjectModal 
          project={project} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      {/* Inline styles for thin scrollbar without plugin dependency */}
      <style jsx global>{`
        .thin-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 4px;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </>
  );
}