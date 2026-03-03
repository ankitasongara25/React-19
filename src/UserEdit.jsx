import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function UserEdit() {
    const { id } = useParams();

    const[Name,setName]=useState('')
    const[Age,setAge]=useState('')
    const[Email,setEmail]=useState('')
    const[Qualification,setQualification]=useState('')
    const url = "http://localhost:3000/users/" + id;
    const navigate = useNavigate();

    useEffect(() => {
        getUserData()

    }, [])
    const getUserData = async () => {

        
        let response=await fetch(url);
        response=await response.json();
        console.log(response);
        setName(response.Name)
        setAge(response.Age)
        setEmail(response.Email)
        setQualification(response.Qualification)
     
    }
    const updateUserData=async()=>{
        console.log(Name,Age,Email,Qualification);
        let response=await fetch(url,{
            method:'Put',
            body:JSON.stringify({Name,Age,Email,Qualification})
        });
        response=await response.json();
        console.log(response)
        if(response){
            alert("User Data Updated")
            navigate('/UserList')
        }
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1 >Edit User Details</h1>
            <input className="input"  type="text" onChange={(event)=>setName(event.target.value)} value={Name} placeholder="enter name" /><br /><br />
            <input className="input" type="text" onChange={(event)=>setAge(event.target.value)} value={Age}  placeholder="enter age" /><br /><br />
            <input className="input" type="text" onChange={(event)=>setEmail(event.target.value)} value={Email} placeholder="enter email" /><br /><br />
            <input className="input" type="text" onChange={(event)=>setQualification(event.target.value)} value={Qualification} placeholder="enter qualification" /><br /><br />
            <button onClick={(event)=>updateUserData(event.target.value)} style={{ backgroundColor: "lightgrey" }}>Edit user</button>
        </div>
    )

}