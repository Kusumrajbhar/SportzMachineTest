import { useState } from "react";
import {useRef} from "react";

const UseRefTest = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(0);
    console.log('ref', ref);
    console.log('count', count);
return (
    <>
    <input type="text" onChange={(e)=>setCount(e.target.value)}/>
    </>
)
}

export default UseRefTest