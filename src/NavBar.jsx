//Simpal Navigation Bar 
import { Link } from "react-router-dom"
import './header.css'

export default function NavBar() {
    return <div className="header">
       <div>
        <Link className="link" to="/"><h2>Logo</h2></Link>

       </div>
       <div>
        <ul>
            <li>
                <Link className="link" to="/image">Image</Link>
            </li>
            <li>
                <Link className="link" to="/Contact">Contact</Link>
            </li>
            <li>
                <Link className="link" to="/help">Help </Link>
            </li>
            <li>
                <Link className="link" to="/college">College </Link>
            </li>
        </ul>

       </div>
    </div>
}