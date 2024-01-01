import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header";
import * as S from "./style";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { Link } from "react-router-dom";

interface massageProps {
  data: string;
  id: string;
  nickname: string;
}

const NewTx = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [amount, setAmount] = useState<number>();
  const [balance, setBalance] = useState<number | undefined>(undefined);
  const [dstAddress, setDstAddress] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const EventSource = EventSourcePolyfill || NativeEventSource;
  const [streamres, setStreamres] = useState<massageProps>();

  useEffect(() => {
    stream();
    getBalance();
  }, []);

  const stream = async () => {
    const eventSource = await new EventSource(`${baseUrl}/stream`, {
      headers: {
        "content-type": "application/json",
      },
    });

    eventSource.onopen = (res) => {
      console.log(baseUrl);
      console.log(res);
      console.log("stream");
    };

    eventSource.onmessage = (res) => {
      setStreamres(JSON.parse(res.data));
      console.log(JSON.parse(res.data));
    };

    eventSource.onerror = (res) => {
      console.log(res);
      console.log("error, closed");
      eventSource.close();
    };
  };

  const newTxBtnClick = () => {
    newTx();
  };

  const newTx = async () => {
    await axios({
      method: "post",
      url: `${baseUrl}/new-tx`,
      data: {
        amount: amount,
        dstAddress: dstAddress,
        privateKey: privateKey,
      },
    })
      .then((res) => {
        console.log(res);
        if (balance && amount) {
          setBalance(balance - amount);
        }
      })
      .catch((err) => console.log(err));
  };

  const getBalance = async () => {
    const publicKey = localStorage.getItem("kkang-public-key");
    await axios({
      method: "get",
      url: `${baseUrl}/get-balance?addr=${publicKey}`,
    }).then((res: any) => {
      setBalance(res.data.balance);
    });
  };

  return (
    <>
      <Header />
      <S.Title>거래 만들기</S.Title>
      <S.NewTx>
        <S.Balance>현재 보유 코인량 : {balance ? balance : 0}</S.Balance>
        <S.InputDesc>누구에게 코인을 보낼까요?</S.InputDesc>
        <S.Input
          type="text"
          onChange={(e) => setDstAddress(e.target.value)}
          value={dstAddress}
          placeholder="받는 이의 Public Key 입력"
        />
        <S.InputDesc>보낼 돈</S.InputDesc>
        <div>
          <S.Input
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount === 0 ? undefined : amount}
            placeholder="보낼 양을 입력"
          />
          <S.danwe>KKC(깡깡코인)</S.danwe>
        </div>
        <S.InputDesc>나의 Private Key</S.InputDesc>
        <S.Input
          type="text"
          onChange={(e) => setPrivateKey(e.target.value)}
          value={privateKey}
          placeholder="나의 Private Key 입력"
        />
        <S.Button type="button" onClick={newTxBtnClick} value={"보내기"} />
      </S.NewTx>
      <S.Hash>
        <Link to={streamres?.data ? `/find-tx?hash=${streamres?.data}` : ""}>
          생성된 Hash : {streamres?.data}
        </Link>
        {streamres?.data ? <S.Button type="button" value={"바로가기"} /> : ""}
      </S.Hash>
    </>
  );
};

export default NewTx;
