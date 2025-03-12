import { Button } from "./ui/button"
  const ideas = [
        'Idea 1',
        'Idea 2',
        'Idea 3',
        'Idea 1',
        'Idea 2',
        'Idea 3',
        'Idea 1',
        'Idea 2',
        'Idea 3',
        'Idea 1',
        'Idea 2',
        'Idea 3'
    ]

export const Ideas = () => {
    return (
        <div className="bg-neutral-800/40 backdrop-blur-lg border border-white/10 rounded-xl p-5 sticky top-20" style={{ position: 'sticky', top: '1rem' }}>
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Ideas</h2>
        </div>
        
        <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {ideas.map((idea, index) => (
                <div key={index} className="bg-neutral-800/50 p-3 rounded-lg hover:bg-purple-900/20 transition-colors">
                    <p className="text-gray-300">{idea}</p>
                </div>
            ))}
        </div>
        
        <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
            Add New Idea
        </Button>
    </div>
    )
}