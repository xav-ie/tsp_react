import React from 'react';
import "./App.css";
import "./Grid.css";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
