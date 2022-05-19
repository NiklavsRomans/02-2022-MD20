import { useState } from 'react';
import './App.scss';
import CurrencyButton from './components/currencybutton/CurrencyButton';
import SelectedCurrencyBox from './components/selectedcurrencybox/SelectedCurrencyBox';
import Currencies from './data/Currencies';

const App = () => {
  // State
  const [currencies, setCurrencies] = useState(Currencies);

  // Handler

  const handleSelect = (i: number) => {
    const newCurrencies = [...currencies];
    newCurrencies[i].selected = !newCurrencies[i].selected;
    setCurrencies(newCurrencies);
  };

  return (
    <div className="App">
      <div className="currency__box">
        <div className="currency__box--wrapper">
          {currencies.map(({ currency, selected }, i) => (
            selected && (
              <SelectedCurrencyBox title={currency} onClick={() => handleSelect(i)} />
            )
          ))}
        </div>
        <div className="currency__box--wrapper">
          {currencies.map(({ currency, selected }, i) => (
            <CurrencyButton selected={selected} title={currency} onClick={() => handleSelect(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
