import { Link } from "react-router-dom";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { easterEgg } from "../../atoms/state";

const Header = () => {
  return (
    <S.Header>
      <Link to="/">홈</Link>
      <Link to="/key-pair">새 지갑 만들기</Link>
      <Link to="/new-tx">새 거래 만들기</Link>
      <Link to="/find-tx">거래 찾기</Link>
      <Link to="/find-block">블럭 찾기</Link>
      <Link to="/list-block">블럭 리스트</Link>
    </S.Header>
  );
};

export default Header;
