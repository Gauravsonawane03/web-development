import { useState } from "react";

function VolumeControl() {
    const[volume,setVolume]=useState(50);
    const step = 10;
    let status;
    if(volume===0){
        status="Muted";
    }else if(volume>=1 && volume<=30){
        status="Low";
    }else if(volume>=31 && volume<=70){
        status="Medium";
    }else if(volume>=71 && volume<=100){
        status="High";
    }
   return (
    <div>
    <h2>Volume: {volume}</h2>
    <p>Status: {status}</p>
   <button onClick={() => {if(volume < 100){
    setVolume(volume + step);}}}>+</button>
   <button onClick={() => {if(volume>0){
        setVolume(volume-step)}}}>-</button>
    </div>
   );

}

export default VolumeControl;