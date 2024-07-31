import { UseCart } from "../../../../hooks/UseCart";

import { Button } from "../../../../Components/Layout/Button/Button";
import { ProductCard } from "../../../../Components/Layout/Card";

import {
  Sidebar,
  SidebarContent,
  TotalContainer,
  TotalContent,
  WrapperCol
} from "./SelectedCoffees.styles";
import { ClipLoader } from "react-spinners";

interface selectedCoffeesProps {
  isSubmitting: boolean,
}

export const SelectedCoffees = ({ isSubmitting }: selectedCoffeesProps) => {
  const { cart } = UseCart();

  const deliveryAmount = cart.cartProducts.length * 1.25;
  const formattedDeliveryAmount = deliveryAmount.toFixed(2).replace('.', ',');

  const priceArray = cart.cartProducts.map(({ coffee, quantity }) => quantity * coffee.price);
  const ItemsTotal = priceArray.reduce((prev, current) => prev + current, 0);
  const formatedItemsTotal = ItemsTotal.toFixed(2).replace('.', ',');

  const total = ItemsTotal + deliveryAmount;
  const formatedTotal = total.toFixed(2).replace('.', ',');
  
  return (
    <Sidebar>
        <h2>Cafés selecionados</h2>
        <SidebarContent>
            <WrapperCol productsLength={cart.cartProducts.length}>
              {cart.cartProducts.map(({ coffee, quantity }) => (
                <ProductCard
                  key={coffee.id}
                  coffee={coffee}
                  quantity={quantity}
                />
              ))}
            </WrapperCol>
            <TotalContainer>
              <TotalContent>
                <div>
                  <span>Total de itens</span>
                  <span>R$ {(formatedItemsTotal)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ {formattedDeliveryAmount}</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>R$ {formatedTotal}</span>
                </div>
              </TotalContent>
              <Button
                type="submit"
                variant="yellow"
                disabled={isSubmitting}
              >
                {isSubmitting ?
                  (<ClipLoader size={14} />)
                  :
                  ("CONFIRMAR PEDIDO")
                }
              </Button>
            </TotalContainer>
        </SidebarContent>
    </Sidebar>
  )
}