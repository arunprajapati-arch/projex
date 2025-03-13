import Image from 'next/image'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export const Navbar = async () => {
    const user = await auth.api.getSession({
        headers: await headers()
    })
  return (
	<nav className="bg-gray-950/40 backdrop-blur-lg border-b border-white/10 shadow-xl p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-light text-white">
                <span className="font-bold text-blue-400">Proj</span>ex
              </h1>
                </div>
                
                
                
               
                
                <div className="flex items-center space-x-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm text-white">{user?.user.email}</p>
                        <p className="text-xs text-blue-500">Pro Member</p>
                    </div>
                    <Image 
                        src={user?.user.image || '/default-image.png'} 
                        alt="" 
                        width={40} 
                        height={40} 
                        className="rounded-full border-2 border-blue-500"
                    />
                </div>
            </div>
        </nav>
  );
};