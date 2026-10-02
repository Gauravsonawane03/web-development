import { useState } from "react";

function Username(){
    const [name,setName]=useState("");
    const [submittedName,setSubmittedName]=useState("");
    const [error,setError]=useState("");
    function Handlesubmit(event){
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
        <form onSubmit={Handlesubmit}>
            <input
            value={name}
            onChange={(event)=>{
                setName(event.target.value);
            }}>
            </input>
            {error && <p>{error}</p>}
            {submittedName && <p>Submitted: {submittedName}</p>}
            <button>submit</button>
        </form>
      </div>
    );

}

export default Username;