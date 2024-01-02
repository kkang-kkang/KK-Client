import { useRecoilState } from "recoil";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Promotion from "./pages/Promotion";
import GlobalStyle from "./styles/global";
import KeyPair from "./pages/key-pair";
import { easterEgg } from "./atoms/state";
import PromotionPage from "./pages/Promotion/Promotion";
import NewTx from "./pages/New-tx";
import FindTx from "./pages/find_tx";
import FindBlock from "./pages/find_block";
import ListBlock from "./pages/list_block";

function App() {
  const [ea, setEa] = useRecoilState(easterEgg);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ea ? <Promotion /> : <PromotionPage />} />
          <Route path="/new-tx" element={<NewTx />} />
          <Route path="/key-pair" element={<KeyPair />} />
          <Route path="/find-tx" element={<FindTx />} />
          <Route path="/find-block" element={<FindBlock />} />
          <Route path="/list-block" element={<ListBlock />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
