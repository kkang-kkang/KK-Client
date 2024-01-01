import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../components/header";
import { stream } from "../../function/stream";

interface bodyProps {
  coinbaseTxHash: string;
  txHashes: txHashes[];
}
type txHashes = string;

interface headerProps {
  curHash: string;
  dataHash: string;
  difficulty: number;
  nonce: number;
  prevHash: string;
  timestamp: Date;
}

interface blockProps {
  header: headerProps;
  body: bodyProps;
}

type blockType = {
  data: blockProps;
};

const FindBlock = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [hash, setHash] = useState<string>();
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [header, setHeader] = useState<headerProps>();
  const [body, setBody] = useState<bodyProps>();

  useEffect(() => {
    stream();
  }, []);

  const findBlock = async () => {
    await axios({
      method: "get",
      url: `${baseUrl}/find-block?hash=${hash}`,
    }).then((res: blockType) => {
      console.log(res.data);
      setBody(res.data.body);
      setHeader(res.data.header);
    });
  };

  return (
    <>
      <Header />
      <S.Title>불럭 찾기</S.Title>
      <S.Container>
        {onSearch ? (
          <>
            <div>
              <S.Header>header</S.Header>
              <div>prevhash : {header?.prevHash}</div>
              <div>curhash : {header?.curHash}</div>
              <div>nexthash : {header?.dataHash}</div>
              <div>difficulty : {header?.difficulty}</div>
              <div>nonce : {header?.nonce}</div>
              <div>timestamp : {String(header?.timestamp)}</div>
            </div>
            <div>
              <S.Header>Body</S.Header>
              <div>coinbaseTxHash : {body?.coinbaseTxHash}</div>
              <div>txHashes : {body?.txHashes}</div>
            </div>
            <S.Button onClick={() => setOnSearch(false)}>
              다시 검색하기
            </S.Button>
          </>
        ) : (
          <>
            <S.Input
              type="text"
              placeholder="Hash 입력"
              onChange={(e) => setHash(e.target.value)}
            />
            <S.Button
              onClick={() => {
                findBlock();
                setOnSearch(true);
              }}
            >
              검색하기
            </S.Button>
          </>
        )}
      </S.Container>
    </>
  );
};

export default FindBlock;
