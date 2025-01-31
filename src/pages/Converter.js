import React, { useState, useEffect } from 'react';
import CurrencyTrend from '../components/CurrencyTrend';
import './index.scss';

const Converter = () => {
const [amount, setAmount] = useState(1);
const [fromCurrency, setFromCurrency] = useState(() => localStorage.getItem('fromCurrency') || 'USD');
const [toCurrency, setToCurrency] = useState(() => localStorage.getItem('toCurrency') || 'EUR');
const [convertedAmount, setConvertedAmount] = useState(null);
const [currencies, setCurrencies] = useState([]); 

//Restore the user’s selection
useEffect(() => {
  const savedFromCurrency = localStorage.getItem('fromCurrency') || 'USD';
  const savedToCurrency = localStorage.getItem('toCurrency') || 'EUR';
  console.log('Restoring from localStorage:', savedFromCurrency, savedToCurrency);
  setFromCurrency(savedFromCurrency);
  setToCurrency(savedToCurrency);
}, []);

//Get the list of currencies
useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch(`https://api.exchangerate.host/list?access_key=3d4740fd3ba81cf5c5fa917916059a3b`);
        const data = await res.json();
        if (data.success) {
          setCurrencies(Object.keys(data.currencies));
        } else {
          console.error('Failed to fetch currency list:', data.error);
        }
      } catch (error) {
        console.error('Error fetching currencies:', error);
      } 
    };
    fetchCurrencies();
  }, []);

//Get the exchange rate and calculate the result
useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(`https://api.exchangerate.host/convert?access_key=${process.env.REACT_APP_API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
        const data = await res.json();
        if (data.success) {
          setConvertedAmount(data.result);
        } else {
          console.error('Failed to fetch conversion rate:', data.error);
          setConvertedAmount(null); 
        }
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
        setConvertedAmount(null); 
      }
    };
    fetchRate();
    //Save the user’s selection to localStorage
    console.log('Saving to localStorage:', fromCurrency, toCurrency);
    localStorage.setItem('fromCurrency', fromCurrency);
    localStorage.setItem('toCurrency', toCurrency);
  }, [fromCurrency, toCurrency, amount]);
  
  return (
    <div className="container">
      <h1>Currency Converter</h1>
      {/* Enter the amount to convert */}
      <div className="form-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount"
        />
        {/* Select the currencies */}
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>convert to</span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {/* Currency conversion result display area */}
      <h2>
      Conversion Result: {convertedAmount !== null ? `${convertedAmount} ${toCurrency}` : 'Unable to retrieve the exchange rate, please try again later.'}
      </h2>
      {/* trend chart */}
      <CurrencyTrend fromCurrency={fromCurrency} toCurrency={toCurrency} />
    </div>
  );
}

export default Converter;
