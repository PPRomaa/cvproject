import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import { VisibilityProvider} from './hooks'

import { CirclePreloader } from './components/preloader/Circle-preloader'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <VisibilityProvider>
            <CirclePreloader />
            <App />
        </VisibilityProvider>
    </BrowserRouter>
)

reportWebVitals()
