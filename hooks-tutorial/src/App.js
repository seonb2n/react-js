import './App.css';
import UseStateCounter from "./useState/useStateCounter";
import UseEffectSearchBox from "./useEffect/useEffectSearchBox";
import Parent from "./useContext/parent";
import ReducerCounter from "./useReducer/useReducerCounter";
import GetAverage from "./useMemo/useMemoAverage";
import UseRefButton from "./useRef/useRefButton";

function App() {
  return (
    <div className="App">
        <div>
            <UseStateCounter/>
        </div>
        <div>
            <UseEffectSearchBox />
        </div>
        <div>
            <Parent/>
        </div>
        <div>
            <ReducerCounter />
        </div>
        <div>
            <GetAverage />
        </div>
        <div>
            <UseRefButton />
        </div>
    </div>
  );
}

export default App;
