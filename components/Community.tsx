'use client'

import { Users, MessageCircle, Trophy, Calendar } from 'lucide-react'

export default function Community() {
  const stats = [
    { icon: <Users size={32} />, value: '500+', label: 'Pionniers Pi' },
    { icon: <MessageCircle size={32} />, value: '24/7', label: 'Discussions actives' },
    { icon: <Trophy size={32} />, value: '100+', label: 'Événements' },
    { icon: <Calendar size={32} />, value: 'Hebdo', label: 'Webinaires' }
  ]

  const benefits = [
    {
      title: 'Groupe Telegram exclusif',
      description: 'Rejoignez notre communauté de pionniers Pi pour échanger, apprendre et partager.',
      icon: '\ud83d\udcac'
    },
    {
      title: 'Webinaires mensuels',
      description: 'Formations en direct sur le Pi Network, la blockchain et les stratégies de mining.',
      icon: '\ud83c\udfae'
    },
    {
      title: 'Événements réseautage',
      description: 'Rencontrez d\'autres pionniers lors de nos meetups virtuels et physiques.',
      icon: '\ud83e\udd1d'
    },
    {
      title: 'Badge Pionnier Pi',
      description: 'Obtenez votre badge officiel de pionnier Pi certifié par Innov\'BOULON.',
      icon: '\ud83c\udfc6'
    }
  ]

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Communauté <span className="gradient-pi bg-clip-text text-transparent">Pionniers Pi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez une communauté passionnée de pionniers qui construisent l'avenir de la crypto-monnaie.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover-lift">
              <div className="w-16 h-16 gradient-pi rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mr-4">
                \ud83d\udc64
              </div>
              <div>
                <div className="text-white font-bold text-xl">Marc D.</div>
                <div className="text-purple-200 text-sm">Pionnier Pi depuis 2020</div>
              </div>
            </div>
            <p className="text-white text-lg italic mb-6">
              "Grâce à Innov'BOULON, j'ai compris le potentiel du Pi Network. La communauté est incroyable, 
              les formations sont de qualité et j'ai pu développer mes compétences blockchain. 
              Je mine du Pi depuis plusieurs années et je suis convaincu de son avenir !"
            </p>
            <div className="flex items-center justify-between">
              <div className="text-pi-gold font-bold">⭐⭐⭐⭐⭐</div>
              <div className="text-purple-200 text-sm">Il y a 2 jours</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://app.innov-boulon.fr/community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 gradient-innov text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg"
          >
            <Users className="mr-2" size={20} />
            Rejoindre la communauté
          </a>
        </div>
      </div>
    </section>
  )
}
