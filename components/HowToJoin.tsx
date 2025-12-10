'use client'

import { Download, UserPlus, Play, Gift } from 'lucide-react'

export default function HowToJoin() {
  const steps = [
    {
      icon: <Download size={32} />,
      step: '1',
      title: 'Téléchargez l\'app',
      description: 'Disponible gratuitement sur iOS et Android. Cherchez "Pi Network" dans votre store.'
    },
    {
      icon: <UserPlus size={32} />,
      step: '2',
      title: 'Utilisez le code',
      description: 'Lors de l\'inscription, utilisez le code d\'invitation : @arkocom'
    },
    {
      icon: <Play size={32} />,
      step: '3',
      title: 'Commencez à miner',
      description: 'Appuyez sur le bouton de mining une fois par jour. C\'est tout !'
    },
    {
      icon: <Gift size={32} />,
      step: '4',
      title: 'Gagnez des bonus',
      description: 'Invitez vos amis et augmentez votre taux de mining jusqu\'\u00e0 +200%.'
    }
  ]

  return (
    <section id="join" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment <span className="gradient-pi bg-clip-text text-transparent">rejoindre</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En 4 étapes simples, commencez à miner du Pi gratuitement dès aujourd'hui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 z-0" />
              )}
              
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-purple-100 z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 gradient-pi rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-pi-purple mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Invitation Code Highlight */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Code d'invitation Innov'BOULON
            </h3>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block mb-4">
              <p className="text-sm text-purple-100 mb-2">Utilisez ce code lors de l'inscription :</p>
              <div className="flex items-center justify-center space-x-4">
                <code className="text-4xl md:text-5xl font-bold text-white tracking-wider">@arkocom</code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('@arkocom')
                    alert('Code copié !')
                  }}
                  className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition"
                >
                  Copier
                </button>
              </div>
            </div>
            <p className="text-purple-100 mb-6">
              Ou visitez directement : <strong>minepi.com/arkocom</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/pi-network/id1445472541"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Télécharger iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.blockchainvault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Télécharger Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
