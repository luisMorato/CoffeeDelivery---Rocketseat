import { FaLocationDot } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";

import {
  SuccessContainer,
  PurchaseDetailsContainer,
  DetailsItem,
} from "./Success.styles";
import { UseCart } from "../../hooks/UseCart";
import { actionTypes } from "../../Contexts/CartContext";

export const Success = () => {
  const { dispatch } = UseCart();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    const ClearCartData = async () => {
      dispatch({
        type: actionTypes.REMOVE_ALL_COFFEES_FROM_CART,
      })
    }

    ClearCartData();
  }, [dispatch]);
  
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div>
        <PurchaseDetailsContainer>
          <DetailsItem
            bgColor='purple'
          >
            <div>
              <FaLocationDot size={16} />
            </div>
            <div>
              <p>Entrega em <strong>{userData?.street}, {userData?.houseNumber}</strong></p>
              <p>{userData?.neighborhood} - {userData?.city}, {userData?.state}</p>
            </div>
          </DetailsItem>
          <DetailsItem
            bgColor='yellow'
          >
            <div>
              <MdTimer size={16} />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </DetailsItem>
          <DetailsItem
            bgColor='darkYellow'
          >
            <div>
              <BsCurrencyDollar size={16} />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>{userData?.paymentMethod}</strong></p>
            </div>
          </DetailsItem>
        </PurchaseDetailsContainer>
        <img src="/Images/Success-Image.png" alt="" />
      </div>
    </SuccessContainer>
  )
}