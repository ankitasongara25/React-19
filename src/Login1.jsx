//*Validation With UseAction.

import './App.css'
import { useActionState } from "react";
function Login1() {

    const handlelogin = (PrevData, formData) => {
        let name = formData.get('name')
        let password = formData.get('password')
        let regex = /^[A-Z 0-9]+$/i;

   
    try{
        if (!name || name.length > 5) {
        return { error: 'Name can not be empty or name should not container more then 5characters',name,password }
    } else if (!regex.test(password)) {
        return { error: 'password can container only number and alphabets',name,password }
    } else {
        return { message: 'Login Done',name,password }
    }
}catch(error){
    console.error(error);
}
     }

const [data, action, pending] = useActionState(handlelogin)
return (
    <div>
        <h2>Validation with useActionState in Reactjs</h2><br />
        {
            data?.message && <span style={{color:'green'}}>{data.message}</span>
        }
        {
            data?.error && <span style={{color:'red'}}>{data.error}</span>
        }
        <form action={action}>
            <input defaultValue={data?.name} type='text' name='name' placeholder='enter username'/><br/><br/>
            <input defaultValue={data?.password} type='text' name='password' placeholder='enter password'/><br/>
            <button>Login</button>
        </form>
    </div>
);
}



export default Login1;