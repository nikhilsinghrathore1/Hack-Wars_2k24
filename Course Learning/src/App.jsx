import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './component/Project'
import { SinglePage } from './component/SinglePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
    <Route path={"/"} element={<Project/>} />
    <Route path={"/single"} element={<SinglePage/>} />
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
