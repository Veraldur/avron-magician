# Avron: Magician — Windows build

This wrapper packages the Phaser game into a normal Windows application using Tauri. The end user does not install Phaser, Node.js, Rust, or a browser.

## GitHub Actions build

1. Put the complete game archive into `game-source/m3.7z` (the provided `m3(2).7z`).
2. Push this folder to GitHub.
3. Open **Actions → Build Avron: Magician for Windows → Run workflow**.
4. Download the `avron-magician-windows` artifact. It contains the NSIS installer and MSI.

The workflow extracts the full game, overlays the final dash/path-damage fixes, adds the Phaser bootstrap and packages the existing `assets/` directory as static content, installs Phaser/Vite/Tauri dependencies, and creates the Windows installers.

## Local build

On Windows with Node 22 and Rust installed, extract the full game to `game/`, copy the wrapper files into it, then run `npm install` and `npm run tauri -- build`.
