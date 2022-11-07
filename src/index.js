import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import Portuguese from "./lang/pt.json";
import English from "./lang/en.json";
import { IntlProvider } from "react-intl";

const locale = navigator.language;
let lang;

switch (locale) {
  case "pt-BRa":
    lang = Portuguese;
    break;

  default:
    lang = English;
    break;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale ={locale} messages={lang}>
       <Home />
   </IntlProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
