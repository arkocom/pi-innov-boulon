# 🔗 Modification de app.innov-boulon.fr

## Objectif

Ajouter un lien "Pi Network" dans le header de l'application principale qui redirige vers `https://pi.innov-boulon.fr`

---

## Fichier à modifier

**Chemin** : `/home/ubuntu/innov_boulon_mvp/app/components/layout/header.tsx`

---

## Modifications

### Étape 1 : Ajouter le lien dans `navigationItems`

**Localisez la ligne ~40** (déclaration de `navigationItems`) :

```typescript
const navigationItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Intelligence Artificielle', href: '/intelligence-artificielle' },
  { name: 'Outils Numériques', href: '/outils-numeriques' },
  { name: 'Formations', href: '/courses' },
  { name: 'Communauté', href: '/community' },
  { name: 'À propos', href: '/about' },
  { name: 'Adhésion', href: '/adhesion' },
]
```

**Ajoutez la ligne suivante après "Formations"** :

```typescript
const navigationItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Intelligence Artificielle', href: '/intelligence-artificielle' },
  { name: 'Outils Numériques', href: '/outils-numeriques' },
  { name: 'Formations', href: '/courses' },
  { name: 'Pi Network', href: 'https://pi.innov-boulon.fr', external: true }, // ⬅️ NOUVELLE LIGNE
  { name: 'Communauté', href: '/community' },
  { name: 'À propos', href: '/about' },
  { name: 'Adhésion', href: '/adhesion' },
]
```

---

### Étape 2 : Modifier le rendu des liens (Desktop)

**Localisez la section de navigation desktop** (ligne ~110-120) :

```typescript
<nav className="hidden md:flex space-x-8">
  {navigationItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-gray-700 hover:text-blue-600 transition"
    >
      {item.name}
    </Link>
  ))}
</nav>
```

**Remplacez par** :

```typescript
<nav className="hidden md:flex space-x-8">
  {navigationItems.map((item) => (
    item.external ? (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
      >
        {item.name}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
</nav>
```

---

### Étape 3 : Modifier le menu mobile

**Localisez la section mobile** (ligne ~150-170) :

```typescript
{mobileMenuOpen && (
  <nav className="md:hidden mt-4 pb-4 space-y-2">
    {navigationItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
      >
        {item.name}
      </Link>
    ))}
  </nav>
)}
```

**Remplacez par** :

```typescript
{mobileMenuOpen && (
  <nav className="md:hidden mt-4 pb-4 space-y-2">
    {navigationItems.map((item) => (
      item.external ? (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded flex items-center justify-between"
        >
          {item.name}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          {item.name}
        </Link>
      )
    ))}
  </nav>
)}
```

---

## Récapitulatif des changements

1. ✅ Ajout de `{ name: 'Pi Network', href: 'https://pi.innov-boulon.fr', external: true }` dans `navigationItems`
2. ✅ Modification du rendu desktop pour gérer les liens externes
3. ✅ Modification du menu mobile pour gérer les liens externes
4. ✅ Icône externe (🔗) ajoutée à côté de "Pi Network"

---

## Test et Déploiement

### Test local

```bash
cd /home/ubuntu/innov_boulon_mvp/app
yarn dev
```

Vérifiez :
- ✅ Le lien "Pi Network" apparaît dans le header
- ✅ Il ouvre `https://pi.innov-boulon.fr` dans un nouvel onglet
- ✅ L'icône externe est visible

### Déploiement

Utilisez l'outil de déploiement AbacusAI pour publier les changements sur `https://app.innov-boulon.fr`

---

## Visualisation

**Avant** :
```
Accueil | Intelligence Artificielle | Outils Numériques | Formations | Communauté | À propos | Adhésion
```

**Après** :
```
Accueil | Intelligence Artificielle | Outils Numériques | Formations | Pi Network 🔗 | Communauté | À propos | Adhésion
```

---

## Impact

- ✅ **Lignes modifiées** : ~15 lignes
- ✅ **Impact mémoire** : Minimal (~0.1 KB)
- ✅ **Compatibilité** : 100% (aucune dépendance ajoutée)
- ✅ **Risque** : Aucun

---

## Questions ?

Contactez : contact@innov-boulon.fr
