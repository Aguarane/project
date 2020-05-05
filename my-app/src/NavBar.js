import React from 'react';
import{Link, withRouter} from 'react-router-dom';
import './Link.css';


const NavBar = (props) =>
{
    console.log(props)

    return(

 <div className="container">
   <Link className="bh" to="/" style={{marginRight: 100}}> BodyRock</Link>
     <Link  className="bh" to="/" style={{margin: 50}}>Home</Link>
     <Link  className="bh" to="/Customized" style={{margin: 50}}>Customized Program</Link>
     <Link  className="bh" to="/contact" style={{margin: 50}}>Contact</Link>
 </div>       
    );
}

export default withRouter(NavBar);  
