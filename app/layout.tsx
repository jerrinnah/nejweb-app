"use client"
import * as React from 'react'
import { ChakraBaseProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraBaseProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ChakraBaseProvider>
        </body>
    </html>
  )
}
