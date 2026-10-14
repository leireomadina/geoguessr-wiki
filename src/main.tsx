import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Derived from the `base` config in vite.config.ts (e.g. "/geoguessr-wiki/"),
// trailing slash stripped. The only other copy is in public/404.html, which
// Vite doesn't process, so it has to be kept in sync by hand.
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
