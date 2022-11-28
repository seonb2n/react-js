import {useState} from "react";

function UseStateCounter() {
    const[counter, setCounter] = useState(0);

    const addCounter = (e) => {
        e.preventDefault();
        setCounter(counter+1);
    }

    return (
        <div>
            <button onClick={addCounter}>Click me! </button>
            <p>
                {counter}
            </p>
        </div>
    );
}

export default UseStateCounter;