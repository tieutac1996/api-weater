import React from "react";
import "./style/style.css";
import { getTemp } from "./components/api/getTemp";

function App() {
  return (
    <div id="app">
      <div id="background">
        <div></div>
      </div>
      <div id="main">
        <div id="title">
          <h1>Website kiểm tra nhiệt độ</h1>
          <div id="title-result"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
