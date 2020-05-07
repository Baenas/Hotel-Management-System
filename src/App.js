import React from "react";
import Login from "./views/Login";
import Main from "./views/Main";
import Rooms from "./views/Rooms";
import RoomsId from "./views/RoomId";

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import {   BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/*Cargo la barra superior  en cada componente */}

      <Router>
        <Switch>
            <PublicRoute restricted={true} component={Login} path="/" exact />
          <PrivateRoute component={Main} path="/home" exact />
           <PrivateRoute component={Rooms} path="/rooms" exact />
           <PrivateRoute component={RoomsId} path="/rooms/1" exact />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
