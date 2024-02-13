import "./App.css";
import Profile from "./component/Profile";
function App() {
  const name = "Maxim";

  const isName = true;
  return (
    <>
      <div className="App">
        <h1>{isName ? name : "someone"}</h1>
        <Profile />
      </div>
      <div>Hi</div>
      <div>Hello React</div>
    </>
  );
}

export default App;
