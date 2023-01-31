import { useState } from "react";
import { Loader } from "./style/Loader";

interface Props {
  txt: string;
  txtSize: string;
  transitionTime: string;
  bgColor: string;
  fontColor: string;
  loadingColor: string;
  isLoading: boolean;
  delayTime: number;
}
function LoadingPage({
  txt,
  txtSize,
  transitionTime,
  bgColor,
  fontColor,
  loadingColor,
  isLoading,
  delayTime,
}: Props) {
  const [result, setResult] = useState("opacity-100");

  if (isLoading === false) {
    setTimeout(() => {
      setResult("animate-wiggle opacity-0");
    }, delayTime);
  }

  const backgroundColor = {
    backgroundColor: bgColor,
  };

  return (
    <div
      className={`text-white flex flex-col justify-center items-center h-full  bg-black z-50 relative ${result}`}
      style={backgroundColor}
    >
      <Loader
        txt={txt}
        txtSize={txtSize}
        transitionTime={transitionTime}
        fontColor={fontColor}
        loadingColor={loadingColor}
      >
        {txt}
      </Loader>
    </div>
  );
}

export default LoadingPage;
