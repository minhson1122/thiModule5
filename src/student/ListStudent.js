import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent(){
    const [list,setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res=>{
            console.log(res.data)
            setList(res.data)
        })
    }, []);
    // const {state} = useLocation()
    // console.log(state)
    return(
        <>
            <h1>List Student</h1>
            {list.map((item,key)=>{
                return(
                    <h3 key={key}>{item.name},{item.description},{item.action}</h3>
                )
            })}
        </>
    )
}