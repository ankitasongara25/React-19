//Simple Validation (Use to Multiple State)
import './App.css'
import { useState } from "react";
function Login() {
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState('');

    const handleName = (event) => {
        console.log(event.target.value);
        if (event.target.value.length > 5) {
            setNameErr("Please Enter Valid Username,Only 5 characters allowed")
        } else {
            setNameErr()
        }
    }
    const handlePass = (event) => {
        let regex = /^[A-Z 0-9]+$/i;
        if (regex.test(event.target.value)) {
            setPassErr()
        } else {
            setPassErr("Please Enter Valid Password")
        }
    }
    return (
        <>
            <h2>It's My First Login Page.</h2><br />
            <input className={nameErr ? 'error' : ''} onChange={handleName} type="text" placeholder="Please Enter User First Name" /><br />
            <span className='red-Color'>{nameErr && nameErr}</span><br /><br />

            <input className={passErr ? 'error' : ''} onChange={handlePass} type="password" placeholder="Please Enter Password" /><br />
            <span className='red-Color'>{passErr && passErr}</span><br /><br />
            <button disabled={nameErr || passErr} style={{ backgroundColor: "lightgray" }}>Login</button>
        </>
    )
}
export default Login;