# Cyber-Grid: Protocol Cards

A standalone HTML5/JavaScript cyberpunk card battler prototype by InkSpireM Visuals.

This repository is designed to run directly in the browser through localhost, Live Server, or GitHub Pages.

## Project structure

```text
index.html
css/style.css
js/main.js
js/AssetLoader.js
js/Game.js
assets/backgrounds/
assets/cards/
assets/characters/
assets/enemies/
assets/ui/
.nojekyll
README.md
```

## Run locally

Do not open the game from inside a temporary ZIP path. Use a normal folder and serve it through localhost.

From the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

VS Code Live Server also works.

## GitHub Pages deployment

1. Create a new GitHub repository named `cyber-grid-protocol-cards`.
2. Push this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to `Deploy from a branch`.
5. Choose `main` branch and `/ (root)` folder.
6. Save.
7. Open the generated GitHub Pages URL after deployment finishes.

The project uses relative paths only and has no build step.

## Boot safety

The game includes a visible boot overlay and red error panel. If a module, image, or runtime step fails, it should show the error instead of a silent white screen.
