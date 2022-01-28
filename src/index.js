import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MarketContextProvider } from "./context";
import { Web3Provider } from "./contexts/Web3Context";

ReactDOM.render(
  <MarketContextProvider>
    <Web3Provider>
      <App />
    </Web3Provider>
    
  </MarketContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
