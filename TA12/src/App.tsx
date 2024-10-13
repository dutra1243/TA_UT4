import { useState } from 'react'
import './App.css'
import { UserCard } from './UserCard'
import UserInput from './UserInput'


import { UserProps } from './Context'
import Context from './Context'


function App() {
  const userContext = useState()

  return (
    <>
      <Context.Provider value={userContext}>
        <UserInput />
        <UserCard />

      </Context.Provider>
    </>
  )
}

export default App
