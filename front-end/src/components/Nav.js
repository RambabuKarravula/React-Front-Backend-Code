import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/Signup')
    } 
    return(
        <div>
            {
                auth ?
                <ul className="nav-ul">
                    <li><Link to="/Profile">AddProfile</Link></li>
                    <li><Link to="/AddProfile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">logout ({JSON.parse(auth).name})</Link></li>

                </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/SignUp">SignUp</Link></li>
                </ul>
}
        </div>
            
    )
}

export default Nav;