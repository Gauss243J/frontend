# React + TypeScript + Vite
 

# Image & Video Analysis UI

A responsive React + TypeScript frontend for filtering and browsing video (and image) content. Built with Vite, CSS Modules, and Lucide icons. Includes:

- **Sidebar Filter Panel** (text, color, file/video/photo, toggles & drag-and-drop)  
- **Responsive Video Grid** with cards and gap control  
- **Connection Status** indicators (Backend & DRES) in header  
- **Settings Popup** (⚙️) for advanced search parameters  
- **Light/Dark mode** via CSS `prefers-color-scheme`  
- **Mock data out of the box**, easy swap to real API  

---

## ➤ Getting Started

1. **Clone & install**  
   git clone https://github.com/yourusername/image-video-analysis-ui.git
   cd image-video-analysis-ui
   npm install 

2. **Clone & install**
    Run dev server

3. **Open in browser**
Navigate to http://localhost:3000 (or the port shown by Vite).


src/
 ├─ components/      # Header, FilterPanel, VideoGrid, SettingsPopup…
 ├─ hooks/           # useSearchVideos (mock or real), useConnectionStatus
 ├─ data/            # mockVideos.ts
 ├─ api/             # axios.ts (baseURL)
 ├─ context/         # QueryProvider (React Query)
 ├─ pages/           # Home.tsx
 ├─ styles/          # global index.css
 └─ App.tsx, main.tsx











This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
