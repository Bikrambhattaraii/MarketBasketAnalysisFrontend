import { useContext, createContext, useState ,useEffect} from "react";
const stateContext = createContext({
  user: null,
  token: null,
  toastMessage: null,
  // isAdmin: true,
  settingToastMessage: () => {},
  settingToken: () => {},
  settingUser: () => {},
  // settingIsAdmin: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(sessionStorage.getItem("access_token"));
  const [toastMessage, setToastMessage] = useState(
    localStorage.getItem("toastMessage")
  );
  // const [isAdmin, setIsAdmin] = useState(true);

  const settingToastMessage = (message) => {
    setToastMessage(message);
    if (message) {
      localStorage.setItem("toastMessage", message);
    } else {
      localStorage.removeItem("toastMessage");
    }
  };
  // const settingIsAdmin = (isAdmin) => {
  //   setIsAdmin(isAdmin);
  // };
  
  const settingToken = (token) => {
    setToken(token);
    if (token) {
      sessionStorage.setItem("access_token", token);
    } else {
      sessionStorage.removeItem("access_token");
    }
  };

  const settingUser = (user) => {
    setUser(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  //for getting user




  return (
    <stateContext.Provider
      value={{
        toastMessage,
        settingToastMessage,
        user,
        settingUser,
        token,
        settingToken,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
