import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Edit from "./pages/edit";
import Tambah from "./pages/Tambah";
import Detail from "./pages/detail";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import visi from "./pages/visi";
import Login from "./auth/login";
import Register from "./auth/register";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ flex: 1, padding: "20px", overflow: "auto", marginLeft: "22%" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/edit/:id' component={Edit} exact />
            <Route path="/tambah" component={Tambah} />
            <Route path="/lengkap" component={Detail} />
            <Route path="/visi" component={visi}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;