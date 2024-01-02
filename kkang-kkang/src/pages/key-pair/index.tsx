import axios from "axios";
import { useState } from "react";
import * as S from "./style";
import Header from "../../components/header";

interface dataType {
  private_key: string;
  public_key: string;
}

const KeyPair = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [onData, setOnData] = useState<boolean>(false);
  const [data, setData] = useState<dataType | undefined>();

  const onKeyPairClick = async () => {
    await axios({
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

  const onCopyBtnClick = (privateKey: string) => {
    navigator.clipboard.writeText(privateKey);
  };

  return (
    <>
      {" "}
      <Header />
      <S.KeyPairContainer>
        {onData && data ? (
          <>
            <S.privateKey>
              당신의 Private Key는{" "}
              <S.ValueOutput
                length={data.private_key.length}
                value={data?.private_key}
                height={1}
              />
              입니다! 저장해두세요!
              <S.Button
                className="private"
                onClick={() =>
                  data.private_key && onCopyBtnClick(data.private_key)
                }
              >
                Copy!
              </S.Button>
            </S.privateKey>
            <S.privateKey>
              당신의 Public Key는{" "}
              <S.ValueOutput
                height={2}
                length={data.public_key.length}
                value={data?.public_key}
              />
              입니다!
              <br /> 로컬에 저장은 되어있지만, 저장해두시기를 권장해요!
              <S.Button
                className="private"
                onClick={() =>
                  data.private_key && onCopyBtnClick(data.public_key)
                }
              >
                Copy!
              </S.Button>
            </S.privateKey>
          </>
        ) : (
          <S.Button onClick={onKeyPairClick}>지갑 발급받기</S.Button>
        )}
      </S.KeyPairContainer>
    </>
  );
};

export default KeyPair;
