import { React, useState } from "react";
import Home from "./pages/Home/Home";
import { IntlProvider } from "react-intl";
import { messages } from "./lang/messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dish from "./pages/Dish/Dish";

function App() {
  const getInitialLocale = () => {
    const savedLocale = localStorage.getItem("locale");
    const locale = navigator.language;

    return savedLocale || locale;
  };

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const handleLocaleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <div className="App">
      <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentLocale={currentLocale}
                  handleLocaleChange={handleLocaleChange}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  currentLocale={currentLocale}
                  handleLocaleChange={handleLocaleChange}
                />
              }
            />
            <Route
              path="/dish"
              element={
                <Dish
                  currentLocale={currentLocale}
                  handleLocaleChange={handleLocaleChange}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </div>
  );
}

export default App;
