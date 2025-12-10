'use client'

import { Check, CreditCard } from 'lucide-react'
import { useState } from 'react'

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: 'student',
      name: 'STUDENT',
      priceEur: '10€',
      pricePi: '1 Pi',
      description: 'Étudiants et jeunes diplômés',
      features: [
        'Accès aux formations Pi',
        'Communauté des pionniers',
        'Support email',
        'Ressources pédagogiques',
        'Certificat de membre'
      ],
      popular: false
    },
    {
      id: 'individual',
      name: 'INDIVIDUAL',
      priceEur: '30€',
      pricePi: '3 Pi',
      description: 'Particuliers et freelances',
      features: [
        'Tout de STUDENT +',
        'Formations avancées',
        'Webinaires exclusifs',
        'Accès prioritaire aux événements',
        'Groupe Telegram VIP',
        'Conseils personnalisés'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'BUSINESS',
      priceEur: '150€',
      pricePi: '15 Pi',
      description: 'Entreprises et organisations',
      features: [
        'Tout de INDIVIDUAL +',
        'Formation d\'entreprise',
        'Consultation dédiée',
        'Intégration Pi pour business',
        'Support prioritaire 24/7',
        'Badge partenaire officiel',
        'Accès API développeur'
      ],
      popular: false
    }
  ]

  const handlePayWithPi = (planId: string) => {
    setSelectedPlan(planId)
    alert(`Le paiement Pi sera bientôt disponible pour le plan ${planId.toUpperCase()}. Contactez-nous à contact@innov-boulon.fr pour plus d'informations.`)
  }

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Adhésions <span className="gradient-pi bg-clip-text text-transparent">avec Pi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez Innov'BOULON et payez votre adhésion en Pi ou en euros. 
            Accédez à des formations exclusives sur la crypto et le Pi Network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-8 hover-lift ${
                plan.popular
                  ? 'border-4 border-purple-400 shadow-2xl'
                  : 'border-2 border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 gradient-pi text-white text-sm font-bold rounded-full">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.priceEur}</span>
                  <span className="text-gray-600">/an</span>
                </div>
                <div className="text-pi-purple font-semibold">
                  ou {plan.pricePi}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <button
                  onClick={() => handlePayWithPi(plan.id)}
                  className="w-full px-6 py-3 gradient-pi text-white rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center"
                >
                  <span className="mr-2">π</span>
                  Payer avec Pi
                </button>
                <a
                  href="https://app.innov-boulon.fr/adhesion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 border-2 border-purple-300 text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition flex items-center justify-center"
                >
                  <CreditCard className="mr-2" size={20} />
                  Payer en euros
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl p-6 text-center">
          <p className="text-gray-800">
            <strong>Note :</strong> Le paiement en Pi sera activé dès que le Pi Network ouvrira les transactions commerciales. 
            En attendant, contactez-nous à <a href="mailto:contact@innov-boulon.fr" className="text-purple-600 underline">contact@innov-boulon.fr</a> pour organiser votre paiement en Pi.
          </p>
        </div>
      </div>
    </section>
  )
}
