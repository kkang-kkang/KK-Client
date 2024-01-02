import * as S from "./style";
import PromotionVideo from "./PromotionVideo";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { easterEgg } from "../../atoms/state";

const PromotionPage = () => {
  const [clicks, setClicks] = useState<number>(0);
  const [ea, setEa] = useRecoilState(easterEgg);

  useEffect(() => {
    if (clicks == 30) {
      setEa(true);
    }
  }, [clicks]);

  return (
    <S.Promotion>
      <S.PromotionContainer>
        <Header />
        <div>
          <S.PromotionTitle onClick={() => setClicks(clicks + 1)}>
            KKANG KKANG COIN
          </S.PromotionTitle>
          <S.PromotionDesc>
            이제는, 블록체인 기반의 깡깡코인을 경험해볼 시간.
          </S.PromotionDesc>
        </div>
        <div>
          <S.A>
            <Link to="/key-pair">지갑 만들러가기</Link>
          </S.A>
          <S.Adesc>
            <Link to="/new-tx">이미 지갑이 있습니까? 바로 거래 시작하기</Link>
          </S.Adesc>
        </div>
      </S.PromotionContainer>
      <PromotionVideo />
    </S.Promotion>
  );
};

export default PromotionPage;
