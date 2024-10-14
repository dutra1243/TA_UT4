import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Products } from './Products'
import { Product } from './Product'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {
      path: '/',
      element: < Products />
    },
    {
      path: '/product/:id',
      element: <Product />
    }
  ])

  return (
    <>
      <RouterProvider router={route}>
      </RouterProvider>
    </>
  )
}

export default App
