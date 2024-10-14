import { Children, createContext, useState } from 'react'

import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product'
import Products from './Products'

export interface ProtectedRouteProps {
  user: any
  children: any
  redirectPath?: string
}

export const LogContext = createContext<any>(null)

function App() {
  const [user, setUser] = useState("")

  const ProtectedRoute = ({ user, children, redirectPath = '/' }: ProtectedRouteProps) => {
    if (user !== "admin") {
      return <Navigate to={redirectPath} replace></Navigate>
    }
    return <>
      {children}
    </>


  }

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/about',
      element: <ProtectedRoute user={user} ><About /></ProtectedRoute>
    },
    {
      path: '/products',
      element: <ProtectedRoute user={"admin"} ><Products /></ProtectedRoute>
    },
    {
      path: '/product/:id',
      element: <Product />
    }
  ])

  return (
    <>
      <LogContext.Provider value={[user, setUser]}>
        <RouterProvider router={route}>

        </RouterProvider>
      </LogContext.Provider>
    </>
  )
}

export default App
