import { useState } from "react"

export default function Counter(){
    const [counter,setCounter] = useState(0)
    return(
        <div className="counter">
            <button onClick={e=>setCounter(counter=> counter + 1)} id="count">Click {counter} times</button>
       </div>
    )
}