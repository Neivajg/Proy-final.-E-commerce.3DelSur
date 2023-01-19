import { createContext, useState } from "react"

    const ContextoCarrito= createContext()

    //Se puede crear una funcion que almacene en el local storage los productos selecionados!

    export function CarritoProvider({children}){
        
    const [carrito,SetCarrito]=useState([])
   
    return <ContextoCarrito.Provider value={[carrito, SetCarrito]}>{children}</ContextoCarrito.Provider>
    }

    export default ContextoCarrito