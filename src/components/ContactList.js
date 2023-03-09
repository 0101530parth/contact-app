import React from "react";
import {Link} from "react-router-dom";

import ContactCard from "./ContactCard";
const ContactList = (props)=> {
    console.log(props,"ContactList");

    const deleteContactHandler =(id)=>{
        props.getContactId(id);
    }

    
    
    const  renderContactList = props.contacts.map((contact) =>{
        return(

            <ContactCard contact ={contact} 
            clickHander={deleteContactHandler} key={contact.id}/>
                    );
    } )
    return <div className="ui celled list ">
        
    
        <h3> Contact List  </h3>
     <Link to ="/add"> 
<button className="ui button blue centert">Add Contact</button>
</Link>

        {renderContactList}

    </div>;
};

export default ContactList;
