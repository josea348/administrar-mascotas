import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdministrarMascotas from './AdministrarMascotas'
import AdicionarMascotas from './AdicionarMascotas'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={AdministrarMascotas} />
        <Route path='adicionar' Component={AdicionarMascotas} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
