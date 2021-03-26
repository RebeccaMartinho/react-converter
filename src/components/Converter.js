import React from 'react';
import './Converter.css'

export default function Converter(props){
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
      <div className="converter">
        <input 
           className="input"         
           type="number"           
           step="0.01"            
           value={amount}
           onChange={onChangeAmount}
           />
      
         <select className="select" value={selectedCurrency} onChange={onChangeCurrency}>
           {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
           ))}         
         </select>
        </div>
  )
}


