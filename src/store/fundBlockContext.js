import React, { useState, createContext } from "react";

export const FundBlockContext = createContext();

export function FundBlockProvider(props) {

  const [user, setUser] = useState();
  const [funds, setFunds] = useState(70);
  const [modal, setModal] = useState("scale-0");
  const [donate, setDonate] = useState(0);
  const [ownerAccount, setOwnerAccount] = useState();
  const [loading] = useState("show: false, msg: ''");
  const [alert] = useState("show: false, msg: '', color: ''");
  

  
  



  return (
    <div>
      <FundBlockContext.Provider
        value={{
          ownerAccount,
          setOwnerAccount,
          loading,
          alert,
          donate,
          setDonate,
          funds,
          setFunds,
          user,
          setUser,
          modal,
          setModal,
        }}
      >
        {props.children}
      </FundBlockContext.Provider>
    </div>
  );
}