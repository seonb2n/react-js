import {ParentContext} from "./parent";
import {useContext} from "react";

function Children() {
    const data = useContext(ParentContext);

    return (
        <div>
        <p>
            {data}
        </p>
        </div>
    );
}

export default Children;