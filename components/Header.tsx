'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full gradient-pi flex items-center justify-center">
              <span className="text-white text-2xl font-bold">π</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Pi Network</h1>
              <p className="text-xs text-gray-600">by Innov'BOULON</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pi-purple transition">
              Découvrir
            </button>
            <button onClick={() => scrollToSection('join')} className="text-gray-700 hover:text-pi-purple transition">
              Rejoindre
            </button>
            <button onClick={() => scrollToSection('membership')} className="text-gray-700 hover:text-pi-purple transition">
              Adhésions
            </button>
            <button onClick={() => scrollToSection('community')} className="text-gray-700 hover:text-pi-purple transition">
              Communauté
            </button>
            <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-pi-purple transition">
              Formations
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <a
            href="https://app.innov-boulon.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 gradient-innov text-white rounded-full hover:opacity-90 transition font-semibold"
          >
            Retour à l'app
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded"
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded"
            >
              Rejoindre
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded"
            >
              Adhésions
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded"
            >
              Communauté
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded"
            >
              Formations
            </button>
            <a
              href="https://app.innov-boulon.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 gradient-innov text-white rounded text-center font-semibold"
            >
              Retour à l'app
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
