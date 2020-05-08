import React from "react";
import Login from "./views/Login";
import Main from "./views/Main";
import Rooms from "./views/Rooms";
import RoomsId from "./views/RoomId";
import ManageRooms from "./views/rooms/ManageRooms";

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/*Cargo la barra superior  en cada componente */}

      <Router>
        <Switch>
          <PublicRoute component={Login} path="/" exact />
          <PrivateRoute component={Main} path="/home" exact />
          <PrivateRoute component={Rooms} path="/rooms" exact />
          <PrivateRoute component={ManageRooms} path="/rooms/add" exact />

          <PrivateRoute component={RoomsId} path="/rooms/:id" exact />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
