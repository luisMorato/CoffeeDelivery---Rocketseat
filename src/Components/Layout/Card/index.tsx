import { HiMinusSmall } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

import { coffeeProps } from "../../../@types/Coffee";

import {
    ProductCartActions,
    ProductCardContainer,
    QuantitySection
} from "./ProductCard.styles";
import { UseCart } from "../../../hooks/UseCart";
import { actionTypes } from "../../../Contexts/CartContext";

interface cardProps {
    coffee: coffeeProps,
    quantity: number
}

export const ProductCard = ({ coffee, quantity }: cardProps) => {
    const formattedCoffeePrice = Number(coffee.price).toFixed(2).replace('.', ',');
    const { dispatch } = UseCart();
  
    const handleRemoveProductFromCart = async () => {
        dispatch({
            type: actionTypes.REMOVE_COFFEE_FROM_CART,
            payload: {
                coffee
            }
        });
    }

    const handleAddProductFromCart = async () => {
        dispatch({
            type: actionTypes.ADD_COFFEE_TO_CART,
            payload: {
                coffee,
                quantity: 1
            }
        });
    }

    const handleSubtractProductFromCart = async () => {
        dispatch({
            type: actionTypes.SUBTRACT_COFFEE_FROM_CART,
            payload: {
                coffee
            }
        });
    }

    return (
        <ProductCardContainer>
            <div>
                <img src={coffee.imageUrl} alt={`Cup of ${coffee.name}`} />
                <div>
                    <h3>{coffee.name}</h3>
                    <ProductCartActions>
                        <QuantitySection>
                            <button
                                type="button"
                                onClick={handleSubtractProductFromCart}
                            >
                                <HiMinusSmall size={16} />
                            </button>
                            <span>{quantity}</span>
                            <button
                                type="button"
                                onClick={handleAddProductFromCart}
                            >
                                <GoPlus size={16} />
                            </button>
                        </QuantitySection>
                        <button
                            type="button"
                            onClick={handleRemoveProductFromCart}
                        >
                            <FaRegTrashAlt size={16} />
                            Remover
                        </button>
                    </ProductCartActions>
                </div>
            </div>
            <span>R$ {formattedCoffeePrice}</span>
        </ProductCardContainer>
    )
}