import { useState } from 'react'
import styles from './App.module.scss'
import { Route, Routes } from 'react-router'
import Home from './content/Home/Home'
import Header from './content/Headers/Header'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes >
        <Route path='/' exact element={<Home  />} />
        
  </Routes>
    </>
  )
}

export default App
