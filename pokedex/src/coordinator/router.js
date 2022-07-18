import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetailsPage } from '../pages/detailsPoke' 
import { Home } from '../pages/home'
import { Pokedex } from '../pages/pokedex'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='details' element={<DetailsPage/>}/>
            <Route path='pokedex' element={<Pokedex/>}/>
        </Routes>
        </BrowserRouter>
    )
}