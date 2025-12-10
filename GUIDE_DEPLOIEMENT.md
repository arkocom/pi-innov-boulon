# 🚀 Guide de Déploiement - Pi Network Innov'BOULON

## Prérequis

- Compte GitHub (gratuit)
- Compte Vercel (gratuit)
- Accès au DNS de innov-boulon.fr

---

## Étape 1 : Préparation locale

### 1.1 Fichiers à créer

Créez ces 3 fichiers à la racine du projet :

**`package.json`**
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

**`next.config.js`**
```javascript
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['minepi.com'],
  },
}
```

**`.env.local`** (optionnel)
```bash
NEXT_PUBLIC_PI_API_KEY=
NEXT_PUBLIC_INNOV_BOULON_EMAIL=contact@innov-boulon.fr
NEXT_PUBLIC_PI_PRICE_STUDENT=1
NEXT_PUBLIC_PI_PRICE_INDIVIDUAL=3
NEXT_PUBLIC_PI_PRICE_BUSINESS=15
```

### 1.2 Structure finale

Vérifiez que vous avez :
```
pi-innov-boulon/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AboutPi.tsx
│   ├── HowToJoin.tsx
│   ├── Membership.tsx
│   ├── Community.tsx
│   ├── Training.tsx
│   └── Footer.tsx
├── public/
├── package.json ✅
├── next.config.js ✅
├── .env.local ✅
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## Étape 2 : Upload sur GitHub

### Méthode 1 : Interface Web (Recommandé)

1. Créez un compte sur [github.com](https://github.com)
2. Cliquez "New repository"
   - **Repository name** : `pi-innov-boulon`
   - **Visibility** : Public
   - Ne cochez RIEN d'autre
3. Cliquez "Create repository"
4. Cliquez "uploading an existing file"
5. **Glissez-déposez** TOUT le dossier `pi-innov-boulon/`
6. Cliquez "Commit changes"

### Méthode 2 : Ligne de commande

```bash
cd /chemin/vers/pi-innov-boulon
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/pi-innov-boulon.git
git push -u origin main
```

---

## Étape 3 : Déploiement Vercel

### 3.1 Connexion

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "Sign Up with GitHub"
3. Autorisez Vercel à accéder à vos repos

### 3.2 Import du projet

1. Dans Vercel, cliquez "Add New... → Project"
2. Sélectionnez `pi-innov-boulon` dans la liste
3. Cliquez "Import"

### 3.3 Configuration

**Framework** : Next.js (auto-détecté)  
**Root Directory** : `./`  
**Build Command** : `npm run build`  
**Output Directory** : `.next`  

**Environment Variables** (cliquez "Add") :
```
NEXT_PUBLIC_PI_API_KEY=
NEXT_PUBLIC_INNOV_BOULON_EMAIL=contact@innov-boulon.fr
NEXT_PUBLIC_PI_PRICE_STUDENT=1
NEXT_PUBLIC_PI_PRICE_INDIVIDUAL=3
NEXT_PUBLIC_PI_PRICE_BUSINESS=15
```

### 3.4 Déploiement

1. Cliquez "Deploy"
2. Attendez 2-3 minutes ⏱️
3. ✅ **Site en ligne !**  
   URL temporaire : `https://pi-innov-boulon-xxx.vercel.app`

---

## Étape 4 : Configuration du domaine

### 4.1 Ajouter le sous-domaine dans Vercel

1. Dans votre projet Vercel → **Settings** → **Domains**
2. Cliquez "Add"
3. Entrez : `pi.innov-boulon.fr`
4. Vercel affiche :  
   ```
   Add the following record to your DNS provider:
   Type: CNAME
   Name: pi
   Value: cname.vercel-dns.com.
   ```

### 4.2 Configurer le DNS

**Chez votre hébergeur DNS (OVH, Cloudflare, etc.) :**

1. Connectez-vous à votre interface DNS
2. Accédez à la zone DNS de `innov-boulon.fr`
3. **Ajoutez un enregistrement CNAME** :

```
Type : CNAME
Nom : pi
Cible : cname.vercel-dns.com.
TTL : Automatique (ou 3600)
```

**Exemple OVH :**
```
Sous-domaine : pi
Type d'enregistrement : CNAME
Cible : cname.vercel-dns.com.
```

**Exemple Cloudflare :**
```
Type : CNAME
Name : pi
Target : cname.vercel-dns.com
Proxy status : DNS only (pas de proxy)
```

### 4.3 Vérification

1. Retournez sur Vercel → Domains
2. Cliquez "Refresh" à côté de `pi.innov-boulon.fr`
3. **Attendez 5-30 minutes** (propagation DNS)
4. ✅ Le statut passe à "Valid Configuration"
5. **Votre site est accessible sur `https://pi.innov-boulon.fr` !**

---

## Étape 5 : Mise à jour continue

### Modifier le contenu

1. **Sur GitHub** :
   - Allez dans votre repo `pi-innov-boulon`
   - Naviguez vers le fichier à modifier (ex: `components/Hero.tsx`)
   - Cliquez l'icône crayon ✏️
   - Modifiez le code
   - Cliquez "Commit changes"

2. **Déploiement automatique** :
   - Vercel détecte le changement
   - Build et déploiement automatique
   - Site mis à jour en 2-3 minutes !

---

## 🔧 Dépannage

### Problème 1 : Build échoue

**Erreur** : `Cannot find module 'lucide-react'`

**Solution** :
1. Vérifiez que `package.json` contient `"lucide-react": "^0.263.1"`
2. Dans Vercel → Settings → General → Build & Output Settings
3. Override Build Command : `npm install && npm run build`

### Problème 2 : DNS ne se propage pas

**Symptom** : Erreur "DNS_PROBE_FINISHED_NXDOMAIN"

**Solutions** :
1. Vérifiez l'enregistrement CNAME avec :
   ```bash
   nslookup pi.innov-boulon.fr
   ```
2. Attendez jusqu'à 1 heure (max 48h dans de rares cas)
3. Videz le cache DNS :
   - Windows : `ipconfig /flushdns`
   - Mac/Linux : `sudo killall -HUP mDNSResponder`

### Problème 3 : Site inaccessible

**Vérifications** :
1. Vercel Dashboard → Deployments → Dernière ligne verte = OK
2. Vercel → Settings → Domains → `pi.innov-boulon.fr` = "Valid"
3. Testez l'URL temporaire : `https://pi-innov-boulon-xxx.vercel.app`

---

## 📊 Monitoring

### Analytics Vercel (gratuit)

1. Dans Vercel → Analytics
2. Activez les analytics
3. Visualisez :
   - Visiteurs
   - Pages vues
   - Performances

### Google Analytics (optionnel)

1. Créez une propriété GA4
2. Ajoutez le tracking code dans `app/layout.tsx` :

```typescript
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## ✅ Checklist finale

- [ ] Tous les fichiers créés (package.json, next.config.js, .env.local)
- [ ] Repo GitHub créé et fichiers uploadés
- [ ] Projet importé dans Vercel
- [ ] Build réussi (ligne verte dans Deployments)
- [ ] URL temporaire accessible
- [ ] Enregistrement CNAME ajouté chez votre DNS
- [ ] Domaine `pi.innov-boulon.fr` validé dans Vercel
- [ ] Site accessible sur `https://pi.innov-boulon.fr`
- [ ] Lien ajouté dans `app.innov-boulon.fr`

---

## 🎉 Félicitations !

Votre site Pi Network est en ligne et accessible sur :
**https://pi.innov-boulon.fr**

Pour toute question : contact@innov-boulon.fr
