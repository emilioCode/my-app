import { useState, useEffect } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);

    useEffect(()=>{
        console.log(semaforo);
    }, [semaforo]);

    const contar = () =>{
        setCounter(counter+1);
        setSemaforo(!semaforo);
    }
    return (
        <div>
            <p>Counter with React and Hooks</p>
            <p>Counter: {counter}</p>
            {/* <button onClick={()=> setCounter(counter + 1)}>Increment</button> */}
            <button onClick={contar}>Increment</button>
            <p>El semaforo está en {semaforo? "green": "red"}</p>
        </div>
    )
}