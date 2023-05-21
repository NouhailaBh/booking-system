import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BoxArrowInRight} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const {user,loading,error,dispatch} =useContext(AuthContext);
 
  const handleLogOut = async(e) =>{
    e.preventDefault()
    dispatch({type: "LOGOUT"})
  }
  return (
    <div className="navbar1">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">Boonkig system</span>
        </Link>
        
        {user ? 
          <button className="headerBtn" onClick={handleLogOut} ><BoxArrowInRight/> Log out</button>
       
        
        : (<div className="navItems">
            <Link  to="/LoginHost"><button className="navButton">Host</button></Link>
         <Link  to="/login"><button className="navButton">User</button></Link>
        </div>)}

      </div>
    </div>
  )
}

export default Navbar