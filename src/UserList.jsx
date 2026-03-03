import {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function UserList() {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const url = "http://localhost:3000/users"
  useEffect(() => {
    setLoading(true)
    getUserData();
  }, [])
  const getUserData = async () => {
    
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response)
    setLoading(false)
}

const deleteUser=async(id)=>{
  let response= await fetch(url+"/"+id,{
    method:'delete'
  });
  response= await response.json();
  console.log(response);
  if(response){
    alert("Record Deleted")
    getUserData();
  }
}
const editUser=(id)=>{
  navigate("/edit/"+id)
}


  return (
      <>{
      !loading ?
      <div>
        <h2>Integrate JSON Server API and Loader</h2>
        <ul className="user-list user-list-head">
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>
          <li>Qualification</li>
          <li>Action</li>
        </ul>
        {
            userData.map((user) => (
              <ul key={user.Name} className="user-list">
                <li>{user.Name}</li>
                <li>{user.Age}</li>
                <li>{user.Email}</li>
                <li>{user.Qualification}</li>
                <li><button style={{backgroundColor:"lightgrey",border:"1px solid #a8a6a6"}} onClick={()=>deleteUser(user.id)}>Delete</button>
                
                <button style={{backgroundColor:"lightgrey",border:"1px solid #c2b5b5"}} onClick={()=>editUser(user.id)}>Edit</button></li>
              </ul>
              
            ))
            }
        
      </div>
    : <h1>Data Loading....</h1>      
    }
    </>
  )}
