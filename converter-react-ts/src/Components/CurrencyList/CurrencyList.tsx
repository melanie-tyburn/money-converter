import {useState} from 'react'
import './CurrencyList.scss'
import Resultat from '../Result/Result'
interface Currency {
    name: string;
    rate: number;
}
interface CurrencyListProps {
    currencies: Currency[];
}
const CurrencyList = ({currencies} : CurrencyListProps) => {

  const [selectedName, setSelectedName] = useState('United States Dollar');
  const [selectedRate, setSelectedRate] = useState(1.09);

  const handleCurrencyClick = (currency: Currency) => {
    setSelectedName(currency.name)
    setSelectedRate(currency.rate) 
  };
    return (
      <div>
      <div className='currencies'>
        
      <ul>
      <h1 className="currencies-title">Currencies</h1>
        {currencies.map((currency, index) => (
            
          <li key={index} onClick={() => handleCurrencyClick(currency)}>
            <p>{currency.name}</p>
          </li>
          
        ))}
      </ul>
    </div>
      <Resultat name={selectedName} rate={selectedRate}/>
    </div>
    )
}
export default CurrencyList