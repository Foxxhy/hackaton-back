# Hackaton Backend API

Backend API développé avec Express.js et ES6 Modules pour le projet Hackaton.

## 🚀 Installation

1. Cloner le repository
2. Installer les dépendances :

```bash
npm install
```

## 📦 Dépendances

- **express** : Framework web pour Node.js
- **cors** : Middleware pour gérer les requêtes cross-origin
- **dotenv** : Gestion des variables d'environnement
- **nodemon** : Redémarrage automatique du serveur en développement

## 🛠️ Scripts disponibles

- `npm start` : Démarre le serveur en mode production
- `npm run dev` : Démarre le serveur en mode développement avec nodemon

## 🌐 Endpoints disponibles

- `GET /api/` - Page d'accueil de l'API
- `GET /api/test` - Route de test
- `GET /api/info` - Informations sur l'API

## 🔧 Configuration

Le fichier `.env` contient les variables d'environnement :

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=*
```

## 🚀 Démarrage rapide

```bash
# Mode développement
npm run dev

# Mode production
npm start
```

Le serveur sera accessible sur `http://localhost:3000`

## 📋 Structure du projet

```
hackaton-back/
├── index.js              # Point d'entrée de l'application
├── src/
│   ├── app.js            # Configuration principale de l'app Express
│   │   └── config.js     # Configuration et variables d'environnement
│   ├── routes/
│   │   └── index.js      # Routes de l'API
│   └── middleware/
│       └── errorHandler.js # Gestion des erreurs
├── package.json          # Configuration du projet
├── .env                 # Variables d'environnement
├── .gitignore          # Fichiers ignorés par Git
└── README.md           # Documentation du projet
```

## 🔧 Fonctionnalités ES6 Modules

- **Import/Export** : Utilisation de la syntaxe ES6 moderne
- **Structure modulaire** : Code organisé en modules séparés
- **Configuration centralisée** : Variables d'environnement dans un module dédié
- **Gestion d'erreurs modulaire** : Middleware d'erreur séparé

## 🔮 Prochaines étapes

- Ajouter une base de données
- Implémenter l'authentification
- Créer des routes CRUD
- Ajouter la validation des données
- Implémenter les tests unitaires
- Ajouter des contrôleurs séparés
- Implémenter des services métier
