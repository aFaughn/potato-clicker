import { useState, useEffect } from 'react'
import spud from './assets/spud.png'
import cursor from './assets/cursor.png'
import farmer from './assets/farmer.png'
import factory from './assets/factory.png'
import upgrades from './upgrades'
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
    // Buildings
    if (item === 'cursor') {
      if (count >= cursorCost) {
        setCursors(cursors + 1)
        setCount(count - cursorCost)
        setCursorCost(Math.round(cursorCost * 1.08))
      }
    }
    if (item === 'farmer') {
      if (count >= farmerCost) {
        setFarmers(farmers + 1)
        setCount(count - farmerCost)
        setFarmerCost(Math.round(farmerCost * 1.10))
      }
    }
    if (item === 'factory') {
      if (count >= factoryCost) {
        setFactories(factories + 1)
        setCount(count - factoryCost)
        setFactoryCost(Math.round(factoryCost * 1.13))
      }
    }
  }


  // TODO add a tooltip that shows itself on hovering an upgrade to show the cost.
  // Also deduct count for upgrades and remove upgrade from the current pool.
  const buyUpgr = (event) => {
    const upgrade = event.target
    if (upgrade.building === 'cursor') {
      setCursorMult(cursorMult + upgrade.increase)
    }
    if (upgrade.building === 'farmer') {
      setFarmerMult(farmerMult + upgrade.increase)
    }
    if (upgrade.building === 'factory') {
      setFactoryMult(factoryMult + upgrade.increase)
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
        <div id='buy-cursors' onClick={() => buy('cursor')} title={`0.1 PpS/Each | Current: ${((cursors * cursorMult) * 10).toFixed(2)} PpS`}>
          <img id='cursor-img' src={cursor}></img><p>Cursors: {cursors}     Price: {cursorCost}</p>
        </div>
        <div id='buy-cursors' onClick={() => buy('farmer')} title={`1 PpS/Each | Current: ${((farmers * farmerMult) * 10).toFixed(2)} PpS`}>
          <img id='cursor-img' src={farmer}></img><p>Farmers: {farmers}     Price: {farmerCost}</p>
        </div>
        <div id='buy-cursors' onClick={() => buy('factory')} title={`25 PpS/Each | Current: ${((factories * factoryMult) * 10).toFixed(2)} PpS`}>
          <img id='cursor-img' src={factory}></img><p>Factories: {factories}     Price: {factoryCost}</p>
        </div>
      </div>
      <div id='upgrades-container'>
        {upgrades.map((upgr) => (
          <div 
          key={upgr.title}
          className='upgrade' 
          id='t1'
          tier={upgr.tier}
          building={upgr.building}
          cost={upgr.cost}
          increase={upgr.increase}
          title={upgr.title}
          description={upgr.description}
          onClick={(e) => buyUpgr(e)}
          style={{backgroundImage: `url(${upgr.img})`, }}
          >
          </div>

        ))}
      </div>
      <div id='spud'><img 

      src={spud}
      onClick={() => handleSpudClick()}
      
      ></img></div>
    </>
  )
}

export default App
