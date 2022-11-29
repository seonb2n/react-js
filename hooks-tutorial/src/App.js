import './App.css';
import UseStateCounter from "./useState/useStateCounter";
import UseEffectSearchBox from "./useEffect/useEffectSearchBox";
import Parent from "./useContext/parent";
import ReducerCounter from "./useReducer/useReducerCounter";
import GetAverage from "./useMemo/useMemoAverage";
import UseRefButton from "./useRef/useRefButton";
import {useState} from "react";
import UseReducerCounter from "./useReducer/useReducerCounter";

function App() {

    const [real, setReal] = useState(true);

  return (
    <div className="App">
        <div>
            {real ? <UseStateCounter /> : <UseReducerCounter/>}
            <UseEffectSearchBox />
        </div>
    </div>
  );
}

export default App;
