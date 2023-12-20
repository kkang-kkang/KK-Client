import { useEffect, useState } from "react";
import * as S from "./style";
import PromotionVideo from "./PromotionVideo";

const PromotionPage = () => {
  return (
    <S.Promotion>
      <S.PromotionContainer>
        <S.PromotionTitle>KKANG KKANG COIN</S.PromotionTitle>
        <S.PromotionDesc>깡깡코인의 매력에 빠지던가</S.PromotionDesc>
      </S.PromotionContainer>
      <PromotionVideo />
    </S.Promotion>
  );
};

export default PromotionPage;
