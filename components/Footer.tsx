'use client'

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-pi flex items-center justify-center">
                <span className="text-white text-xl font-bold">π</span>
              </div>
              <div>
                <h3 className="font-bold">Pi Network</h3>
                <p className="text-xs text-gray-400">by Innov'BOULON</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Rejoignez le mouvement du Pi Network avec Innov'BOULON. 
              Mining gratuit, communauté engagée, formations de qualité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition">À propos du Pi</a>
              </li>
              <li>
                <a href="#join" className="hover:text-white transition">Comment rejoindre</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition">Adhésions</a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition">Communauté</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition">Formations</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="https://minepi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center"
                >
                  Site officiel Pi <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://app.innov-boulon.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center"
                >
                  Portail Innov'BOULON <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://innov-boulon.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center"
                >
                  Site principal <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="mailto:contact@innov-boulon.fr" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@innov-boulon.fr" className="hover:text-white transition">
                  contact@innov-boulon.fr
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>+33 (0)X XX XX XX XX</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Innov'BOULON. Tous droits réservés.
            </p>
            <p className="mt-4 md:mt-0">
              Pi Network est une marque déposée de Pi Core Team. Ce site est indépendant et non affilié officiellement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
