import { AppContainer, AppHeading, AppImage } from './App.style';
import CryptoImage from './img/principal-cryptos.png';
import Form from './components/Form/Form.component';
import Result from './components/Result/Result.component';
import { useState, useEffect } from 'react';
import { getCryptoPrices } from './services/cryptocurrenciesPrices';

function App() {
	const [currencies, setCurrencies] = useState({});
	const [result, setResult] = useState({});

	const { currency, crypto } = currencies;

	useEffect(() => {
		if (Object.keys(currencies).length > 0) {
			getCryptoPrices(currency, crypto).then(setResult);
		}
	}, [currencies]);

	return (
		<AppContainer>
			<AppImage src={CryptoImage} alt='cryptos images' />
			<div>
				<AppHeading>Cryptocurrency Exchanger</AppHeading>
				<Form setCurrencies={setCurrencies} />
				{result.PRICE && <Result result={result} />}
			</div>
		</AppContainer>
	);
}

export default App;
