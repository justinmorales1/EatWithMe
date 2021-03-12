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
                <Link to="/employees-forms">Meat & Seafood</Link>
              </li>
              <li>
                <Link to="/third-party-forms">Fruit & Vegetables</Link>
              </li>
              <li>
                <Link to="/member-forms">Dairy & eggs</Link>
              </li>
              <li>
                <Link to="/review-forms">Bakery</Link>
              </li>
              <li>
                <Link to="/review-forms">Deli </Link>
              </li>
              <li>
                <Link to="/review-forms">Pantry </Link>
              </li>
              <li>
                <Link to="/review-forms">Beverages </Link>
              </li>
              <li>
                <GoogleAuth />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
