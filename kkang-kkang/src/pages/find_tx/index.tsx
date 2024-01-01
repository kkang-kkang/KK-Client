import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import * as S from "./style";
import { stream } from "../../function/stream";

interface inputsProps {
  outIdx: number;
  sig: string;
  txHash: string;
}

interface outputsProps {
  addr: string;
  amount: number;
}

const FindTx = () => {
  const params = new URLSearchParams(window.location.search);
  const paramsHash = params.get("hash");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [hash, setHash] = useState<string | null>();
  const [input, setInput] = useState<inputsProps>();
  const [output, setOutput] = useState<outputsProps>();
  const [onSearch, setOnSearch] = useState<boolean>(true);

  useEffect(() => {
    setHash(paramsHash);
    stream();
  }, [paramsHash]);

  const findTx = async () => {
    setOnSearch(false);
    await axios({
      method: "get",
      url: `${baseUrl}/find-tx?hash=${hash}`,
    })
      .then((res) => {
        const _data = res.data;
        console.log(_data.inputs[0]);
        console.log(_data.outputs[0]);
        setInput(_data.inputs[0]);
        setOutput(_data.outputs[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <S.Title>거래 찾기</S.Title>
      <S.FindTx>
        {onSearch ? (
          <>
            <S.Input
              type="text"
              placeholder="Hash 입력하기"
              onChange={(e) => setHash(e.target.value)}
              value={hash ? hash : ""}
            />
            <S.Button onClick={findTx}>검색하기</S.Button>
          </>
        ) : (
          <>
            <S.box>
              <S.title>Inputs</S.title>
              <div>outIdx : {input?.outIdx}</div>
              <div>sig : {input?.sig}</div>
              <div>txHash : {input?.txHash}</div>
            </S.box>
            <S.box>
              <S.title>Outputs</S.title>
              <div>addr : {output?.addr}</div>
              <div>amount : {output?.amount}</div>
            </S.box>
          </>
        )}
      </S.FindTx>
    </>
  );
};

export default FindTx;
