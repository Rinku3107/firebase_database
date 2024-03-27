import React, { useEffect, useState } from 'react'
import {database} from './Config'
import{addDoc, collection, doc, getDocs} from 'firebase/firestore'


function Fire()
{
     const [fname, setFname] = useState('');
     const [lname, setLname] = useState('');
     const [val, setVal]=useState([])

     const value = collection(database, "EmpData") 
     const handelCreate =async()=>{
      await  addDoc(value,{name1:fname,name2:lname})
      setFname("");
      setLname("");

     }

     useEffect(()=>{
        const getData = async()=>{
            const dbvalue= await getDocs(value);
            setVal(dbvalue.docs.map(doc=>({...doc.data(),id:doc.id})))  
        }
        getData();
     },[])

    return(
        <div>
            <input type="text" placeholder="FisrtName" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
            <input type="text" placeholder="lastName" value={lname} onChange={(e)=>setLname(e.target.value)}></input>
            <button onClick={handelCreate}>Submit</button>

            {val.map(value=>
                    <div>
                    <h1>{value.name1}</h1>
                    <h1>{value.name2}</h1>
                    </div>
                    )
            }
        </div>
    )
}
export default Fire;