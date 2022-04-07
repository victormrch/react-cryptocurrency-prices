import { AppContainer, AppHeading, AppImage } from "./App.style";
import CryptoImage from "./img/principal-cryptos.png";

function App() {
  return (
    <AppContainer>
      <AppImage src={CryptoImage} alt="cryptos images" />
      <AppHeading>Cryptocurrency Exchanger</AppHeading>
    </AppContainer>
  );
}

export default App;
