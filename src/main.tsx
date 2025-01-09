import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from './components/bar/topBar.tsx'
import App from './App'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TopBar />
        <App />
    </StrictMode>,
)
