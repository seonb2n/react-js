import {useState} from "react";

function UseStateCounter() {
    const[counter, setCounter] = useState(0);

    const [변수, set변수] = useState("초깃값");

    const addCounter = (e) => {
        e.preventDefault();
        set변수(변수 + "2");
    };

    return (
        <div>
            <button onClick={addCounter}>Click me! </button>
            <p>
                {변수}
            </p>
        </div>
    );
}

export default UseStateCounter;