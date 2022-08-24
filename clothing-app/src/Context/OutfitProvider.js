// src/context/user.js
import React, { useState } from "react";

// create the context
const OutfitContext = React.createContext();

// create a provider component
function OutfitProvider({ children }) {

  const [outfits, setOutfits] = useState([])
    // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <OutfitContext.Provider value={[outfits, setOutfits]}>{children}</OutfitContext.Provider>;
}

export { OutfitContext, OutfitProvider };