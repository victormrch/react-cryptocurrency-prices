export const getCryptoPrices = async (currency, crypto) => {
	const result = await fetch(
		`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
	).then(r => r.json());

	return result.DISPLAY[crypto][currency];
};
