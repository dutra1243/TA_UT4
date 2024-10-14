import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
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
