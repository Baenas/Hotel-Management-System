import React from "react";
import Main from "./views/Main";
import MainBar from "./components/MainBar";

import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/*Cargo la barra superior  en cada componente */}

      

      <Router>
        <Switch>
          <Route exact path="/">
        
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
