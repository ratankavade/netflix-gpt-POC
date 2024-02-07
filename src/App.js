import { Provider } from "react-redux";
import Body from "./Components/Body";
import userStore from "./Utils/Store/userStore";

function App() {
  return (
    <div className="App">
      <Provider store={userStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
