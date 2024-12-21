import { useState, useEffect } from 'react'
import spud from './assets/spud.png'
import cursor from './assets/cursor.png'
import farmer from './assets/farmer.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cursors, setCursors] = useState(0)
  const [farmers, setFarmers] = useState(0)
  const [clock, setClock] = useState(111)

  const handleSpudClick = () => {
    setCount(count + 1)
  }

  const buy = (item) => {
    if (item === 'cursor') {
      setCursors(cursors + 1)
    }
    if (item === 'farmer') {
      setFarmers(farmers + 1)
    }
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + cursors * 0.3)
    },clock)
    return () => clearTimeout(timeout)
  },[count,cursors,farmers])

  return (
    <>
      <div id='currentBank'>Potatoes: {Math.round(count)}</div>
      <div id='store-container'>
        <div id='buy-cursors' onClick={() => buy('cursor')} Title={`0.1 PpS/Each | Current: ${(cursors * 0.1).toFixed(2)} PpS`}>
          <img id='cursor-img' src={cursor}></img><p>Cursors: {cursors}</p>
        </div>
        <div id='buy-cursors' onClick={() => buy('farmer')} Title={`1 PpS/Each | Current: ${(farmers * 1).toFixed(2)} PpS`}>
          <img id='cursor-img' src={farmer}></img><p>Farmers: {farmers}</p>
        </div>
      </div>
      <div id='upgrades-container'>
        Upgrades

      </div>
      <div id='spud'><img 

      src={spud}
      onClick={() => handleSpudClick()}
      
      ></img></div>
    </>
  )
}

export default App
