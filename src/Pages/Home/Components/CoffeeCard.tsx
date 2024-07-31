import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { GoPlus } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { HiMinusSmall } from "react-icons/hi2";


import { UseCart } from "../../../hooks/UseCart";
import { coffeeProps } from "../../../@types/Coffee";

import { Button } from "../../../Components/Layout/Button/Button";

import {
    CoffeeCardSection,
    CoffeeCardAction,
    CoffeeCardBuy,
    CoffeeCardDesc,
    Price
} from "./CoffeeList.Styles";

interface coffeeCardProps {
    coffee: coffeeProps
}

export const CoffeeCard = ({ coffee }: coffeeCardProps) => {
    const { dispatch } = UseCart();

    const [isPending, startTransition] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const formattedCoffeePrice = Number(coffee.price).toFixed(2).replace('.', ',');
    
    const addCoffeeToCart = async () => {
        startTransition(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        try {
            dispatch({
                type: 'ADD_COFFEE_TO_CART',
                payload: {
                    coffee,
                    quantity
                }
            });

            toast.success('Produto Adicionado ao Carrinho');
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            startTransition(false);
        }
    }

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity <= 1 ? prevQuantity : prevQuantity - 1);
    }

    return (
        <CoffeeCardSection>
            <Link to="#"><img src={coffee.imageUrl} alt={`cup of ${coffee.name}`} /></Link>
            <div>
                {coffee.tags.map((tag, index) => (
                    <span
                        key={index}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <CoffeeCardDesc>
                <h2>{coffee.name}</h2>
                <p>{coffee.description}</p>
            </CoffeeCardDesc>
            <CoffeeCardBuy>
                <Price>
                <span>R$</span>
                <span>{formattedCoffeePrice}</span>
                </Price>
                <div>
                <CoffeeCardAction>
                    <button
                        onClick={decreaseQuantity}
                        disabled={isPending}
                    >
                        <HiMinusSmall size={16} />
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={increaseQuantity}
                        disabled={isPending}
                    >
                        <GoPlus size={16} />
                    </button>
                </CoffeeCardAction>
                <Button
                    onClick={addCoffeeToCart}
                    variant="darkPurple"
                    disabled={isPending}
                >
                    {isPending ?
                        (<ClipLoader size={22} />)
                        :
                        (<FaShoppingCart size={22} />)
                    }
                </Button>
                </div>
            </CoffeeCardBuy>
        </CoffeeCardSection>
    )
}