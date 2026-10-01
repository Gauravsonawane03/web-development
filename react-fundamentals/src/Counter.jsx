import { useState } from "react";

function Counter(){
    const [score,setScore]=useState(0);
    const set=1;
    return(
        <div>
            <h2>Score:{score}</h2>
            <button onClick={()=>{
                setScore(score+set)}}>+</button>
            <button onClick={()=>{if(score>0){
                setScore(score-set)}}}>-</button>
        </div>
    );
}
export default Counter;