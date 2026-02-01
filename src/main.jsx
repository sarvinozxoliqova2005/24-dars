import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { cartStore } from './store/cartSore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}>
       <App />
    </Provider>
  </StrictMode>,
)
