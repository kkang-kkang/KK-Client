import { useRecoilState } from "recoil";
import Background from "../../components/background";
import Header from "../../components/header";
import * as S from "./promotionStyle";
import { easterEgg } from "../../atoms/state";

const Promotion = () => {
  const [ea, setEa] = useRecoilState(easterEgg);
  return (
    <S.PromotionContainer>
      <Header />
      <Background />
      <S.H1Box>
        <S.H1>깡깡코인맨</S.H1>
      </S.H1Box>
      <S.prev onClick={() => setEa(false)}>이전으로 돌아가기</S.prev>
    </S.PromotionContainer>
  );
};

export default Promotion;
