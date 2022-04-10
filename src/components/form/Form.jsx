import { useEffect, useState } from 'react';
import useSelectCurrency from '../../hooks/useSelectCurrency';
import { currencies } from './Form.model';
import { FormInputSubmit } from './Form.style';
import { getCryptocurrenciesList } from '../../services/cryptocurrenciesList';
import { ValidationError } from '../validationError/validationError';

const Form = props => {
	const { setCurrencies } = props;
	const [cryptos, setCryptos] = useState([]);
	const [error, setError] = useState(false);

	const [currency, SelectCurrency] = useSelectCurrency(
		'Choose your Currency',
		'Select your Currency',
		currencies
	);
	const [crypto, SelectCrypto] = useSelectCurrency(
		'Choose your Cryptocurrency',
		'Select your Cryptocurrency',
		cryptos
	);

	useEffect(() => {
		getCryptocurrenciesList().then(setCryptos);
	}, []);

	const handleSubmit = e => {
		e.preventDefault();

		if ([currency, crypto].includes('')) {
			setError(true);
			return;
		}

		setError(false);
		setCurrencies({ currency, crypto });
	};

	return (
		<>
			{error && (
				<ValidationError>
					All fields are required. Please select your Currency and Crypto.
				</ValidationError>
			)}
			<form onSubmit={handleSubmit}>
				<SelectCurrency />
				<SelectCrypto />
				<FormInputSubmit type='submit' value='Get Price' />
			</form>
		</>
	);
};

export default Form;
