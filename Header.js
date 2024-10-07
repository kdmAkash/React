import logo from "../../utils/logo.jpg";


const Header = () => {
    return (
      <div className="header">
        <img src={logo} alt="Logo" height="100px" width="100px" />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;
