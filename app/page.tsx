'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutPi from '@/components/AboutPi'
import HowToJoin from '@/components/HowToJoin'
import Membership from '@/components/Membership'
import Community from '@/components/Community'
import Training from '@/components/Training'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Header />
      <main>
        <Hero />
        <AboutPi />
        <HowToJoin />
        <Membership />
        <Community />
        <Training />
      </main>
      <Footer />
    </div>
  )
}
