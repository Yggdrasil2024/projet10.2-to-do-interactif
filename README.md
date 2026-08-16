# Task Master — To-Do List Interactive

> **Projet 10.2** — Akieni Academy (Cohorte 2 — 2026)

projet de to do list assez simplet permettant l'ajout, le markage et la deletion des taches.

---

## Demo

[Live Demo](https://yggdrasil2024.github.io/projet10.2-to-do-interactif/)

## Fonctionnalités

- **Ajout de tâches :** Formulaire de saisie dynamique avec validation de champ (`required`).
- **Marquer / Démarquer :** Passage instantané d'une tâche de l'état "En cours" à "Terminé".
- **Suppression :** Possibilité de supprimer une tâche à tout moment.
- **Persistance des données :** Sauvegarde automatique dans le `localStorage` du navigateur.
- **Gestion des états vides :** Affichage d'un message informatif clair lorsqu'aucune tâche n'est présente.

## Captures d'écran

### Version Desktop

<img src="asset/img/demo.png" alt="">

### version mobile

<img src="asset/img/mobile.png" alt=""> |

## Technologies utilisées

- **HTML5 :** Balisage sémantique (`<header>`, `<main>`, `<section>`, `<form>`, `<footer>`).
- **CSS3 :** Design moderne avec CSS Variables, Flexbox, CSS Grid et animations (`@keyframes`).
- **JavaScript (ES6+) :** Manipulations du DOM, programmation événementielle, tableaux (`map`, `filter`, `unshift`), et API `localStorage`.

## Architecture du projet

```text
projet10.2-todo-list/
├── assets/
│   ├── img/
│   │   ├── desktop.png
│   │   └── mobile.png
│   └── styles/
│       └── styles.css
├── .gitignore
├── index.html
├── script.js
└── README.md
```

## recuperer le projet

```bash
git clone https://github.com/Yggdrasil2024/projet10.2-to-do-interactif.git && cd projet10.2-to-do-interactif
```
ensuite ouvrez le avec visual studio de preference et lancer le projet avec l'extension `live server`;

## Auteur

[Guyverna BIKOUTA](https://github.com/Yggdrasil2024)

_junior sofware engineer | cohorte 2 akieni academy_
