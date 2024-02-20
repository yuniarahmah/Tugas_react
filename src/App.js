import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Edit from "./pages/edit";
import Tambah from "./pages/Tambah";
import Detail from "./pages/detail";
import Navbar from "./component/Navbar";
import Home from "./pages/home";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;