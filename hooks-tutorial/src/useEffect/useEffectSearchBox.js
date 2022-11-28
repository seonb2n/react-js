import {useEffect, useState} from "react";

function UseEffectSearchBox() {
    const[word, setWord] = useState("");
    const[box, setBox] = useState("");

    useEffect(() => {
        setBox(word);
    });

    const onChangeName = (e) => {
        e.preventDefault();
        setWord(e.target.value);
    }

    return (
        <div>
            <input value={word} onChange={onChangeName} />
            <p>
                {box}
            </p>
        </div>
    );
}

export default UseEffectSearchBox;