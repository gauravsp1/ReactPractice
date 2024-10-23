import React, { useState } from "react";
export const context = React.createContext();

function Context({ children }) {
  const [contextData, setContextData] = useState({
    name: "Gaurav",
    job: "Developer",
  });
  console.log("children", children);

  return (
    <context.Provider value={{ contextData, setContextData }}>
      {children}
    </context.Provider>
  );
}

export default Context;
