import logo from "../../utils/logo.jpg";
import React,{useState} from "react"
import { Link } from "react-router-dom";


const Header = () => {
  const [btnlogin,setBtnLogin]=useState("login");
    return (
      <div className="header">
        <img src={logo} alt="Logo" height="100px" width="100px" />
        <div className="nav-items">
          <ul>
            <li><Link to="/">
            Home</Link>
            </li>
            <li><Link to="/about">
              About us </Link>
            </li>
            <li><Link to="/contactus">
            Contact us
            </Link>
            </li>
           <button className="login" onClick={ ()=>{
            btnlogin === "login"? 
              setBtnLogin("logout"):
              setBtnLogin("login");          
            }
           }>{btnlogin}</button>
          </ul>
        </div>
      </div>
    );
};

export default Header;
