import {useState} from "react";

export default function FComponent(){
    let[list,setList] = useState([
        {
            name:"minh son",
            age:11,
            address:"hanoi"
        },
        {
            name:"minh son",
            age:11,
            address:"hanoi"
        },
        {
            name:"minh son",
            age:11,
            address:"hanoi"
        }
    ])

    let [name,setName] = useState('')
    let[age,setAge] = useState('')
    let[address,setAddress] = useState('')
    return(
        <>
            {list.map((item,ind)=>(
                <h2 key={ind}>{item.name}{item.age}{item.address}</h2>
            ))}
            <input type="text" value={name} onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <input type="text" value={age} onChange={(event)=>{
                setAge(event.target.value)
            }}/>
            <input type="text" value={address} onChange={(event)=>{
                setAddress(event.target.value)
            }}/>
            {/*<input type="text" value={this.state.InputAge} onChange={this.changeAge}/>*/}
            {/*<input type="text" value={this.state.InputAddress} onChange={this.changeAddress}/>*/}
            <button onClick={()=>{
                setList([...list,{
                    name:name,
                    age:age,
                    address: address
                }])
                setName('')
                setAge('')
                setAddress('')
            }}>Thêm</button>


        </>
    )
}