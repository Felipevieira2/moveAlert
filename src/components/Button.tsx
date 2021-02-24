
import { useState } from "react";

interface ButtonProps {
	cor: string,
    children: string
}



export function Button (props: ButtonProps) {
    const [ counter, setCounter ] = useState(0);

    return (
        <button type="button" onClick={()=> setCounter(counter+1)} style={{color: props.cor}}>
            {props.children} <strong>{counter}</strong>           
        </button>
    )
}