import { useState } from 'react'
import './App.css'
import Orderpizza from './components/Orderpizza'

const App = () => {
  const [tnickness, setTnickness] = useState("");

  const handleTnickness = (value) => {
    setTnickness(value);
  }
  return (
    <>
      <div className="header">
       <Orderpizza />
      </div>
     
    </>
  )
}

export default App
