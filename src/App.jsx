import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import MemberForms from "./components/Grocery/FruitAndVegetables";
import EmployeeForms from "./components/Grocery/MeatAndSeafood";
import Pantry from "./components/Grocery/Pantry";
import Beverages from "./components/Grocery/Beverages";
import DairyAndEggs from "./components/Grocery/DairyAndEggs";
import Bakery from "./components/Grocery/Bakery";
import Deli from "./components/Grocery/Deli";
import Accounts from "./components/UserComponents/AccountForms";
import CreateAccount from "./components/UserComponents/CreateAccount";


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
            <Route exact path="/dairy-and-eggs" component={DairyAndEggs} />
            <Route exact path="/bakery" component={Bakery} />
            <Route exact path="/deli" component={Deli} />
            <Route exact path="/pantry" component={Pantry} />
            <Route exact path="/beverages" component={Beverages} />
            <Route exact path="/account" component={CreateAccount} />
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
