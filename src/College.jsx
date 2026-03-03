import { Link, NavLink,Outlet} from "react-router-dom";
import './App.css'

function College(){
    return<div className="college" style={{textAlign:'center'}}>
        <h2>This is a College Page.</h2>
        <NavLink className="link" to="student">Student</NavLink>
        <Link to="data">Data</Link>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="details">Details</NavLink>
        <Outlet></Outlet>
        

        </div>

    
}
export default College;