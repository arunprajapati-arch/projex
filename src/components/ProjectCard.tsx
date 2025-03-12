import { ExternalLink, Heart, MessageCircle } from "lucide-react";
import Image from "next/image"
import { Button } from "./ui/button";
interface Project { 
    name: string,
    description: string 
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-neutral-800/40 backdrop-blur-lg border border-neutral-700/30 shadow-lg hover:border-purple-500/20 transition-all duration-300 relative group">
        {/* Glass effect shadow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-70 transition-all duration-300 -z-10"></div>
        
        {/* Image section */}
        <div className="aspect-video overflow-hidden relative">
            <Image 
                src={"/projectImage.jpg"} 
                alt="project image" 
                fill 
                className="object-cover transition-all duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
            <div className="absolute top-4 right-4">
                <span className="bg-purple-600/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium shadow-[0_2px_10px_rgba(124,_58,_237,_0.5)] border border-purple-500/30">Live</span>
            </div>
        </div>
        
        {/* Content section */}
        <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-br from-neutral-800/70 via-neutral-800/80 to-neutral-900/90 relative z-10">
            <div>
                <h2 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-100 truncate">
                    {project.name}
                </h2>
                <p className="text-neutral-300 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-neutral-700/30">
                <div className="flex items-center space-x-4">
                    <button className="transition-all duration-300 hover:scale-110 relative">
                        <Heart className="h-5 w-5 text-purple-400 hover:text-pink-400 transition-colors" />
                        <span className="absolute -top-1 -right-1 text-xs bg-neutral-800 rounded-full h-4 w-4 flex items-center justify-center text-purple-300">5</span>
                    </button>
                    <button className="transition-all duration-300 hover:scale-110 relative">
                        <MessageCircle className="h-5 w-5 text-purple-400 hover:text-blue-400 transition-colors" />
                        <span className="absolute -top-1 -right-1 text-xs bg-neutral-800 rounded-full h-4 w-4 flex items-center justify-center text-purple-300">3</span>
                    </button>
                    <button className="transition-all duration-300 hover:scale-110 relative">
                        <ExternalLink className="h-5 w-5 text-purple-400 hover:text-blue-400 transition-colors" />
                        
                    </button>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:text-purple-300 bg-neutral-800/50 hover:bg-purple-900/30 px-3 py-1 rounded-lg transition-all duration-300">
                    
                
                    <span className="cursor-pointer">View</span>
                </Button>
            </div>
        </div>
    </div>
  );
}