import React, { useState, createContext } from "react";

export const FundBlockContext = createContext();

export function FundBlockProvider(props) {

  const [user, setUser] = useState(70);
  const [funds, setFunds] = useState(70);

  
  return (
    <div>
      <FundBlockContext.Provider
        value={{
          funds,
          setFunds,
          user,
          setUser,
        }}
      >
        {props.children}
      </FundBlockContext.Provider>
    </div>
  );
}