import { React, useState } from "react";
import Home from "./pages/Home/Home";
import { IntlProvider } from "react-intl";
import { messages } from "./lang/messages";

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
        <Home
          currentLocale={currentLocale}
          handleLocaleChange={handleLocaleChange}
        />
      </IntlProvider>
    </div>
  );
}

export default App;
