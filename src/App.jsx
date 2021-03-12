import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import MemberForms from "./components/Grocery/FruitAndVegetables";
import EmployeeForms from "./components/Grocery/MeatAndSeafood";
import ThirdPartyForms from "./components/Grocery/ThirdPartyForms";
import ReviewForms from "./components/Grocery/DairyAndEggs";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/meat-and-seafood" component={EmployeeForms} />
            <Route exact path="/fruit-and-vegetables" component={MemberForms} />
            <Route exact path="/dairy-and-eggs" component={ThirdPartyForms} />
            <Route exact path="/bakery" component={ReviewForms} />
            <Route exact path="/deli" component={ReviewForms} />
            <Route exact path="/pantry" component={ReviewForms} />
            <Route exact path="/beverages" component={ReviewForms} />
            <Route exact path="/account" component={ReviewForms} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <li>
//     <Link to="/meat-and-seafood">Meat & Seafood</Link>
// </li>
// <li>
//     <Link to="/fruit-and-vegetables">Fruit & Vegetables</Link>
// </li>
// <li>
//     <Link to="/dairy-and-eggs">Dairy & eggs</Link>
// </li>
// <li>
//     <Link to="/bakery">Bakery</Link>
// </li>
// <li>
//     <Link to="/deli">Deli </Link>
// </li>
// <li>
//     <Link to="/pantry">Pantry </Link>
// </li>
// <li>
//     <Link to="/beverages">Beverages </Link>
