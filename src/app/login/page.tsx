import SignIn from '@/components/sign-in'
import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Decorative elements - adjusted positioning to prevent overflow */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-5"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-md mx-auto space-y-8 relative z-10">
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center justify-center">
            <span className="text-white font-bold text-3xl">PROJEX</span>
          </Link>
        </div>
        
        <div className="bg-gray-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-800 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
          
          <div className="mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-white text-center sm:text-left">Sign in to your account</h2>
            <p className="mt-2 text-gray-300 text-center sm:text-left">Enter your details to access your workspace</p>
          </div>
          
          <SignIn />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-300">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Sign up
            </Link>
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} Projex. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage