import { useEffect, useState } from "react";
import { API } from "../../API/API";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";

const Trade = () => {
  const baseUrl: any = process.env.REACT_APP_BASE_URL;
  const EventSource = EventSourcePolyfill || NativeEventSource;
  const [amount, setAmount] = useState<number>();
  const [dstAddress, setDstAddress] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [id, setId] = useState<string>();

  useEffect(() => {
    console.log(baseUrl);
    const eventSource = new EventSource(`${baseUrl}/stream`, {
      headers: {
        "content-type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
      withCredentials: true,
    });

    eventSource.onopen = (res) => {
      console.log(res);
    };

    eventSource.onmessage = (res) => {
      const jsonData = JSON.parse(res.data);
      console.log(jsonData);
      setId(jsonData.id);
      localStorage.setItem("kkang-id", jsonData.id);
    };

    eventSource.onerror = (res) => {
      console.log(res);
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    //getBalance();
  }, [id]);

  const newTxBtnClick = () => {
    API({
      method: "post",
      url: "/new-tx",
      data: {
        amount: amount,
        dstAdress: dstAddress,
        privateKey: privateKey,
      },
    });
  };

  const getBalance = async () => {
    API({
      method: "post",
      url: "/get-balance",
      data: {
        addr: localStorage.getItem("kkang-public-key"),
      },
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <div>시발 뭐 현재 돈 : 존나 많음</div>
      <div>보낼 돈</div>
      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount === 0 ? undefined : amount}
      />
      UTC(욱트코인)
      <div>보낼 주소</div>
      <input
        type="text"
        onChange={(e) => setDstAddress(e.target.value)}
        value={dstAddress}
      />
      <div>나의 Private Key</div>
      <input
        type="text"
        onChange={(e) => setPrivateKey(e.target.value)}
        value={privateKey}
      />
      <input type="button" onClick={newTxBtnClick} value={"보내기"} />
    </div>
  );
};

export default Trade;
