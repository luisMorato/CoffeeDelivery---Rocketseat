import data from '../../../lib/FakeApi.json';
const { coffees } = data;

import { CoffeeCard } from "./CoffeeCard";

import {
  CoffeeListContainer,
  List,
} from "./CoffeeList.Styles";

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
        <h2>Nossos Cafés</h2>
        <List>
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
              />
            ))}
        </List>
    </CoffeeListContainer>
  )
}