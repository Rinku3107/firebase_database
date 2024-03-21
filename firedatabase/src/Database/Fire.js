import React, { useState } from 'react'


function Fire()
{
     const [fname, setFname] = useState('');
     const [lname, setLname] = useState('');


    return(
        <div>
            <input type="text" placeholder="FisrtName" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
            <input type="text" placeholder="lastName" value={lname} onChange={(e)=>setLname(e.target.value)}></input>
            <button></button>
        </div>
    )
}
export default Fire;