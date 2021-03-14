import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo" style={{ marginLeft: "10px" }}>
              {" "}
              Eat With Me{" "}
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/meat-and-seafood">Meat & Seafood</Link>
              </li>
              <li>
                <Link to="/fruit-and-vegetables">Fruit & Vegetables</Link>
              </li>
              <li>
                <Link to="/dairy-and-eggs">Dairy & eggs</Link>
              </li>
              <li>
                <Link to="/bakery">Bakery</Link>
              </li>
              <li>
                <Link to="/deli">Deli </Link>
              </li>
              <li>
                <Link to="/pantry">Pantry </Link>
              </li>
              <li>
                <Link to="/beverages">Beverages </Link>
              </li>
              <li>
                <Link to="/account"> Account </Link>
              </li>
              {/*<li>*/}
              {/*  <GoogleAuth />*/}
              {/*</li>*/}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
