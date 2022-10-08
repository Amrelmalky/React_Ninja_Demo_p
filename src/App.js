import NavBar from "./Compoenents/NavBar";
import Home from "./Compoenents/Home";

//Using React Router by import some things ...
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Compoenents/Create";
import BolgDetials from "./Compoenents/BolgDetials";
import NotFound from "./Compoenents/NotFound";

function App(props) {
  return (
    <Router>
      {" "}
      {/* Using root component to surrounded our div */}
      <div className="App">
        <NavBar />

        <div className="content">
          <Switch>
            {/* 
            To Make sure that only one route show at any one time . 
            When we make made a request/ visit route to go to page,
            React Will Look at that request and going to the Switch component
            search from top to bottom  aganist a route   mmm yes it match .
            [Stop at the first macth ] then render the componenet inside that route.
            
            Using path = '' to write route like '/' for home '/About' for About 
            But by using [exact property] : will only match the exact the url that we go.
           */}

            <Route exact path="/">
              {/*1) single route /Home  */}
              <Home />
            </Route>

            {/* To Make sure that only one route show at any one time*/}
            <Route path="/Create">
              {/*2) single route /Create */}
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BolgDetials />
            </Route>

            <Route path="*"> {/*  to catch the other diffenet pathes  */}
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
