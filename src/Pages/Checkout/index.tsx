import { useContext } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm
} from "react-hook-form";
import {
  Navigate,
  useNavigate
} from "react-router-dom";
import { toast } from "react-toastify";
import { IoLocationOutline } from "react-icons/io5";

import { UserContext } from "../../Contexts/UserContext";

import { UseCart } from "../../hooks/UseCart";
import { userProps } from "../../@types/User";

import { AddressForm } from "./Components/AddressForm";
import { PaymentMethod } from "./Components/PaymentMethod";
import { SelectedCoffees } from "./Components/Sidebar/SelectedCoffees";

import {
  CheckouMainContent,
  CheckOutContainer,
  Wrapper,
} from "./Checkout.styles";

type FieldValues = Omit<userProps, 'id'>;

export const Checkout = () => {
  const navigate = useNavigate();

  const { cart } = UseCart();
  const { userData, handleUserDataChange } = useContext(UserContext);

  const methods = useForm<FieldValues>({
    defaultValues: {
      cep: userData?.cep || '',
      street: userData?.street || '',
      houseNumber: userData?.houseNumber || '',
      complement: userData?.complement || '',
      neighborhood: userData?.neighborhood || '',
      city: userData?.city || '',
      state: userData?.state || '',
      paymentMethod: ''
    }
  });
  const { handleSubmit, reset, formState: { isSubmitting } } = methods;

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      handleUserDataChange(data);
      toast.success('Pedido Confirmado!');
      reset();

    } catch (error) {
      console.error('Error: ', error);
      return;
    }

    setTimeout(() => {
      navigate('/Success');
    }, 2500);
  }

  return cart.cartProducts.length > 0 ? (
    <FormProvider {...methods}>
        <CheckOutContainer onSubmit={handleSubmit(submitForm)}>
          <div>
            <h2>Complete seu pedido</h2>
            <CheckouMainContent>
              <Wrapper svgColor="darkYellow">
                <IoLocationOutline size={22} /> <span></span>
                <div>
                  <p>Endereço de Entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </Wrapper>
              <AddressForm />
            </CheckouMainContent>
            <PaymentMethod />
          </div>
          <SelectedCoffees
            isSubmitting={isSubmitting}
          />
        </CheckOutContainer>
    </FormProvider>
  ) : (<Navigate to='/'></Navigate>)
}