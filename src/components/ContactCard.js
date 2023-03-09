import React from "react";
import { Link } from "react-router-dom";
import user from "./user.png";
const ContactCard = ({ contact, clickHander }) => {
  const { id, name, email,mob_no } = contact;
  
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}` }} state={{ contact: contact }}>
          <div className="header">{name}</div><br></br>
          <div>{email}</div><br></br>
          <div>{mob_no}</div><br></br>
        </Link>
      </div>
     
     <div style={{display:'flex',justifyContent:'flex-end'}}> <i
    
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => clickHander(id)}
      ></i></div>
    </div>
  );
};

export default ContactCard;
