import { useQuery } from "react-query";
import FetchSuccess from "./components/LoadingPage/FetchSuccess";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import FetchResult from "./components/LoadingPage/FetchFail";

const fetchAPI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = res.json();
  return data;
};

function App() {
  const { data, isLoading, isSuccess } = useQuery("jsonPlaceholder", fetchAPI, {
    refetchOnWindowFocus: false,
  });

  const checkFetch = isSuccess === true ? <FetchSuccess /> : <FetchResult />;

  return (
    <>
      <LoadingPage
        txt={"可以更改文字..."}
        txtSize={"60px"}
        transitionTime={"1.5s"}
        bgColor={"#191970"}
        fontColor={"#FFFFFF"}
        loadingColor={"#C0C0C0"}
        isLoading={isLoading}
        delayTime={2000}
      />
      {checkFetch}
    </>
  );
}

export default App;
