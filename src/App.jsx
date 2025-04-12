import { useState } from 'react'
import styles from './App.module.scss'
import { Route, Routes } from 'react-router'
import Home from './content/Home/Home'
import Header from './content/Headers/Header'
import { setSearchShow } from './reduce/width'
import { useDispatch } from 'react-redux'



function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  return (
    <div
      onClick={(e) => {
        console.dir(e.target);
        if (e.target.placeholder !== 'Введите искомое') return 0
    }}>
      <Header />
      <Routes >
        <Route path='/' exact element={<Home  />} />
        
  </Routes>
    </div>
  )
}

export default App
