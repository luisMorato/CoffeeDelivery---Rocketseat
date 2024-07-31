import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";
import {
  PiCreditCardThin,
  PiMoneyLight
} from "react-icons/pi";

import {
  PaymentMethodButton,
  PaymentMethodContainer,
  Wrapper
} from "../Checkout.styles";

export const PaymentMethod = () => {
  const { setValue } = useFormContext();

  const [option, setOption] = useState('Cartão de Crédito');

  const handlePaymentMethodSelection = (method: string) => {
    setOption(method);
    setValue('paymentMethod', method);
  }
  
  return (
    <PaymentMethodContainer>
        <Wrapper svgColor="purple">
          <BsCurrencyDollar size={22} /> <span></span>
          <div>
            <p>Pagamento</p>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </Wrapper>
        <div>
            <PaymentMethodButton
              onClick={() => handlePaymentMethodSelection('Crédito')} 
              type="button"
              isSelected={option === 'Crédito'}
            >
              <PiCreditCardThin size={16} />
              CARTÃO DE CRÉDITO
            </PaymentMethodButton>
            <PaymentMethodButton
              onClick={() => handlePaymentMethodSelection('Débito')}
              type="button"
              isSelected={option === 'Débito'}
            >
              <GiGreekTemple size={16} />
              CARTÃO DE DÉBITO
            </PaymentMethodButton>
            <PaymentMethodButton
              onClick={() => handlePaymentMethodSelection('Dinheiro')}
              type="button"
              isSelected={option === 'Dinheiro'}
            >
              <PiMoneyLight size={16} />
              DINHEIRO
            </PaymentMethodButton>
        </div>
    </PaymentMethodContainer>
  )
}