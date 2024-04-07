import React from "react";
import Navigation from "./screens/navigationBar/NavigationBar";
import "./App.css";
import Particles from "./Particles";
import Header from "./screens/header/Header";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
    </div>
  );
}

export default App;
