import { Button } from '@/components/ui/button'

import Image from 'next/image'
import React from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { ExternalLink, PlusCircle, Menu, Lightbulb, X } from 'lucide-react'
import { MobileIdeasPanel } from '@/components/MobileIdeasPanel'
import { Navbar } from '@/components/Navbar'
import { Ideas } from '@/components/Ideas'
import { Projects } from '@/components/Projects'

const page = async () => {
  
   

    const projects = [
        { name: 'Project 1', description: 'Description for project 1' },
        { name: 'Project 2', description: 'Description for project 2' },
        { name: 'Project 2', description: 'Description for project 2' },
        { name: 'Project 2', description: 'Description for project 2' },
    ]

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

  return (
    <div className="min-h-screen bg-gray-950">
        {/* Navbar */}
        <Navbar/>

        <div className="container mx-auto  px-4 mt-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white">Projects</h1>
                {/* Mobile New Project Button */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white md:hidden flex items-center gap-2 rounded-full">
                    <PlusCircle size={16} />
                    <span>New</span>
                </Button>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                {/* Projects Section */}
                <div className="w-full lg:w-3/4">
                    <Projects/>
                </div>

                {/* Ideas Section - Hidden on mobile */}
                <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:ml-4 hidden lg:block">
                    <Ideas />
                </div>
            </div>
            
            {/* Floating buttons for mobile */}
            <div className="fixed lg:hidden bottom-6 right-6 z-10 flex flex-col gap-3">
                {/* Mobile Ideas Panel Component */}
                <MobileIdeasPanel  />
                
                
            </div>
        </div>
    </div>
  )
}

export default page