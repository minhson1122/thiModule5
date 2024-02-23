import {Link, Outlet} from "react-router-dom";
import Navbar from "../component/Navbar";

export default function Home(){
    return(
        <>
            <Navbar></Navbar>
            <Link to={'/students'}>List Student</Link> |
            <Link to={'/create-student'}>Create Student</Link> |
            <Link to={'/edit-student'}>Edit Student</Link>
            <Outlet></Outlet>
        </>
    )
}