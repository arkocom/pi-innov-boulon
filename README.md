# 🪙 Pi Network - Innov'BOULON

## 📋 Description

Site web complet dédié au Pi Network pour Innov'BOULON, incluant :
- ✅ Section informative sur le Pi Network
- ✅ Guide pour rejoindre avec code d'invitation @arkocom
- ✅ Intégration paiements Pi pour les adhésions
- ✅ Espace communauté des Pionniers Pi
- ✅ Formations exclusives sur le Pi Network
- ✅ Design moderne et responsive

---

## 🚀 Déploiement sur Vercel (GRATUIT)

### Étape 1 : Préparation du projet

1. **Téléchargez le dossier complet** `pi-innov-boulon/`

2. **Créez les fichiers de configuration manquants :**

#### `package.json` (créez ce fichier à la racine)
```json
{
  "name": "pi-innov-boulon",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/node": "20.6.2",
    "@types/react": "18.2.22",
    "typescript": "5.2.2",
    "autoprefixer": "10.4.15",
    "postcss": "8.4.30",
    "tailwindcss": "3.3.3"
  }
}
```

#### `next.config.js` (créez ce fichier à la racine)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['minepi.com', 'picsum.photos'],
  },
}

module.exports = nextConfig
```

#### `.env.local` (créez ce fichier à la racine)
```bash
# Pi Network API Configuration (optionnel pour l'instant)
NEXT_PUBLIC_PI_API_KEY=your_pi_api_key_here
NEXT_PUBLIC_PI_WALLET_ADDRESS=your_wallet_address_here

# Référence pour adhésions
NEXT_PUBLIC_INNOV_BOULON_EMAIL=contact@innov-boulon.fr

# Prix en Pi (ajustables)
NEXT_PUBLIC_PI_PRICE_STUDENT=1
NEXT_PUBLIC_PI_PRICE_INDIVIDUAL=3
NEXT_PUBLIC_PI_PRICE_BUSINESS=15
```

---

### Étape 2 : Créer un compte GitHub

1. Allez sur [github.com](https://github.com) et créez un compte gratuit (si pas déjà fait)
2. Créez un nouveau repository (dépôt) :
   - Nom : `pi-innov-boulon`
   - Type : **Public** ou **Private**
   - Ne cochez PAS "Initialize with README"

3. **Uploadez vos fichiers sur GitHub :**
   
   **Option A - Via l'interface web (plus simple) :**
   - Cliquez sur "uploading an existing file"
   - Glissez-déposez TOUT le contenu du dossier `pi-innov-boulon/`
   - Cliquez "Commit changes"

   **Option B - Via Git (si vous connaissez) :**
   ```bash
   cd /chemin/vers/pi-innov-boulon
   git init
   git add .
   git commit -m "Premier commit"
   git remote add origin https://github.com/VOTRE_USERNAME/pi-innov-boulon.git
   git push -u origin main
   ```

---

### Étape 3 : Déployer sur Vercel

1. **Créez un compte Vercel :**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez "Sign Up"
   - Connectez-vous avec votre compte GitHub

2. **Importez votre projet :**
   - Cliquez "Add New... → Project"
   - Sélectionnez votre repository `pi-innov-boulon`
   - Cliquez "Import"

3. **Configuration du projet :**
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `npm run build` (par défaut)
   - **Output Directory** : `.next` (par défaut)
   
4. **Variables d'environnement (optionnel) :**
   - Cliquez "Environment Variables"
   - Ajoutez les variables de `.env.local` si nécessaire

5. **Déployer :**
   - Cliquez "Deploy"
   - Attendez 2-3 minutes
   - ✅ Votre site est en ligne ! (URL : `https://VOTRE_PROJET.vercel.app`)

---

### Étape 4 : Configurer le sous-domaine `pi.innov-boulon.fr`

1. **Dans Vercel :**
   - Allez dans votre projet → Settings → Domains
   - Cliquez "Add"
   - Entrez : `pi.innov-boulon.fr`
   - Vercel va afficher des instructions DNS

2. **Chez votre fournisseur DNS (ex: OVH, Cloudflare, etc.) :**
   
   Ajoutez un enregistrement **CNAME** :
   ```
   Type: CNAME
   Nom: pi
   Cible: cname.vercel-dns.com.
   TTL: Automatique (ou 3600)
   ```

3. **Vérification :**
   - Retournez sur Vercel
   - Cliquez "Refresh"
   - Attendez quelques minutes (propagation DNS)
   - ✅ Votre site est accessible sur `https://pi.innov-boulon.fr` !

---

## 🔗 Étape 5 : Ajouter le lien dans app.innov-boulon.fr

### Modification minimale du header

Dans `/home/ubuntu/innov_boulon_mvp/app/components/layout/header.tsx`, ajoutez une entrée au tableau `navigationItems` :

```typescript
const navigationItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Intelligence Artificielle', href: '/intelligence-artificielle' },
  { name: 'Outils Numériques', href: '/outils-numeriques' },
  { name: 'Formations', href: '/courses' },
  // ⬇️ AJOUTEZ CETTE LIGNE
  { name: 'Pi Network', href: 'https://pi.innov-boulon.fr', external: true },
  // ⬆️
  { name: 'Communauté', href: '/community' },
  { name: 'À propos', href: '/about' },
  { name: 'Adhésion', href: '/adhesion' },
]
```

**Ensuite, modifiez le rendu du lien pour gérer `external` :**

Recherchez la section de rendu des liens (ligne ~60-70) et remplacez :

```typescript
{navigationItems.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    className="text-gray-700 hover:text-blue-600 transition"
  >
    {item.name}
  </Link>
))}
```

Par :

```typescript
{navigationItems.map((item) => (
  item.external ? (
    <a
      key={item.name}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 hover:text-blue-600 transition flex items-center"
    >
      {item.name}
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="width" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  ) : (
    <Link
      key={item.name}
      href={item.href}
      className="text-gray-700 hover:text-blue-600 transition"
    >
      {item.name}
    </Link>
  )
))}
```

**Déployez la modification :**
```bash
cd /home/ubuntu/innov_boulon_mvp/app
# Testez puis déployez via l'outil AbacusAI
```

---

## 🎨 Personnalisation

### Modifier les prix en Pi

Dans `.env.local`, ajustez :
```bash
NEXT_PUBLIC_PI_PRICE_STUDENT=1      # Actuellement 1 Pi = 10€
NEXT_PUBLIC_PI_PRICE_INDIVIDUAL=3   # Actuellement 3 Pi = 30€
NEXT_PUBLIC_PI_PRICE_BUSINESS=15    # Actuellement 15 Pi = 150€
```

### Modifier le contenu

Tous les textes sont dans les composants `/components/*.tsx`. Modifiez selon vos besoins :
- `Hero.tsx` : Hero section
- `AboutPi.tsx` : Section découverte
- `HowToJoin.tsx` : Guide d'inscription
- `Membership.tsx` : Plans d'adhésion
- `Community.tsx` : Communauté
- `Training.tsx` : Formations

---

## 🔐 Sécurité

### Mesures implémentées :
- ✅ HTTPS automatique (Vercel)
- ✅ Pas de données sensibles côté client
- ✅ Variables d'environnement sécurisées
- ✅ Validation des formulaires

### À faire plus tard (quand Pi ouvre les paiements) :
- Intégrer le Pi SDK complet
- Ajouter un backend sécurisé pour les transactions
- Implémenter la vérification des paiements Pi

---

## 📞 Support

Pour toute question :
- **Email** : contact@innov-boulon.fr
- **App principale** : https://app.innov-boulon.fr
- **Site WordPress** : https://innov-boulon.fr

---

## 📄 Licence

© 2025 Innov'BOULON. Tous droits réservés.

Pi Network est une marque déposée de Pi Core Team. Ce site est indépendant.
