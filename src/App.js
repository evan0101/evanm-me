import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="card">
        <h3>h3</h3>
        <h1>Test</h1>
        <h2>h2</h2>
      </main>
    </>
  );
}

export default App;
