import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import FourthPage from "./components/FourthPage/FourthPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage/>
    </div>
  );
}

export default App;
