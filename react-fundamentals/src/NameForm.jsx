import { useState } from "react";

function Nameform(){
    const [name,setName] = useState("");
    const [error, setError] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        if(name.trim()===""){
            setError("Name is required");
            return;
        }
     setError("");
    setSubmittedName(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
             value={name}
             onChange={(event)=>{
                setName(event.target.value);
             }}
            ></input>
            {error && <p>{error}</p>}
            {submittedName && <p>Submitted: {submittedName}</p>}
            <button>submit</button>
            </form>
        </div>
    );
}

export default Nameform;