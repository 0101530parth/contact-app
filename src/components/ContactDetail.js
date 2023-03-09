import React from 'react';
import user from "./user.jpg"
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';
const ContactDetail= () => {
    const location = useLocation();
    const {state} = location;
    const { name, email } = state.contact ;
return(
   <div className ="main">
    <center><h2>Contact detail</h2></center>
    <div className ="ui card centered">
        <div className ="image">
            <img src = {user} alt="user"/>
        </div>
        <div className ="content">
            <div className ="header">{name}</div>
            <div className="description">{email}</div>
        </div>
    </div>
    <div className="center-div">
        
        <center> 
            <Link to="/">
             <button className="ui button blue center">
            Back to Contact List
          </button>
          </Link>
          </center>
      </div>
   </div>
);

};
export default ContactDetail;
