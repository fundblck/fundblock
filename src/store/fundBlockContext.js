import React, { useState, createContext } from "react";

export const FundBlockContext = createContext();

export function FundBlockProvider(props) {

  const [user, setUser] = useState();
  const [funds, setFunds] = useState(70);
  const [modal, setModal] = useState("scale-0");
  const [donate, setDonate] = useState(0);
  const [loading] = useState("show: false, msg: ''");
  const [alert] = useState("show: false, msg: '', color: ''");
  

  const setAlert = (msg, color = 'green') => {
    setLoading('loading', false)
    setAlert('alert', { show: true, msg, color })
    setTimeout(() => {
      setAlert('alert', { show: false, msg: '', color })
    }, 6000)
  }
  
  const setLoading = (msg) => {
    setLoading('loading', { ...loading, msg })
  }
  



  return (
    <div>
      <FundBlockContext.Provider
        value={{
          loading,
          setLoading,
          alert,
          setAlert,
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