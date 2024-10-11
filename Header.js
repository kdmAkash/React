import logo from "../../utils/logo.jpg";
import React,{useState} from "react"


const Header = () => {
  const [btnlogin,setBtnLogin]=useState("login");
    return (
      <div className="header">
        <img src={logo} alt="Logo" height="100px" width="100px" />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
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
