import { AppContainer, AppHeading, AppImage } from "./App.style";
import CryptoImage from "./img/principal-cryptos.png";
import Form from "./components/form/Form";

function App() {
  return (
    <AppContainer>
      <AppImage src={CryptoImage} alt="cryptos images" />
      <div>
        <AppHeading>Cryptocurrency Exchanger</AppHeading>
        <Form />
      </div>
    </AppContainer>
  );
}

export default App;
