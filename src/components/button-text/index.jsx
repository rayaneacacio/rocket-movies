import { Container } from './style';

export function ButtonText({ icon, title, ...rest }){
  return (
    <Container {...rest}>
      {
        icon &&

        <div> { icon } </div>
      }
      
      { title }
    </Container>
  )
}