import { useState, useEffect } from 'react'
import spud from './assets/spud.png'
import cursor from './assets/cursor.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cursors, setCursors] = useState(0)
  const [clock, setClock] = useState(111)

  const handleSpudClick = () => {
    setCount(count + 1)
  }

  const buy = (what) => {
    if (what === 'cursor') {
      setCursors(cursors + 1)
    }
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + cursors * 0.3)
    },clock)
    return () => clearTimeout(timeout)
  },[count,cursors])

  return (
    <>
      <div id='currentBank'>Potatoes: {Math.round(count)}</div>
      <div id='store-container'>
        <div id='buy-cursors' onClick={() => buy('cursor')} Title={"0.1 PpS/Each"}>
          <img id='cursor-img' src={cursor}></img><p>Cursors: {cursors}</p>
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
