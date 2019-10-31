import React, { createContext, useState } from "react";

import SanoApp from "./SanoApp";
import {LanguageContext} from './utils/LanguageContext'

function App() {
  const [language, setLanguage] = useState('eng');
  return (
    <>
      <LanguageContext.Provider value={{language, setLanguage}}>
        <SanoApp />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
