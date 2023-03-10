import React , { Component} from 'react'
import { Link } from "react-router-dom";

 class AddContact extends Component {
    state ={
        name:"",
        email:"",
        mob_no:"",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email ==="" && this.state.mob_no===""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        alert("Contact added : " + this.state.name);
        this.setState({name: "",email:"",mob_no:""});
        console.log(this.state);
    };

render(){

return(
    <>
    <div className="ui main"><br></br><br></br>
        <h2>AddContact</h2>
        <form className="ui form " onSubmit ={this.add}>
            <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"
            value ={this.state.name}
            onChange={(e) =>this.setState({name: e.target.value})}/>
            </div>
            <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email"
            value ={this.state.email}
            onChange={(e) =>this.setState({email: e.target.value})}/>
        </div>
        <div className="field">
            <label>Mob_no</label>
            <input type="number" name="mob_no" placeholder="Mob No"
            value ={this.state.mob_no}
            onChange={(e)=>this.setState({mob_no: e.target.value})}/>
        </div><br></br>
        <button className="ui button blue">Add</button>
        </form>
       
    </div>
    <Link to="/">
          <button className="ui button blue centert" style={{marginTop:"10px"}}>Home</button>
    </Link>
</>
);

}
}
export default AddContact;
