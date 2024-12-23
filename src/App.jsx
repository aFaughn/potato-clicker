import { useState, useEffect } from 'react'
import spud from './assets/spud.png'
import cursor from './assets/cursor.png'
import farmer from './assets/farmer.png'
import factory from './assets/factory.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [cursors, setCursors] = useState(0)
  const [cursorMult, setCursorMult] = useState(0.01)
  const [cursorCost, setCursorCost] = useState(10)

  const [farmers, setFarmers] = useState(0)
  const [farmerMult, setFarmerMult] = useState(0.1)
  const [farmerCost, setFarmerCost] = useState(100)

  const [factories, setFactories] = useState(0)
  const [factoryMult, setFactoryMult] = useState(2.5)
  const [factoryCost, setFactoryCost] = useState(700)

  const [clock, setClock] = useState(100)

  const handleSpudClick = () => {
    setCount(count + 1)
  }

  const buy = (item) => {
    if (item === 'cursor') {
      if (count >= cursorCost) {
        setCursors(cursors + 1)
        setCount(count - cursorCost)
        setCursorCost(Math.round(cursorCost * 1.03))
      }
    }
    if (item === 'farmer') {
      if (count >= farmerCost) {
        setFarmers(farmers + 1)
        setCount(count - farmerCost)
        setFarmerCost(Math.round(farmerCost * 1.5))
      }
    }
    if (item === 'factory') {
      if (count >= factoryCost) {
        setFactories(factories + 1)
        setCount(count - factoryCost)
        setFactoryCost(Math.round(factoryCost * 1.10))
      }
    }
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + (cursors * cursorMult) + (farmers * farmerMult) + (factories * factoryMult))
    },clock)
    return () => clearTimeout(timeout)
  },[count,cursors,farmers,factories])

  return (
    <>
      <div id='currentBank'>Potatoes: {Math.round(count)}</div>
      <div id='store-container'>
        <div id='buy-cursors' onClick={() => buy('cursor')} Title={`0.1 PpS/Each | Current: ${((cursors * cursorMult) * 10).toFixed(2)} PpS`}>
          <img id='cursor-img' src={cursor}></img><p>Cursors: {cursors}     Price: {cursorCost}</p>
        </div>
        <div id='buy-cursors' onClick={() => buy('farmer')} Title={`1 PpS/Each | Current: ${((farmers * farmerMult) * 10).toFixed(2)} PpS`}>
          <img id='cursor-img' src={farmer}></img><p>Farmers: {farmers}     Price: {farmerCost}</p>
        </div>
        <div id='buy-cursors' onClick={() => buy('factory')} Title={`25 PpS/Each | Current: ${((factories * factoryMult) * 10).toFixed(2)} PpS`}>
          <img id='cursor-img' src={factory}></img><p>Factories: {factories}     Price: {factoryCost}</p>
        </div>
      </div>
      <div id='upgrades-container'>
        <div className='upgrade' id='t1'>
          <img className='upgradeIcon' src={cursor}></img>
        </div>
        <div className='upgrade' id='t1'>
          <img className='upgradeIcon' src={farmer}></img>
        </div>
      
      </div>
      <div id='spud'><img 

      src={spud}
      onClick={() => handleSpudClick()}
      
      ></img></div>
    </>
  )
}

export default App
