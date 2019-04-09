import React,{Component} from "react";

class Adduser extends Component{
    state = {
        name:null,
        age:null,
        city:null
    }
      
      handleChange = (e) =>{
          this.setState({
            [e.target.id ] : e.target.value
          });
      }

      handleSubmit = (e) =>{
           e.preventDefault();
           this.props.adduser(this.state);
      }
    
      
 render(){
      return(
       <div className="user">
         <form  onSubmit ={this.handleSubmit}>
          <label>enter the name </label>
          <input type="text" id="name" onChange={this.handleChange} /> 
          <label>enter the age  </label>
           <input type="text" id="age" onChange={this.handleChange} /> 
             <label> enter the city </label>
             <input type="text" id="city" onChange={this.handleChange} />          
             <button> submit</button>
         
         </form>
       
       </div>

      );
    }     
}

export default Adduser;