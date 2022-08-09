import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetailsPage } from '../pages/detailsPoke' 
import { Home } from '../pages/home'
import { Pokedex } from '../pages/pokedex'
// poderia ter nomeado a pasta Router

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='details/:id' element={<DetailsPage/>}/>
            <Route path='pokedex' element={<Pokedex/>}/>
        </Routes>
        </BrowserRouter>
    )
}