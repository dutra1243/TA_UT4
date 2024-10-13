import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Context from './Context'
import { UserCard } from './UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Context.Provider value={{ name: 'Facu' }}>
        <UserCard />

      </Context.Provider>
    </>
  )
}

export default App
