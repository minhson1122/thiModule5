import {Link} from "react-router-dom";
import Home from "../page/Home";

export default function Navbar(){
    return(
        <>
            <h1>
                <Link to={'/'}>Home</Link> |
                <Link to={'/admin'}>Admin</Link>
            </h1>
        </>
    )
}