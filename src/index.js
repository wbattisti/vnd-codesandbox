import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import VendorPage from "./pages/VendorPage";

function App() {
  return (
    <div>
      <VendorPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
