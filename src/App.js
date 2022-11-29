import { React, useState } from "react";
import Home from "./pages/Home/Home";
import { IntlProvider } from "react-intl";
import { messages } from "./lang/messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        {/* <Home
          currentLocale={currentLocale}
          handleLocaleChange={handleLocaleChange}
        /> */}

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentLocale={currentLocale}
                  handleLocaleChange={handleLocaleChange}
                ></Home>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </div>
  );
}

export default App;
