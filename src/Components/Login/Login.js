//import React from 'react'
import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Login.css";

export default function Login() {
  const validateemail= RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$')
    const validatepassword= RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')

    const [inputState,setInputState] = useState({ isError: {
        email:"",
        password:"",
    }

    })

    const handleChange=(event)=>{
        event.persist();
        //console.log("handle change:", event);
        let {name,value}=event.target;
        let isErr={...inputState.isError};
        switch(name){
            case "email":
            isErr.emailaddress=
                   validateemail.test(value)?"": "wrong pattern";
                   break;
                   case "password":
                    isErr.password=
                       validatepassword.test(value)?"":"wrong pattern";
                       break;
                       default : break;
        }
        setInputState({...inputState,[name]:value,isError: isErr})
        console.log("After State:",inputState);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("After submit:",inputState);
        const user= inputState;

    
    axios.post('https://project-node-1.herokuapp.com/postLoginData',user)

        .then(res=>{
            console.log("axios",res);
            window.sessionStorage.setItem("Token",res.data.token)
        })
        .catch(err=>{
            console.log("axios", err);
        })
    }
    return (
        
        <div className="ai" >
            
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicname">
    <Form.Label>Email address:</Form.Label>
    <Form.Control className="io" type="text" placeholder="Enter email address" name="email" onChange={handleChange}/>
    {inputState.isError.email.length>0 &&(
     <span>{inputState.isError.email}</span>
    )}
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicname">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange}/>
    {inputState.isError.password.length>0 && (
        <span>{inputState.isError.password}</span>
    )}
</Form.Group>
<Button variant="primary" type="submit">Login</Button>

<p class="text-center text-muted mt-5 mb-0">
                        Don't have any account?{" "}
                        <Link to="/registation_page">
                        <a href="#!" class="fw-bold text-body">
                          
                          <u>Create an Account</u>
                         
                        </a>
                        </Link>
                      </p>
            </Form>
            
        </div>
    )
}