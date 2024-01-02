import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import * as S from "./style";
import { stream } from "../../function/stream";

interface resProps {
  curHash: string;
  prevHash: string;
  timestamp: string;
  txCount: number;
}

const ListBlock = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [hash, setHash] = useState<string>();
  const [count, setCount] = useState<number>();
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [res, setRes] = useState<resProps[]>();

  useEffect(() => {
    stream();
  }, []);

  const listBlock = async () => {
    await axios({
      method: "post",
      url: `${baseUrl}/list-block?head=${hash}&count=${count}`,
    }).then((res) => setRes(res.data));
  };

  const btnOnClick = () => {
    if (hash && count) {
      listBlock();
      setOnSearch(true);
    }
  };

  return (
    <S.Container>
      <Header />
      <S.Title>블록 리스트</S.Title>
      {onSearch && res ? (
        res.map((res, index) => {
          return (
            <S.Flex>
              <S.Header>curHash : {res?.curHash}</S.Header>
              <S.Header>prevHash : {res?.prevHash}</S.Header>
              <S.Header>timestamp : {res?.timestamp}</S.Header>
              <S.Header>txCount : {res?.txCount}</S.Header>
            </S.Flex>
          );
        })
      ) : (
        <S.container>
          <S.Input
            type="text"
            placeholder="Head Hash 값 입력"
            onChange={(e) => setHash(e.target.value)}
          />
          <S.Input
            type="number"
            placeholder="Count 값 입력"
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <S.Button onClick={btnOnClick}>검색하기</S.Button>
        </S.container>
      )}
    </S.Container>
  );
};

export default ListBlock;
