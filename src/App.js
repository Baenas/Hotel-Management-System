import React from "react";
import Login from "./views/Login";
import Main from "./views/Main";
import Rooms from "./views/Rooms";
import RoomsId from "./views/RoomId";
import ManageRooms from "./views/rooms/ManageRooms";
import ManageGuest from "./views/guests/ManageGuest";
import GuestId from './views/guests/GuestId'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Roomoperations from './views/operations/RoomOperations'
import Checking from './views/operations/Checking'
import Checkout from './views/operations/Checkout'
import RoomStatus from './views/operations/ManageRoomState'
import GuestOperations from './views/operations/GuestOperations'

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
          <PrivateRoute component={ManageGuest} path="/guest" exact />
          <PrivateRoute component={GuestId} path="/guest/:id" exact />
          <PrivateRoute component={Roomoperations} path="/roomoperations/" exact />
          <PrivateRoute component={Checking} path="/checking/" exact />
          <PrivateRoute component={Checkout} path="/checkout/:id" exact />
          <PrivateRoute component={RoomStatus} path="/manageroom" exact />
          <PrivateRoute component={GuestOperations} path="/manageroom/:id" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
