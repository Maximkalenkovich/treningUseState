import {useState} from "react";


export const  Mystate = () => {

    const [state, setState] = useState(1)

    function increment() {
        setState(state +3)
    }
    function decrement() {
        setState(state-1)
    }


    return(
        <div>
            <h1>Cchetchik:{state}</h1>
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>DONT</button>
        </div>
            )



}