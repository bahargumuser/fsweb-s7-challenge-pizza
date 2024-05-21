import { useState } from 'react'
import './App.css'
import './components/Orderpizza'
import Orderpizza from './components/Orderpizza'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
       <Orderpizza />
      </div>
     
    </>
  )
}

export default App
