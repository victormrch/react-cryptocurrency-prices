import { AppContainer, AppHeading, AppImage } from "./App.style";
import CryptoImage from "./img/principal-cryptos.png";
import Form from "./components/form/Form";
import Result from "./components/Result/Result";
import { useState, useEffect } from "react";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [result, setResult] = useState({});

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const cryptoPrice = async () => {
        const { currency, crypto } = currencies;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result.DISPLAY[crypto][currency]);
      };
      cryptoPrice();
    }
  }, [currencies]);

  return (
    <AppContainer>
      <AppImage src={CryptoImage} alt="cryptos images" />
      <div>
        <AppHeading>Cryptocurrency Exchanger</AppHeading>
        <Form setCurrencies={setCurrencies} />
        {result.PRICE && <Result result={result} />}
      </div>
    </AppContainer>
  );
}

export default App;
