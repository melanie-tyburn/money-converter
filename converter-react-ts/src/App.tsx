import { useState } from 'react'
import Header from './Components/Header/Header'
import CurrencyList from './Components/CurrencyList/CurrencyList'
import currencies from './data/currencies.ts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <CurrencyList currencies={currencies}/>
    </>
  )
}

export default App
