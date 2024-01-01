import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";

export const stream = async () => {
  const EventSource = EventSourcePolyfill || NativeEventSource;
  const baseUrl = process.env.REACT_APP_BASE_URL;

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
    console.log(JSON.parse(res.data));
  };

  eventSource.onerror = (res) => {
    console.log(res);
    console.log("error, closed");
    eventSource.close();
  };
};
