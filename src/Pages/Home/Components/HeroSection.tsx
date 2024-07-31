import { FaShoppingCart } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import {
    PiPackage,
    PiCoffeeFill
} from "react-icons/pi";

import {
    HeroSectionContainer,
    Wrapper,
    Intro,
    Items,
    Item,
} from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
        <Wrapper>
            <Intro>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </Intro>
            <Items>
                <Item variant="darkYellow">
                    <div><FaShoppingCart size={16} /></div>
                    <span>Compra simples e segura</span>
                </Item>
                <Item variant="brown">
                    <div><PiPackage size={16} /></div>
                    <span>Embalagem mantém o café intacto</span>
                </Item>
                <Item variant="yellow">
                    <div><MdTimer size={16} /></div>
                    <span>Entrega rápida e rastreada</span>
                </Item>
                <Item variant="purple">
                    <div><PiCoffeeFill size={16} /></div>
                    <span>O café chega fresquinho até você</span>
                </Item>
            </Items>
        </Wrapper>
        <img src="/Images/Coffee-1-Image.png" alt="cup of coffee" />
    </HeroSectionContainer>
  )
}