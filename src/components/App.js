import React from "react";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Services from "./Services";
import Articles from "./Articles";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="app">      
      <Header />
      <Main />
      <About />
      <Services />
      <Articles />
      <Contacts /> 
    </div> 
  );
}

export default App;
