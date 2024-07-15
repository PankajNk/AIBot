"use client";
import { SessionProvider } from 'next-auth/react'
import React, { Children } from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"



const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    
      <SessionProvider>
        [children]
      </SessionProvider>
  )
}

export default Providers