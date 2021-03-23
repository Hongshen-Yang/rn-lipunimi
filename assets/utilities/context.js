import React from 'react'

const LangContext = React.createContext({
    lang: "T",
    setLang: () => {}
});

export default LangContext;