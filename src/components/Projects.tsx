import { PlusCircle } from "lucide-react"
import { ProjectCard } from "./ProjectCard"

const projects = [
    { name: 'Project 1', description: 'Description for project 1' },
    { name: 'Project 2', description: 'Description for project 2' },
    { name: 'Project 2', description: 'Description for project 2' },
    { name: 'Project 2', description: 'Description for project 2' },
]


export const Projects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-3 sm:px-0">
            {/* Add Project Card - Hidden on small screens */}
            <div className="hidden md:flex w-full h-full min-h-[280px] rounded-xl border border-dashed border-purple-500/30 flex-col items-center justify-center bg-neutral-800/20 backdrop-blur-lg hover:bg-neutral-800/40 transition-all duration-300 cursor-pointer group">
                <div className="h-16 w-16 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition-all duration-300">
                    <PlusCircle className="h-8 w-8 text-purple-400" />
                </div>
                <p className="mt-4 text-purple-300 font-medium">Create New Project</p>
            </div>

            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}