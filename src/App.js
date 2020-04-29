import React from "react";
import Layout from "./components/Layout.js";
import "./App.css";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar />
      </Layout>
    </div>
  );
}

export default App;
