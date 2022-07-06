import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </React.StrictMode>
)
