import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from './pages/Post'
import Retrieve from './pages/Retrieve'
import InvalidPage from './pages/InvalidPage'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Retrieve/>}/>
        <Route path='/PostData' element={<Post/>}/>
        <Route path='/RetrieveData' element={<Retrieve/>}/>
        <Route path='*' element={<InvalidPage/>}/>
    </Routes>
  )
}

export default AllRoutes