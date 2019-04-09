import React , {Component} from "react";

class Ninja extends Component{

     
 
      render(){

       //   const {name,age,city} = this.props;
       const {users ,deleteuser} =  this.props;
      const userlist = users.map((user) =>{
          if(user.age > 21) {
            return(
                <div className="aa" key={user.id}>
                    <div>name: {user.name }   </div>
                    <div> age:{user.age}  </div>
                    <div> city:{user.city}  </div> 
                     <button onClick = { () => {deleteuser(user.id) }}> delete </button>
                  
                </div>
               )
          }
          else {
              return null;
          }
    
      })
          return(
             <div>
               {userlist}               
             </div>    
               

          );
      }
}

export default Ninja;