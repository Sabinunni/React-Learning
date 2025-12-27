import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNamereact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNamereact("Logout")
                : setBtnNamereact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
