'use client'

import { BookOpen, Video, FileText, Award } from 'lucide-react'

export default function Training() {
  const courses = [
    {
      icon: <BookOpen size={32} />,
      title: 'Introduction au Pi Network',
      duration: '2 heures',
      level: 'Débutant',
      topics: [
        'Histoire et vision du Pi',
        'Comment miner efficacement',
        'Sécurité et KYC',
        'Wallet et transactions'
      ],
      badge: '\ud83e\udd47'
    },
    {
      icon: <Video size={32} />,
      title: 'Blockchain et Crypto-monnaies',
      duration: '4 heures',
      level: 'Intermédiaire',
      topics: [
        'Principes de la blockchain',
        'Consensus et mining',
        'Smart contracts',
        'DeFi et applications'
      ],
      badge: '\ud83e\udd48'
    },
    {
      icon: <FileText size={32} />,
      title: 'Stratégies Avancées Pi',
      duration: '3 heures',
      level: 'Avancé',
      topics: [
        'Optimiser son taux de mining',
        'Construire un réseau',
        'Investir dans l\'\u00e9cosystème',
        'Développement d\'apps Pi'
      ],
      badge: '\ud83e\udd49'
    }
  ]

  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Formations <span className="gradient-text-pi">Pi Network</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Maîtrisez le Pi Network et la blockchain grâce à nos formations complètes créées par des experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover-lift border border-purple-100">
              <div className="text-5xl mb-4 text-center">{course.badge}</div>
              <div className="w-16 h-16 gradient-pi rounded-2xl flex items-center justify-center text-white mb-4">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
                  {course.level}
                </span>
                <span className="text-sm text-gray-600">{course.duration}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {course.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-purple-500 mr-2">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 gradient-pi text-white rounded-full font-semibold hover:opacity-90 transition">
                Accéder au cours
              </button>
            </div>
          ))}
        </div>

        {/* Certification */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-yellow-300 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <Award size={64} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Certification Officielle Pionnier Pi
              </h3>
              <p className="text-gray-700 mb-6">
                Complétez nos 3 formations et obtenez votre certification officielle de Pionnier Pi 
                certifié par Innov'BOULON. Ce certificat atteste de vos compétences en blockchain et Pi Network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://app.innov-boulon.fr/courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 gradient-pi text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg"
                >
                  Commencer les formations
                </a>
                <a
                  href="https://app.innov-boulon.fr/certificates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-orange-400 text-orange-700 rounded-full font-semibold hover:bg-orange-50 transition"
                >
                  Voir les certificats
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-600">
            <strong>Formations incluses</strong> avec votre adhésion Innov'BOULON. 
            Accédez à tous les contenus, vidéos et ressources pour devenir un expert Pi Network.
          </p>
        </div>
      </div>
    </section>
  )
}
