import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaX } from "react-icons/fa6";

import { actionTypes } from "../../../../Contexts/CartContext";
import { UseCart } from "../../../../hooks/UseCart";

import { Button } from "../../Button/Button";
import { ProductCard } from "../../Card";

import {
  CartContainer,
  CartContent,
  CartHeader
} from "./Cart.styles";
import { useState } from "react";
import { ClipLoader } from "react-spinners";


interface CartProps {
  isCartOpen: boolean,
  handleCloseCartModal: () => void
}

export const Cart = ({ isCartOpen, handleCloseCartModal }: CartProps) => {
  const navigate = useNavigate();
  
  const { cart, dispatch } = UseCart();

  const [isPending, startTransition] = useState(false);

  const navigateToCheckout = () => {
    if(cart.cartProducts.length <= 0) {
      toast.error('Adicione ao Menos um Produto ao Carrinho Para Continuar');
      return;
    }

    navigate('/checkout');
  }

  const ClearCart = async () => {
    if(cart.cartProducts.length === 0){
      toast.error('Carrinho já Está Vazio');
    }

    startTransition(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      dispatch({
        type: actionTypes.REMOVE_ALL_COFFEES_FROM_CART,
      });
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      startTransition(false);
    }
  }

  return (
    <CartContainer isCartOpen={isCartOpen}>
      <div>
        <CartHeader>
          <h2>CARRINHO</h2>
          <button
            onClick={handleCloseCartModal}
          >
            <FaX size={20} />
          </button>
        </CartHeader>
        <CartContent  productsLength={cart.cartProducts.length}>
          {cart.cartProducts.length > 0 ?
            cart.cartProducts.map(({ coffee, quantity }) => (
              <ProductCard
                key={coffee.id}
                coffee={coffee}
                quantity={quantity}
              />
            ))
            :
            (
              <>
                <span>O Carrinho Está Vazio.</span>
                <span>Comece a adicionar agora.</span>
              </>
            )
          }
        </CartContent>
      </div>
      <div>
        <Button
          onClick={ClearCart} 
          variant="lightPurple"
          disabled={isPending}
        >
          {isPending ? (<ClipLoader size={24} />) : "Limpar Carrinho"}
        </Button>
        <Button
          onClick={navigateToCheckout} 
          variant="yellow"
          disabled={isPending}
        >
          Checkout
        </Button>
      </div>
    </CartContainer>
  )
}