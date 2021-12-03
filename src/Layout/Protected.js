import React from 'react';
import { Redirect } from 'react-router-dom';

const Protected = (props) => {
    let ProtectedCom=props.component;
    let isLoggedin=window.sessionStorage.getItem('Token')
    return isLoggedin
             ? (<ProtectedCom/>)
             : (<Redirect to="/Login_page" />)
        
    
    
}

export default Protected;