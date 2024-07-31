import {
    createContext,
    Dispatch,
    ReactNode,
    useReducer
} from "react";

import { CartReducer } from "../Reducers/CartReducer";

import { coffeeProps } from "../@types/Coffee";

export enum actionTypes {
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
    REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
    SUBTRACT_COFFEE_FROM_CART = 'SUBTRACT_COFFEE_FROM_CART',
    REMOVE_ALL_COFFEES_FROM_CART = 'REMOVE_ALL_COFFEES_FROM_CART',
}

export interface stateProps {
    cartProducts: {
        coffee: coffeeProps
        quantity: number,
    }[]
    error?: string | null,
    success?: string | null
}

export interface actionProps {
    type: string,
    payload?: {
        coffee: coffeeProps
        quantity?: number
    }
}

interface cartContextProps {
    dispatch: Dispatch<actionProps>,
    cart: stateProps
}

export const CartContext = createContext({} as cartContextProps | undefined);

const initialState: stateProps = {
    cartProducts: [],
    error: null,
    success: null
}

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(CartReducer, initialState, () => {
        const storedData = localStorage.getItem('CoffeeDeliveryRocketseat - Cart 1.0.0'); 

        if(storedData){
            return JSON.parse(storedData);
        }

        return initialState;
    });
    
    return (
        <CartContext.Provider value={{ dispatch, cart }}>
            { children }
        </CartContext.Provider>
    )
}