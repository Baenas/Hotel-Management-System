import React from "react";
import Main from "./views/Main";
import Rooms from "./views/Rooms";
import RoomId from "./views/RoomId";
import GuestID from "./views/guests/GuestId";

import Guests from "./views/guests/Guest";

import MainBar from "./components/MainBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/*Cargo la barra superior  en cada componente */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
           <Route exact path="/rooms">
            <Rooms />
          </Route>
        <Route exact path="/rooms/1">
            <RoomId />
          </Route>
          <Route exact path="/guest">
            <Guests />
          </Route>
            <Route exact path="/guest/1">
            <GuestID />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
