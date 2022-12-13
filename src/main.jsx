import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../src/assets/styles/Styleheader.css'
import '../src/assets/styles/Stylefooter.css'
import '../src/assets/styles/Stylecontainer.css'
import '../src/assets/styles/Styleprojects.css'


import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
