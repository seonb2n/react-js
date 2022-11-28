import {createContext} from "react";
import Children from "./children";

export const ParentContext = createContext('This is data');

function Parent() {
    return (
        <div>
        <Children/>
        </div>);
}

export default Parent;
