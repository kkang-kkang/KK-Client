import axios from "axios";
import { useState } from "react";

interface dataType {
  private_key: string;
  public_key: string;
}

const KeyPair = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [onData, setOnData] = useState<boolean>(false);
  const [data, setData] = useState<dataType>();

  const onKeyPairClick = async () => {
    const _response = await axios({
      method: "get",
      url: `${baseUrl}/key-pair`,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
      setOnData(true);
      localStorage.setItem("kkang-public-key", res.data.public_key);
    });
  };

  return (
    <div>
      <input type="button" onClick={onKeyPairClick} value={"ㅇㄴㅁㄹㄴㅇㄹ"} />
      {onData ? (
        <>
          <div>
            당신의 Private Key는 {data?.private_key}입니다! 저장해두세요!
          </div>
          <div>
            당신의 Public Key는 {data?.public_key}입니다! 로컬에 저장은
            되어있지만, 저장해두시기를 권장해요!
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default KeyPair;
