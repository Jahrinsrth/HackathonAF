import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  
    return(
        <nav className="nav-wrapper red darken-3" > 
        <div className="container"> 
           <a className="brand-logo"> EL Cerebro </a> 
         <ul className="right">
           <li > <Link>Home </Link> </li>
            <li> <Link>  contact</Link></li>
            <li>  <Link> about us </Link></li>
         </ul>
        </div>
           
      </nav>
    )

}

export default Navbar;