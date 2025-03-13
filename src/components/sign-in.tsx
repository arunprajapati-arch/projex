"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  
  return (
    <Card className="w-full border-0 shadow-none bg-transparent">
      <CardContent className="p-0 space-y-6">
        {/* Social sign-in options */}
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-400">Continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              className="bg-[#24292E] text-white hover:bg-[#24292E]/90 border-gray-700 hover:border-gray-600 flex items-center h-11"
              onClick={async () => {
                setLoading(true);
                try {
                  await signIn.social({
                    provider: "github",
                    callbackURL: "/workspace"
                  });
                } catch (error) {
                  console.error(error);
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
            >
              {loading ? (
                <span className="mr-2 h-4 w-4 animate-spin">⟳</span>
              ) : (
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              )}
              Sign in with GitHub
            </Button>
            
            {/* Placeholder for future sign-in methods */}
            {/* Additional sign-in buttons will go here */}
          </div>
        </div>
      </CardContent>
      
    </Card>
  )
}