import { useState } from "react";
import './App.css'

function UserAdd(){
const[Name,setName]=useState('')
const[Age,setAge]=useState('')
const[Email,setEmail]=useState('')
const[Qualification,setQualification]=useState('')

const createUser=async()=>{
    console.log(Name,Age,Email,Qualification);
    const url="http://localhost:3000/users";
    let response =await fetch(url,{
        method:'Post',
        body:JSON.stringify({Name,Age,Email,Qualification})
    });
    response=await response.json();
    if(response){
        alert("New User Added")
    }  
}
    return(
        <div style={{textAlign:"center"}}>
        <h1 >Add New User</h1>
        <input className="input" type="text" onChange={(event)=>setName(event.target.value)} placeholder="enter name" /><br/><br/>
        <input className="input"type="text" onChange={(event)=>setAge(event.target.value)} placeholder="enter age" /><br/><br/>
        <input className="input"type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="enter email" /><br/><br/>
        <input className="input"type="text" onChange={(event)=>setQualification(event.target.value)} placeholder="enter qualification" /><br/><br/>
        <button style={{backgroundColor:"lightgrey"}}onClick={createUser}>Add user</button>
        </div>
    )

}
export default UserAdd;