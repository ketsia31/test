# Site vitrine Carmelys

Site statique (HTML / CSS / JS, sans framework) prêt à être publié sur **GitHub Pages**.

## Structure

```
index.html
assets/
  css/style.css
  js/main.js
  img/          → photos issues de votre flyer, à remplacer par vos propres visuels
README.md
```

## Publier sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (ex : `carmelys-site`).
2. Ajoutez tous les fichiers de ce dossier à la racine du dépôt et poussez-les :
   ```bash
   git init
   git add .
   git commit -m "Site vitrine Carmelys"
   git branch -M main
   git remote add origin https://github.com/VOTRE-COMPTE/carmelys-site.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, choisissez la branche `main` et le dossier `/ (root)`.
4. Le site sera en ligne quelques minutes après à l'adresse `https://VOTRE-COMPTE.github.io/carmelys-site/`.
5. Pour un nom de domaine personnalisé (ex. `www.carmelys.fr`), ajoutez-le dans **Settings → Pages → Custom domain** et configurez un enregistrement CNAME chez votre registrar.

## Activer le formulaire de contact

Le site n'a pas de serveur (GitHub Pages est 100% statique). Le formulaire utilise donc un service gratuit, **Formspree** :

1. Créez un compte sur https://formspree.io (gratuit jusqu'à 50 envois/mois).
2. Créez un formulaire, copiez l'URL fournie (ex. `https://formspree.io/f/abcduvwx`).
3. Ouvrez `assets/js/main.js` et remplacez la ligne :
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";
   ```
   par votre propre URL.

Tant que ce n'est pas fait, le bouton "Envoyer la demande" ouvre directement la messagerie de l'utilisateur avec un email pré-rempli à `contactcarmelys@gmail.com` — le site reste donc fonctionnel en attendant.

## À personnaliser avant mise en ligne

- **Photos** : les images dans `assets/img/` viennent de votre flyer existant (qualité limitée car recadrées depuis un scan). Remplacez-les par des photos de meilleure qualité de vos chantiers dès que possible, en gardant les mêmes noms de fichiers ou en adaptant les chemins dans `index.html`.
- **"Ils nous ont fait confiance"** : la bande en bas de page affiche pour l'instant des catégories de clients génériques (Particuliers, Copropriétés, etc.). Remplacez-les par les vrais logos ou noms de vos clients/partenaires dès que vous pourrez les partager, ainsi que la note de satisfaction (actuellement un exemple à 4,8/5).
- **Réalisations** : la galerie utilise les mêmes photos de démonstration — à remplacer par vos chantiers terminés au fil du temps.
- **Mentions légales** : pensez à ajouter une page de mentions légales / politique de confidentialité si vous collectez des données via le formulaire (obligatoire en France - RGPD).

## Modifier le contenu

Tout le texte est directement dans `index.html`, les couleurs et polices dans `assets/css/style.css` (variables tout en haut du fichier, section `:root`).
