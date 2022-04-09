import { useEffect, useState } from "react";
import useSelectCurrency from "../../hooks/useSelectCurrency";
import { currencies } from "./Form.model";
import { FormInputSubmit } from "./Form.style";
import { Error } from "../ValidationError/Error.component";

const Form = (props) => {
  const { setCurrencies } = props;
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectCurrency(
    "Choose your Currency",
    "Select your Currency",
    currencies
  );
  const [crypto, SelectCrypto] = useSelectCurrency(
    "Choose your Cryptocurrency",
    "Select your Cryptocurrency",
    cryptos
  );

  useEffect(() => {
    const requestAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const res = await fetch(url);
      const result = await res.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const cryptoList = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return cryptoList;
      });
      setCryptos(arrayCryptos);
    };
    requestAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currency, crypto].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setCurrencies({ currency, crypto });
  };

  return (
    <>
      {error && (
        <Error>
          All fields are required. Please select your Currency and Crypto.
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCrypto />
        <FormInputSubmit type="submit" value="Get Price" />
      </form>
    </>
  );
};

export default Form;
