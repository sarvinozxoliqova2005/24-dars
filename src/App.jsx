import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'
import FilterPage from './pages/filter/FilterPage'
import SinglePage from './pages/single/SinglePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient ();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='cart' element={<CartPage/>}/>
          <Route path='filter' element={<FilterPage/>}/>
          <Route path='products/:id' element={<SinglePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App