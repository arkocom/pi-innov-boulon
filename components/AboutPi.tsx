'use client'

import { Smartphone, Lock, Globe, TrendingUp } from 'lucide-react'

export default function AboutPi() {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: 'Mining Mobile',
      description: 'Minezdu Pi directement depuis votre smartphone sans consommer de batterie ni de données.'
    },
    {
      icon: <Lock size={32} />,
      title: 'Sécurité Stanford',
      description: 'Créé par des docteurs de Stanford avec une technologie blockchain éprouvée.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Réseau Mondial',
      description: 'Plus de 35 millions de pionniers dans 230+ pays construisent l\'avenir de la crypto.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Écosystème Actif',
      description: 'Mainnet lancé, wallet intégré et applications décentralisées en croissance.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qu'est-ce que le <span className="gradient-pi bg-clip-text text-transparent">Pi Network</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une crypto-monnaie révolutionnaire que vous pouvez miner gratuitement depuis votre téléphone, 
            sans impact sur la batterie ou les données.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl hover-lift border border-purple-100"
            >
              <div className="w-16 h-16 gradient-pi rounded-2xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            L'évolution du Pi Network
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 gradient-pi rounded-full flex items-center justify-center text-white font-bold">
                  2019
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900">Lancement</h4>
                  <p className="text-gray-600">Création par des docteurs de Stanford. Début du mining mobile.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 gradient-pi rounded-full flex items-center justify-center text-white font-bold">
                  2021
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900">Mainnet</h4>
                  <p className="text-gray-600">Lancement du Mainnet et du KYC. Transition vers une blockchain complète.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 gradient-pi rounded-full flex items-center justify-center text-white font-bold">
                  2024
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900">Écosystème</h4>
                  <p className="text-gray-600">35M+ utilisateurs, wallet intégré, applications et échanges actifs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 gradient-pi rounded-full flex items-center justify-center text-white font-bold">
                  2025+
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-900">Futur</h4>
                  <p className="text-gray-600">Expansion mondiale, listings majeurs et adoption massive prévus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
