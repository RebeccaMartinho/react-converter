import './App.css';

import Converter from './components/Converter'

function App() {
  return (
    <div className="App">
      
      <h1>Conversor de moedas</h1>
      <div className="line">
        <Converter currencyA="USD" currencyB="BRL" />
        <Converter currencyA="BRL" currencyB="USD" />
        </div>
      <div className="line">
        <Converter currencyA="CAD" currencyB="BRL" />
        <Converter currencyA="BRL" currencyB="CAD" />
      </div>
      <div className="line">
        <Converter currencyA="EUR" currencyB="BRL" />
        <Converter currencyA="BRL" currencyB="EUR" />
      </div>
    </div>
    
  );
}

export default App;
