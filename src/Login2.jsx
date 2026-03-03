//Use Reducer Hook 

import { useReducer } from "react";

const emptyData = {
    name: '',
    password: '',
    email: '',
    city: '',
    address: ''
}
const reducer = (data, action) => {
    return { ...data, [action.type]: action.val }
}
function Login2() {
    const [state, dispatch] = useReducer(reducer, emptyData)
    console.log(state);

    return (
        <div >
            <h3>Use Reducer Hook</h3>
            <input className="text" type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'name' })} placeholder="enter name" /><br /><br />
            <input className="text" type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'password' })} placeholder="enter password" /><br /><br />
            <input className="text" type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'email' })} placeholder="enter email" /><br /><br />
            <input className="text" type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'city' })} placeholder="enter city" /><br /><br />
            <input className="text" type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'address' })} placeholder="enter address" /><br /><br />
            <ul>
                <li><b>Name:</b>{state.name}</li>
                <li><b>Password:</b>{state.password}</li>
                <li><b>Email:</b>{state.email}</li>
                <li><b>City:</b>{state.city}</li>
                <li><b>Address:</b>{state.address}</li>
            </ul>
            <button className="textBt" onClick={() => console.log(state)}>Add Details</button>
        </div>

    )


}
export default Login2;