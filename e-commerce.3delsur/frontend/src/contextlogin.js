import { createContext, useState } from "react"

    const ContextoLogin= createContext()


    export function LoginProvider({children}){
        
    const [login,SetLogin]=useState(false)
   
    return <ContextoLogin.Provider value={[login,SetLogin]}>{children}</ContextoLogin.Provider>
    }

    export default ContextoLogin





















// import { createContext, useContext, useReducer } from "react";
// import user from "../services/userService";

// const currentUser = user.getCurrentUser();

// const initialState = !currentUser
//   ? { isAuth: false }
//   : currentUser.isAdmin
//   ? { isAuth: true, isAdmin: true }
//   : { isAuth: true };

// const AuthContext = createContext(initialState);
// AuthContext.displayName = "AuthContext";

// export function reducer(state, action) {
//   switch (action.type) {
//     case "login":
//       return { isAuth: true };
//     case "admin":
//       return { isAuth: true, isAdmin: true };
//     case "logout":
//       return { isAuth: false };
//     default:
//       throw new Error();
//   }
// }

// export function AuthProvider({ children }) {
//   const [auth, dispatch] = useReducer(reducer, initialState);

//   return (
//     <AuthContext.Provider value={[auth, dispatch]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default function AuthConsumer() {
//   return useContext(AuthContext);
// }
