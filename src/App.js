import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Edit from "./pages/edit";
import Tambah from "./pages/Tambah";
import Detail from "./pages/detail";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import visi from "./pages/visi";
import Login from "./auth/login";
import Register from "./auth/register";
import PrivateRoute from "./component/private";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ flex: 1, padding: "20px", overflow: "auto", marginLeft: "22%" }}>
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path='/edit/:id' component={Edit} exact />
            <PrivateRoute path="/tambah" component={Tambah} />
            <PrivateRoute path="/lengkap" component={Detail} />
            <PrivateRoute path="/visi" component={visi}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;