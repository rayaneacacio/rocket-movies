import { Stars } from '../stars';

import { Container } from "./style";

export function Section({ title, scoring, description, tags, ...rest }){
  return (
    <Container {...rest}>

      <h2> { title } </h2>

      <Stars scoring={scoring} />
      
      <p> { description } </p>

      <div> { tags } </div>
      
    </Container>
  )
}