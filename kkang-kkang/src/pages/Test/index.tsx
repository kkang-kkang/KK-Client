import { useEffect, useState } from "react";
import { API } from "../../API/API";

const Test = () => {
  const sid = "WFdgrh2Xwl85EHyDAAAB";
  const [nickname, setNickname] = useState<string>();

  useEffect(() => {
    getNick();
  }, []);

  const getNick = async () => {
    const _response = await API({
      method: "get",
      url: `/nodes/${sid}`,
    });
    setNickname(_response.data.nickname);
  };

  return (
    <div>
      <div>sid 값 : {sid}</div>
      <div>GetNickName 반환값 : {nickname}</div>
    </div>
  );
};

export default Test;
