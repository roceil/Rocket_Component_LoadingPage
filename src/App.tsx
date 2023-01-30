import { useQuery } from "react-query";
import Index from "./pages/Index";
import LoadingPage from "./components/LoadingPage";
import FetchResult from "./components/FetchResult";

const fetchAPI = async () => {
  const res = await fetch("https://jsonplaceholder999.typicode.com/todos/1");
  const data = res.json();
  return data;
};

function App() {
  const { data, isLoading, isSuccess } = useQuery("jsonPlaceholder", fetchAPI);
  const checkLoading = isLoading === true ? <LoadingPage /> : "";
  const checkFetch = isSuccess === true ? <Index /> : <FetchResult />;

  return (
    <>
      <LoadingPage
        txt={"顆顆想回家..."}
        txtSize={"60px"}
        transitionTime={"5s"}
        bgColor={"#191970"}
        fontColor={"#FFFFFF"}
        loadingColor={"#C0C0C0"}
      />
      {/* {checkLoading}
    {checkFetch} */}
    </>
  );
}

export default App;
