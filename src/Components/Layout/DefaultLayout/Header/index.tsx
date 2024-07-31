import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import { UseCart } from "../../../../hooks/UseCart";
import { UserContext } from "../../../../Contexts/UserContext";

import { Cart } from "../Cart";
import { Button } from "../../Button/Button";

import {
  HeaderContainer,
  HeaderNav,
  CartWrapper,
  CartQuantity,
} from "./Header.styles";

import CoffeDeliveryLogo from '../../../../assets/CoffeDeliveryLogo.svg';

export const Header = () => {
  const location = useLocation();

  const { userData } = useContext(UserContext);
  const { cart } = UseCart();

  const [pathName, setPathName] = useState(location.pathname);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartProductsquantity = cart.cartProducts.map(({ quantity }) => quantity);
  const cartProductsAmount = cartProductsquantity.reduce((prev, current) => prev + current, 0);
  
  const handleOpenCartModal = () => {
    setIsCartOpen(true);
  }

  const handleCloseCartModal = () => {
    setIsCartOpen(false);
  }

  const hasAddressDetails = () => {
    return userData?.city && userData?.state;
  }

  useEffect(() => {
    setPathName(location.pathname);
  }, [location])

  useEffect(() => {
    if (!isCartOpen) {
      setTimeout(() => {
        setIsCartVisible(false);
      }, 400);
    } else {
      setIsCartVisible(true);
    }
  }, [isCartOpen]);

  return (
    <HeaderContainer currentPathName={pathName}>
      <HeaderNav>
        <Link to="/">
          <img src={CoffeDeliveryLogo} alt="Coffe Delivery Logo - cup with a rocket drawn on it" />
        </Link>
        <div>
          {hasAddressDetails() &&
            <Button variant="lightPurple">
              <IoLocationSharp size={22} /> {userData?.city}, {userData?.state}
            </Button>
          }
          <CartWrapper>
            <CartQuantity>{cartProductsAmount > 9 ? "9+" : cartProductsAmount}</CartQuantity>
            <Button 
              variant="lightYellow"
              onClick={handleOpenCartModal}
            >
              <FaShoppingCart size={22} />
            </Button>
          </CartWrapper>
        </div>
      </HeaderNav>
      {isCartVisible && (
        <Cart
          isCartOpen={isCartOpen}
          handleCloseCartModal={handleCloseCartModal}
        />
      )}
    </HeaderContainer>
  )
}