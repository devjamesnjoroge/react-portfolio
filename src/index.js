import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

// Create Container
const container = document.getElementById('root')

// Create root
const root = ReactDOM.createRoot(container)

// Render
root.render(
    <StrictMode>
        <App />
    </StrictMode>
    )
