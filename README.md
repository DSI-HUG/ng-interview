# Objectif : Afficher des données sous forme de master / details

> ⏰ Pensez à bien gérer votre **temps** (vous avez **1h** suite à laquelle vous devrez sans fautes rendre votre travail)

> ⚠️ Le **fond**, la **forme** et la **qualité** l'emporteront sur le **fonctionnel** et la **quantité**

-----

### 🎉 Bonus

L'utilisation des techniques suivantes n'est pas obligatoire mais serait un plus :
- Rxjs
- Angular reactive forms
- Angular Material

-----

### 📦 Rendu

Une fois le temps écoulé, vous devrez impérativement :
- Archiver votre exercice à l'aide de la commande <code>npm run archive</code>
- Envoyer par email le fichier généré <code>dist/ng-interview.zip</code> à votre point de contact HUG
*(en cas de problème, réalisez vous même un zip du projet en excluant le dossier node_modules)*

-----

## 1. Partie « Master »

Dans cette partie vous allez devoir afficher une collection de données de type : **Utilisateur**

Les données seront disponible via les APIs suivantes :
- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/posts?userId=:id

Vous devrez :

- Afficher la liste des utilisateurs
```ts
// Un Utilisateur se présente sous cette forme :
{
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}
```

- Ajouter une propriété <code>postsCount: number</code> à tous les utilisateurs

- Afficher uniquement les utilisateurs dont l'**identifiant** est supérieur ou égal à **5**

- Afficher uniquement le **nom** des utilisateurs et leur **nombre de posts** dans la liste

-----

## 2. Partie « Details »

Dans cette partie vous allez devoir afficher le détail des utilisateurs.

Vous devrez :

- Afficher ces données sous forme de **formulaire**

- Autoriser la modification de ces données :

   - Les champs **name**, **email** et **adresse** sont obligatoires
   - Le champ **email** doit avoir un format valide

- Faire en sorte de pouvoir arriver directement sur le détail d'un utilisateur via **URL**

-----

## 3. Partie « Bonus »

Si il vous reste un peu de temps, vous pourrez :

- Implémenter la partie **Création** d'un nouvel utilisateur

-----

## Credits

Copyright (C) 2021 [HUG - Hôpitaux Universitaires Genève][dsi-hug]

[![love@hug](https://img.shields.io/badge/@hug-%E2%9D%A4%EF%B8%8Flove-magenta)][dsi-hug]

[dsi-hug]: https://github.com/dsi-hug
