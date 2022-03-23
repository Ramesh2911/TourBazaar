import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Registation.css";

export default function Registation() {
  //const validatephone= RegExp('^[6 7 8 9]{1}[0-9]{9}');
  const validateemail = RegExp("^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$");
  const validatepassword = RegExp(
    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$"
  );

  const [inputState, setInputState] = useState({
    isError: {
      username: "",
      // lastname:'',
      PhoneNumber: "",
      emailaddress: "",
      password: "",
    },
  });
  const handleChange = (event) => {
    event.persist();
    //console.log("handle change:", event);
    let { name, value } = event.target;
    let isErr = { ...inputState.isError };
    switch (name) {
      case "username":
        isErr.username = value.length < 4 ? "atlest 4 chereters required" : "";
        break;
      // case "lastname":
      // isErr.lastname=
      // value.length<4?"atlest 4 chereters required":"";
      // break;
      case "PhoneNumber":
        isErr.PhoneNumber =
          value.length < 10
            ? "altest 10 digit required"
            : value.length > 10
            ? "invalid"
            : "";
        // validatephone.test(value)?"":"invalid";
        break;
      case "eamiladdress":
        isErr.emailaddress =
          //value.length<4?"atlest 4 chereters required":"";
          validateemail.test(value) ? "" : "wrong pattern";
        break;
      case "password":
        isErr.password =
          //value.length<4?"atlest 4 chereters required":"";
          validatepassword.test(value) ? "" : "wrong pattern";
        break;
      default:
        break;
    }
    setInputState({ ...inputState, [name]: value, isError: isErr });
    console.log(inputState);
    //setInputState({...inputState,[name]:value,isError:isErr})
    //console.log("After State:",inputState);
  };
  const submitHand = (event) => {
    event.preventDefault();
    console.log("After submit:", inputState);
    const user = inputState;

    axios
      .post("https://project-node-1.herokuapp.com/postUserData", user)

      .then((res) => {
        console.log("axios", res);
      })
      .catch((err) => {
        console.log("axios", err);
      });
  };

  return (
    <div>
      <div className="com">
        <Form onSubmit={submitHand}>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
            />
            {inputState.isError.username.length > 0 && (
              <span>{inputState.isError.username}</span>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicname">
    <Form.Label>Last Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter last Name" name="lastname" onChange={handleChange}/>
    {inputState.isError.lastname.length>0 && (
     <span>{inputState.isError.lastname}</span>
    )}
    </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              name="PhoneNumber"
              onChange={handleChange}
            />
            {inputState.isError.PhoneNumber.length > 0 && (
              <span>{inputState.isError.PhoneNumber}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>email:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email address"
              name="email"
              onChange={handleChange}
            />
            {inputState.isError.emailaddress.length > 0 && (
              <span>{inputState.isError.emailaddress}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
            {inputState.isError.password.length > 0 && (
              <span>{inputState.isError.password}</span>
            )}
          </Form.Group>
          <p>
            <input type="checkbox"/> 
            By creating an account you agree to our
            <Link to="/terms_page">
            <a>Terms & Privacy</a>.
            </Link>
          </p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p class="text-center text-muted mt-5 mb-0">
            Have already an account?
            <Link to="/login_page">
              <a class="fw-bold text-body">
                <u>Login here</u>
              </a>
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
