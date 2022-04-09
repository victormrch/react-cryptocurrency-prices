export const getCryptocurrenciesList = async () => {
  const result = await fetch(
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
  ).then((r) => r.json());

  const arrayCryptos = result.Data.map((crypto) => {
    const cryptoList = {
      id: crypto.CoinInfo.Name,
      name: crypto.CoinInfo.FullName,
    };
    return cryptoList;
  });
  return arrayCryptos;
};
