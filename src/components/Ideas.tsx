"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Lightbulb, Plus, X, Link as LinkIcon, Save } from "lucide-react"

// Extended idea type with additional fields
type Idea = {
  id: string;
  title: string;
  description?: string;
  resources?: { url: string; title: string }[];
}

// Convert simple strings to detailed idea objects
const initialIdeas: Idea[] = [
  "Build a personal finance tracker app",
  "Create a browser extension for productivity",
  "Design a minimalist task manager",
  "Make a recipe collection tool",
  "Develop a habit tracking app"
].map((title, index) => ({
  id: `idea-${index}`,
  title,
}));

export const Ideas = () => {
    const [ideas, setIdeas] = useState<Idea[]>(initialIdeas)
    const [newIdea, setNewIdea] = useState("")
    const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [newResource, setNewResource] = useState({ url: "", title: "" })

    const addIdea = () => {
        if (newIdea.trim()) {
            const idea: Idea = {
                id: `idea-${Date.now()}`,
                title: newIdea
            }
            setIdeas([...ideas, idea])
            setNewIdea("")
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") addIdea()
    }

    const openIdeaDetails = (idea: Idea) => {
        setSelectedIdea(idea)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setSelectedIdea(null)
    }

    const updateSelectedIdea = (field: string, value: any) => {
        if (selectedIdea) {
            setSelectedIdea({ ...selectedIdea, [field]: value })
        }
    }

    const addResource = () => {
        if (selectedIdea && newResource.url && newResource.title) {
            const resources = selectedIdea.resources || []
            updateSelectedIdea('resources', [...resources, newResource])
            setNewResource({ url: "", title: "" })
        }
    }

    const saveIdeaChanges = () => {
        if (selectedIdea) {
            setIdeas(ideas.map(idea => 
                idea.id === selectedIdea.id ? selectedIdea : idea
            ))
            closeModal()
        }
    }

    return (
        <>
            <div className="bg-neutral-800/40 backdrop-blur-lg border border-white/10 rounded-xl p-5 sticky top-20" style={{ position: 'sticky', top: '1rem' }}>
                <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <h2 className="text-xl font-bold text-white">Quick Ideas</h2>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                    <input 
                        type="text"
                        value={newIdea}
                        onChange={(e) => setNewIdea(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type an idea and press Enter..."
                        className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <Button 
                        onClick={addIdea}
                        className="bg-purple-600 hover:bg-purple-700 text-white p-2"
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
                
                <div className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                    {ideas.map((idea) => (
                        <div 
                            key={idea.id} 
                            className="bg-neutral-800/50 p-3 rounded-lg hover:bg-purple-900/20 transition-colors border border-white/5 cursor-pointer"
                            onClick={() => openIdeaDetails(idea)}
                        >
                            <p className="text-gray-300">{idea.title}</p>
                            {idea.resources && idea.resources.length > 0 && (
                                <div className="mt-1 flex items-center">
                                    <span className="text-xs text-gray-500">{idea.resources.length} resource{idea.resources.length !== 1 ? 's' : ''}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for idea details */}
            {showModal && selectedIdea && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-neutral-800 border border-white/10 rounded-xl w-full max-w-md p-5 flex flex-col max-h-[80vh]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">Idea Details</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 overflow-y-auto">
                            {/* Title */}
                            <div>
                                <label className="text-sm text-gray-400 block mb-1">Title</label>
                                <input 
                                    value={selectedIdea.title}
                                    onChange={(e) => updateSelectedIdea('title', e.target.value)}
                                    className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-sm text-gray-400 block mb-1">Description</label>
                                <textarea 
                                    value={selectedIdea.description || ''}
                                    onChange={(e) => updateSelectedIdea('description', e.target.value)}
                                    rows={4}
                                    className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-2 text-white resize-none"
                                />
                            </div>

                            {/* Resources */}
                            <div>
                                <label className="text-sm text-gray-400 block mb-1">Resources</label>
                                <div className="space-y-2 mb-2">
                                    {selectedIdea.resources?.map((resource, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-neutral-700/30 p-2 rounded">
                                            <LinkIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                            <a 
                                                href={resource.url}
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-sm text-purple-300 hover:underline truncate"
                                            >
                                                {resource.title}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                {/* Add new resource */}
                                <div className="flex flex-col gap-2">
                                    <input 
                                        value={newResource.title}
                                        onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                                        placeholder="Resource title"
                                        className="w-full bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm"
                                    />
                                    <div className="flex gap-2">
                                        <input 
                                            value={newResource.url}
                                            onChange={(e) => setNewResource({...newResource, url: e.target.value})}
                                            placeholder="https://..."
                                            className="flex-1 bg-neutral-700/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm"
                                        />
                                        <Button 
                                            onClick={addResource}
                                            className="bg-neutral-700 hover:bg-neutral-600 text-white text-sm"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button 
                            onClick={saveIdeaChanges}
                            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
                        >
                            <Save className="w-4 h-4" /> Save Changes
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}