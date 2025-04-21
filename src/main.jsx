import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App.jsx'
import { injectSpeedInsights } from '@vercel/speed-insights';
import { Toaster } from "@/components/ui/toaster"
injectSpeedInsights();

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
      <Toaster />
    <Analytics />
  </StrictMode>,
)
