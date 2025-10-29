# IBMS - Site Web Moderne avec React

Centre de formation en technologies de l'information à Mbour, Sénégal.

## 🚀 Technologies

- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- EmailJS

## 📦 Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd ibms-react

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🔧 Configuration

1. Copier `.env.example` vers `.env`
2. Remplir les variables d'environnement
3. Configurer EmailJS sur https://www.emailjs.com/

## 📝 Scripts

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Construire pour la production
- `npm run preview` - Prévisualiser la build de production
- `npm run lint` - Vérifier le code avec ESLint

## 📁 Structure

```
src/
├── components/      # Composants réutilisables
├── pages/          # Pages de l'application
├── hooks/          # Custom hooks
├── context/        # React Context
├── services/       # Services API
├── utils/          # Utilitaires
├── data/           # Données statiques
└── styles/         # Styles globaux
```

## 🌐 Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur la branche `main`.

## 📧 Contact

- Email: contact@ibms.sn
- Site: https://ibms.sn
EOF


# ============================================
# ÉTAPE 12 : INITIALISER GIT
# ============================================

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "🎉 Initial commit - Configuration du projet IBMS React"


# ============================================
# ÉTAPE 13 : LANCER LE PROJET
# ============================================

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173


# ============================================
# COMMANDES UTILES AU QUOTIDIEN
# ============================================

# Installer une nouvelle dépendance
npm install nom-du-package

# Installer une dépendance de développement
npm install -D nom-du-package

# Désinstaller une dépendance
npm uninstall nom-du-package

# Mettre à jour les dépendances
npm update

# Vérifier les dépendances obsolètes
npm outdated

# Nettoyer le cache et réinstaller
rm -rf node_modules package-lock.json
npm install

# Build pour la production
npm run build

# Prévisualiser la build
npm run preview


# ============================================
# DÉPLOIEMENT SUR VERCEL
# ============================================

# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer le projet
vercel

# Déployer en production
vercel --prod


# ============================================
# DÉPLOIEMENT SUR NETLIFY
# ============================================

# Installer Netlify CLI globalement
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer le projet
netlify deploy

# Déployer en production
netlify deploy --prod


# ============================================
# NOTES IMPORTANTES
# ============================================

# 1. Assurez-vous d'avoir Node.js version 18+ installé
node --version

# 2. Assurez-vous d'avoir npm version 9+ installé
npm --version



# ============================================
# RÉSOLUTION DE PROBLÈMES COURANTS
# ============================================

# Si vous avez des erreurs de permissions :
sudo chown -R $USER:$USER .

# Si le port 5173 est déjà utilisé :
# Vite choisira automatiquement un autre port
# Ou spécifiez un port dans vite.config.js

# Si vous avez des erreurs de modules manquants :
rm -rf node_modules package-lock.json
npm install

# Pour vider le cache de Vite :
rm -rf node_modules/.vite


# ============================================
# FIN DE LA CONFIGURATION
# ============================================

echo "✅ Configuration terminée !"
echo "🚀 Lancez 'npm run dev' pour démarrer le projet"
echo "📖 Consultez le README.md pour plus d'informations"# ibms_site
