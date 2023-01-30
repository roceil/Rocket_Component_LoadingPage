import { Loader } from "../style/Loader";

function LoadingPage(props: any) {
  const { txt, txtSize, transitionTime, bgColor,fontColor,loadingColor } = props;

  const backgroundColor = {
    backgroundColor: bgColor,
    animation: "opacity 1.5s linear infinite"
  };

  return (
    <div
    id="loadingPage"
      className="text-white flex flex-col justify-center items-center h-full bg-black z-50 relative"
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
