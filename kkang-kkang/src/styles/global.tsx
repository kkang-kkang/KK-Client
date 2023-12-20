import { Global, css } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    font-display: swap;
    src: local("Pretendard Black"),
      url("/fonts/woff2/Pretendard-Black.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-Black.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    font-display: swap;
    src: local("Pretendard ExtraBold"),
      url("/fonts/woff2/Pretendard-ExtraBold.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-ExtraBold.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url("/fonts/woff2/Pretendard-Bold.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-Bold.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("/fonts/woff2/Pretendard-SemiBold.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url("/fonts/woff2/Pretendard-Medium.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("/fonts/woff2/Pretendard-Regular.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard Light"),
      url("/fonts/woff2/Pretendard-Light.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-Light.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    font-display: swap;
    src: local("Pretendard ExtraLight"),
      url("/fonts/woff2/Pretendard-ExtraLight.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-ExtraLight.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    font-display: swap;
    src: local("Pretendard Thin"),
      url("/fonts/woff2/Pretendard-Thin.woff2") format("woff2"),
      url("/fonts/woff/Pretendard-Thin.woff") format("woff");
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard;
    color: #000;
  }
  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
  a {
    text-decoration-line: none;
  }
  body {
    background-color: #000;
  }

  color: #000;
`;

const Theme = `
  
`;

const GlobalStyle = () => {
  return <Global styles={style}></Global>;
};

export default GlobalStyle;