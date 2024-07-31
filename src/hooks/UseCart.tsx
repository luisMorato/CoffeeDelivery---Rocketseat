import { useContext } from "react";

import { CartContext } from "../Contexts/CartContext";

export const UseCart = () => {
    const context = useContext(CartContext);
    
    if(context === undefined){
        throw new Error('Error Using UseCart')
    }

    const { dispatch, cart } = context;

    return {
        dispatch, 
        cart
    }
}