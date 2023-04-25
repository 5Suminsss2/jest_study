import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
import Timer from "./component/Timer";

// 스냅샷 : 렌더링된 화면과 찍어놓은 화면이 다를 경우를 감지

// name이 있는 경우와 없는 경우로 나눠서 테스트 진행
const user = {
  name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello user={user} />
        <Timer />
      </header>
    </div>
  );
}

export default App;
