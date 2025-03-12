import { ProjectCard } from "@/components/ProjectCard";
import SignIn from "@/components/sign-in";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-950">
      {/* Background elements that will appear on all pages */}
      <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]"></div>
      </div>
      
      {/* Home page content */}
      <div className="relative z-10 p-10 md:p-20 lg:p-40">
      {/* <SignIn/> */}
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to Projex</h1>
      <p className="text-gray-300 mb-8">Manage your projects efficiently. Sign in to get started.</p>
      <div className="flex gap-4">
        <a href="/workspace" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Go to Workspace
        </a>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
        Sign In
        </button>
      </div>
      </div>
    </div>
  );
}
