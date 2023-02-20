import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
  useEffect(() => {
    const cookieBanner = document.querySelector(".js-consent-banner");
    const necessaryCookiesButton = cookieBanner?.querySelector(
      ".js-reject-cookies"
    ) as HTMLElement;
    if (necessaryCookiesButton) {
      necessaryCookiesButton.click();
    }
  }, []);

  return <div>Hello world!</div>;
};

export default App;
