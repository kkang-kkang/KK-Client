import { RecoilRoot, useRecoilState } from "recoil";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promotion from "./pages/Promotion";
import GlobalStyle from "./styles/global";
import Trade from "./pages/Trade";
import KeyPair from "./pages/key-pair";
import Test from "./pages/Test";
import { easterEgg } from "./atoms/state";
import PromotionPage from "./pages/Promotion/Promotion";

function App() {
  const [ea, setEa] = useRecoilState(easterEgg);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ea ? <Promotion /> : <PromotionPage />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/key-pair" element={<KeyPair />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
