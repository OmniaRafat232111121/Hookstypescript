import CustomHookComponent from "./components/CustomHookCOmponent";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponen";
import UseStateComponent from"./components/UseStateComponent"
function App() {
  return (
    <div>
     <UseStateComponent/>
     <UseEffectComponent/>
      <UseContextComponent/>
      <UseReducerComponent/>
      <UseRefComponent/>
      <CustomHookComponent/>
    </div>
  );
}

export default App;
