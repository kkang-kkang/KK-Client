import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { useRecoilState } from "recoil";
import { idState } from "../atoms/state";

export const useStream = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const EventSource = EventSourcePolyfill || NativeEventSource;
  const [id, setId] = useRecoilState<string>(idState);

  const eventSource = new EventSource(`${baseUrl}/stream`, {
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
    console.log(res);
  };

  eventSource.onerror = (res) => {
    console.log(res);
    console.log("error, closed");
    eventSource.close();
  };

  return [id];
};
