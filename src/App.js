import React, { Component } from 'react';
import Ninja from "./Ninja.js";
import Adduser from "./Adduser.js";
import Navbar  from "./navbar"
import {BrowserRouter} from "react-router-dom"
//import './App.css';

class App extends Component {
  
   state = {
      users : [
        {name:"jahrin",age:22,city:"colombo",id:1},
        {name:"hasheem",age:22,city :"kalutara",id:2},
        {name:"rushaid",age:24,city:"mavanellah",id:3},
        {name:"fasrin",age:21,city:"colombo",id:4}
      ] 
  }

  adduser = (user) =>{
      user.id =Math.random();
      let usersnew = [...this.state.users,user]
      this.setState({
         users : usersnew
      })
      
  }

   deleteuser = (id) =>{
     let usernew = this.state.users.filter(user => {
       return user.id !== id
     })
    this.setState({
       users : usernew
    })

   }
    

  render() {
    return (
       <BrowserRouter> 
      <div className="App">
        
         <Navbar />
       
       

       <h2> welocome</h2>
     <Ninja   users = {this.state.users}  deleteuser = {this.deleteuser}    />

      <Adduser  adduser={this.adduser}/>
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
