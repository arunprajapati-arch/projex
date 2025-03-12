import Image from 'next/image'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export const Navbar = async () => {
    const user = await auth.api.getSession({
        headers: await headers()
    })
  return (
	<nav className="bg-neutral-800/40 backdrop-blur-lg border-b border-white/10 shadow-xl p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">P</span>
                    </div>
                    <span className="text-white text-lg font-bold">Projex</span>
                </div>
                
                
                
               
                
                <div className="flex items-center space-x-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm text-white">{user?.user.email}</p>
                        <p className="text-xs text-purple-400">Pro Member</p>
                    </div>
                    <Image 
                        src={user?.user.image || '/default-image.png'} 
                        alt="" 
                        width={40} 
                        height={40} 
                        className="rounded-full border-2 border-purple-500"
                    />
                </div>
            </div>
        </nav>
  );
};