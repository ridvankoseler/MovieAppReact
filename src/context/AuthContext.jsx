import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();


//?Custom Hook da oluşturabiliriz
// export const useAuthContext = () => {
//   return useContext(AuthContext)
//   //Burda return ettiğimiz için kullanacağımız yerde direk kullanırız.
// }

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
