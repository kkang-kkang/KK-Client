import * as S from "./style";

const generateSnowflakes = () => {
  let snowflakes = [];
  for (let i = 0; i < 180; i++) {
    snowflakes.push(
      <S.Snowflake
        key={i}
        size={Math.random() * 30 + 20}
        style={{
          left: `${Math.random() * 100}vw`,
          animationDelay: `-${Math.random() * 10}s`,
        }}
        speed={Math.random() * 7 + 3}
      />
    );
  }
  return snowflakes;
};

const Background = () => {
  return <S.Container>{generateSnowflakes()}</S.Container>;
};

export default Background;
