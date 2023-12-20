import { useEffect, useState } from "react";
import * as S from "../style";

const PromotionVideo = () => {
  const [srcIdx, setSrcIdx] = useState<number>(0);
  const [video, setVideo] = useState<HTMLMediaElement | null>(null);
  const src = [
    "https://cdn.discordapp.com/attachments/958684463318061136/1186999502662533190/pexels-rodnae-productions-8369915_1080p.mp4?ex=65954a6e&is=6582d56e&hm=47f843228ed46364d89aeb67034a96483af201339f1f453bb7efdf69916b970e&",
    "https://cdn.discordapp.com/attachments/958684463318061136/1186999503480430742/pexels-cottonbro-7118320_1080p.mp4?ex=65954a6f&is=6582d56f&hm=f24475625b95f5ac9f49f9878b6c2287d64d7d9021ff0e4de624087e813e26b2&",
  ];

  const onEnded = () => {
    console.log("ended");
    if (video) {
      if (srcIdx === 0) {
        setSrcIdx(1);
      } else {
        setSrcIdx(0);
      }
    }
  };

  useEffect(() => {
    const videoElement = document.getElementById("video") as HTMLMediaElement;
    setVideo(videoElement);
  }, []);

  useEffect(() => {
    if (video) {
      video.src = src[srcIdx];
      video.load();
      video.play();
    }
  }, [srcIdx, video]);
  return (
    <S.video onEnded={onEnded} id="video" muted autoPlay>
      <source src={src[srcIdx]} />
    </S.video>
  );
};

export default PromotionVideo;
