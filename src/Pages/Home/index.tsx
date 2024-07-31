import { HomeContainer } from "./Index.styles";

import { HeroSection } from "./Components/HeroSection";
import { CoffeeList } from "./Components/CoffeeList";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeList />
    </HomeContainer>
  )
}