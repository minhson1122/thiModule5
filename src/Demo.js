import {Component} from "react";
import {logDOM, render} from "@testing-library/react";
import Insite from "./insite";
import axios from "axios";

export default class Demo extends Component{
    constructor() {
        super();
        this.state = {
            list:[{
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
            }],
            InputName:'',
            InputAge:'',
            InputAddress:'',
        }

    }

    // componentDidMount() {
    //     axios.get('http://localhost:8080/api/prisoners').then(x=>{
    //         this.setState({list:x.data})
    //     })
    // }
    add = ()=>{

            this.setState((state)=>{
                return{
                    list:[...state.list,{name:state.InputName, age:state.InputAge, address:state.InputAddress}],
                    InputName:',',
                    InputAge:',',
                    InputAddress:','
                }
            })
    }

    changeName = (event)=>{
            this.setState({
                InputName:event.target.value
            })
    }
    changeAge = (event)=>{
            this.setState({
                InputAge:event.target.value
            })
    }
    changeAddress = (event)=>{
            this.setState({
                InputAddress:event.target.value
            })

    }

    render() {
        return(
            <>
                {this.state.list.map((item,ind)=>(
                    <h2 key={ind}>{item.name}{item.age}{item.address}</h2>
                ))}

                <input type="text" value={this.state.InputName} onChange={this.changeName}/>
                <input type="text" value={this.state.InputAge} onChange={this.changeAge}/>
                <input type="text" value={this.state.InputAddress} onChange={this.changeAddress}/>
                <button onClick={this.add}>Thêm</button>

            </>

        )
    }
}