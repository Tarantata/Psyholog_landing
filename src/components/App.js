import React from "react";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Services from "./Services";
import Articles from "./Articles";
import Contacts from "./Contacts";
import Plug from "./Plug";

function App() {
  return (
    <div className="app">      
      <Header />
      <Main />
      <About />
      <Services />
      <Articles />
      <Contacts /> 
      {/* <Plug /> */}
    </div> 
  );
}

export default App;
