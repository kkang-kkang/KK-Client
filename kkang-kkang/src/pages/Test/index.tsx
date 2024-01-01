import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header";

const Test = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const sid = "WFdgrh2Xwl85EHyDAAAB";
  const [balance, setBalance] = useState<number>();

  useEffect(() => {
    getNick();
  }, []);

  const getNick = async () => {
    const publicKey = localStorage.getItem("kkang-public-key");
    await axios({
      method: "get",
      url: `${baseUrl}/get-balance?addr=${publicKey}`,
    }).then((res) => setBalance(res.data.balance));
  };

  return (
    <div>
      <Header />
      <div>보유 자산 : {balance}</div>
    </div>
  );
};

export default Test;
