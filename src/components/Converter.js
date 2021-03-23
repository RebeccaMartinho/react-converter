import React, { Component } from 'react';
import './Converter.css'

export default class Converter extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      currencyA_value: "",
      currencyB_value: 0,
    }
    this.convert = this.convert.bind(this);
    
  }

  convert() {
    let from_to = `${this.props.currencyA}_${this.props.currencyB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=f8543ecca1d339d875fa`;

  fetch(url)
  .then(res=>{
    return res.json()
  })
  .then(json=>{
    
    let quotation = json[from_to];
    let currencyB_value =( parseFloat(this.state.currencyA_value) * quotation).toFixed(2);
    this.setState({currencyB_value})

  })
}

  render() {
    return (
      <div className="converter">
        <h2>{this.props.currencyA} para {this.props.currencyB}</h2>
        <input 
          type="text"
          placeholder="Valor a ser convertido" 
          onChange={(event) => {this.setState({currencyA_value:event.target.value})}}>
        </input><br/>
        <button type="button" value="Convert" onClick = {this.convert}>Converter</button>
        
        <h2>Valor convertido: {this.state.currencyB_value}</h2>
      
      </div>
      
    );
  }
}