'use client'

import { ArrowRight, Zap, Users, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Zap className="text-pi-purple" size={20} />
              <span className="text-sm font-semibold text-pi-purple">Crypto-monnaie mobile révolutionnaire</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Le <span className="gradient-pi bg-clip-text text-transparent">Pi Network</span> avec Innov'BOULON
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Minez du Pi gratuitement depuis votre téléphone. Rejoignez plus de <strong>35 millions de pionniers</strong> dans la révolution de la blockchain mobile.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pi-purple">35M+</div>
                <div className="text-sm text-gray-600">Utilisateurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pi-purple">230+</div>
                <div className="text-sm text-gray-600">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pi-purple">2019</div>
                <div className="text-sm text-gray-600">Lancé en</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center px-8 py-4 gradient-pi text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg"
              >
                Rejoindre maintenant
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-300 text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative fade-in">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-32 h-32 gradient-pi rounded-full flex items-center justify-center pi-coin-animation shadow-xl">
                  <span className="text-white text-6xl font-bold">π</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                Mining sans batterie
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 gradient-pi rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sécurisé</h4>
                    <p className="text-sm text-gray-600">Blockchain prouvée par Stanford</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 gradient-pi rounded-full flex items-center justify-center">
                    <Zap className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Facile</h4>
                    <p className="text-sm text-gray-600">1 clic par jour suffit</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 gradient-pi rounded-full flex items-center justify-center">
                    <Users className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Communautaire</h4>
                    <p className="text-sm text-gray-600">Récompenses de parrainage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
