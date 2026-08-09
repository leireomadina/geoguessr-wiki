import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Derived from the `base` config in vite.config.ts (e.g. "/geoguessr-wiki/"),
// trailing slash stripped, so the base path has a single source of truth.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const redirect = sessionStorage.getItem('gh-pages-redirect')
if (redirect) {
  sessionStorage.removeItem('gh-pages-redirect')
  window.history.replaceState({}, '', `${basename}${redirect}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
