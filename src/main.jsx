import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ConfigProvider from './context/ConfigContext'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
