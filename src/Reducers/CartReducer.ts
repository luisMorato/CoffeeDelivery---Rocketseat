import {
    actionProps,
    actionTypes,
    stateProps
} from "../Contexts/CartContext";

//import { UseLocalStorage } from "../hooks/UseLocalStorage";

export const CartReducer = (state: stateProps, action: actionProps): stateProps => {
    //ToDo: Fix UseLocalStorage Usage
    //const { setItem } = UseLocalStorage('CoffeeDeliveryRocketseat - Cart 1.0.0');
    
    switch(action.type){
        case actionTypes.ADD_COFFEE_TO_CART: {
            if(!action.payload){
                return { ...state, error: 'Nenhum Dado Enviado' }
            }

            const { coffee: receivedCoffee, quantity: receivedQuantity } = action.payload;

            if(!receivedQuantity){
                return { ...state, error: 'Quantidade é Requerida' }
            }

            let updatedCart = [];

            if(state.cartProducts.length > 0 ){
                const existingCoffeeInCart = state.cartProducts.findIndex(({ coffee }) => coffee?.id === receivedCoffee.id);

                if(existingCoffeeInCart >= 0){
                    updatedCart = state.cartProducts.map((product) => {
                        if(product.coffee.id === action.payload?.coffee.id) {
                            return  {...product, quantity: product.quantity + receivedQuantity!};
                        }

                        return product;
                    })

                    localStorage.setItem('CoffeeDeliveryRocketseat - Cart 1.0.0', JSON.stringify({cartProducts: updatedCart}));

                    return { ...state, cartProducts: updatedCart }
                }
            }

            updatedCart = [...state.cartProducts, {
                coffee: receivedCoffee,
                quantity: receivedQuantity
            }]

            localStorage.setItem('CoffeeDeliveryRocketseat - Cart 1.0.0', JSON.stringify({cartProducts: updatedCart}));

            return { ...state, cartProducts: updatedCart }
        }

        case actionTypes.REMOVE_COFFEE_FROM_CART: {
            if(!action.payload){
                return { ...state, error: 'Nenhum Dado Enviado' }
            }

            const { coffee } = action.payload;

            const filteredProducts = state.cartProducts.filter((product) => product.coffee.id !== coffee.id );

            localStorage.setItem('CoffeeDeliveryRocketseat - Cart 1.0.0', JSON.stringify({cartProducts: filteredProducts}));

            return { ...state, cartProducts: filteredProducts}
        }

        case actionTypes.SUBTRACT_COFFEE_FROM_CART: {
            if(!action.payload){
                return { ...state, error: 'Nenhum Dado Enviado' }
            }

            const { coffee: receivedCoffee } = action.payload;

            let updatedCart = [];

            const existingCoffeeInCart = state.cartProducts.find(({ coffee }) => coffee?.id === receivedCoffee.id);

            if(existingCoffeeInCart){
                if(existingCoffeeInCart.quantity <= 1){
                    action.type = actionTypes.REMOVE_COFFEE_FROM_CART;
                }

                updatedCart = state.cartProducts.map((product) => {
                    if(product.coffee.id === action.payload?.coffee.id) {
                        return  {...product, quantity: product.quantity - 1};
                    }

                    return product;
                })

                localStorage.setItem('CoffeeDeliveryRocketseat - Cart 1.0.0', JSON.stringify({cartProducts: updatedCart}));

                return { ...state, cartProducts: updatedCart }
            }

            return state;
        }

        case actionTypes.REMOVE_ALL_COFFEES_FROM_CART: {
            localStorage.setItem('CoffeeDeliveryRocketseat - Cart 1.0.0', JSON.stringify({cartProducts: []}));

            return {...state,
                cartProducts: [],
                error: null,
                success: 'Produtos Apagados'
            };
        }

        default:
            return state;
    }
}