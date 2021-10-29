import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import detail from "./routes/detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={detail}></Route>
    </HashRouter>
  );
}

export default App;
