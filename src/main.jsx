import React from 'react'

import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./Pages/Home"
import Pokemon from "./Pages/Pokemon"
import Search from './Pages/Search'
import App from './Pages/App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon:id' element={<Pokemon />} />
            <Route path='/search' element={<Search />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
