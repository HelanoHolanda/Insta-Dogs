import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes1 from './Routes/Routes.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './hooks/UserContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <BrowserRouter> 
    <Routes1/>
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
