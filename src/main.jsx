import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Containers/Login/Login.jsx'
import Register from "./Containers/Register/Register.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register/>
  </React.StrictMode>,
)
