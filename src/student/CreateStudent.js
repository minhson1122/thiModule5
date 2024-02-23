import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateStudent(){
    // const navigate = useNavigate()
    return(
        <>
            <h1>Creat Student</h1>
            <Formik initialValues={{
                name:'',
                description:'',
                action:''
            }} onSubmit={(values)=>{
                console.log(values)
                axios.post('http://localhost:3000/students',values).then(()=>{
                    alert("thanh cong")
                })
            }}>
                <Form>
                    <Field name={'name'}></Field>
                    <Field name={'description'}></Field>
                    <Field name={'action'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>

        </>
    )
}