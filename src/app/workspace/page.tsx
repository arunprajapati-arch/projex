
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'

const page = async () => {
  
    const user = await auth.api.getSession({
        headers: await headers()
    })

  return (
    <div>
       <h1>Dashboard</h1>
         <p>Welcome {user?.user.email}</p>
         <Image src={user?.user.image || '/default-image.png'} alt={''} width={50} height={50}/>
    </div>
  )
}

export default page