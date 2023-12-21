import { useEffect, useState } from "react";
import * as S from "./style";
import PromotionVideo from "./PromotionVideo";
import { Link } from "react-router-dom";

const PromotionPage = () => {
  return (
    <S.Promotion>
      <S.PromotionContainer>
        <S.Header>
          <Link to="">새 거래 만들기</Link>
          <Link to="">거래 찾기</Link>
          <Link to="">블럭 찾기</Link>
          <Link to="">블럭 리스트</Link>
          <Link to="">프로필</Link>
        </S.Header>
        <div>
          <S.PromotionTitle>KKANG KKANG COIN</S.PromotionTitle>
          <S.PromotionDesc>
            이제는, 볼록체인 기반의 깡깡코인을 경험해볼 시간.
          </S.PromotionDesc>
        </div>
        <div>
          <S.A>
            <Link to="/key-pair">지갑 만들러가기</Link>
          </S.A>
          <S.Adesc>
            <Link to="/trade">이미 지갑이 있습니까?</Link>
          </S.Adesc>
        </div>
      </S.PromotionContainer>
      <PromotionVideo />
    </S.Promotion>
  );
};

export default PromotionPage;
