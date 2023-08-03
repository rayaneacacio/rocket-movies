import { Container } from './style';

export function BoxText({ $text = false, $textarea = false, placeholder, ...rest }){
  return (
    <Container >

      {
        $text &&
        <input type="text" placeholder={ placeholder } {...rest} />
      }

      {
        $textarea &&
        <textarea placeholder={ placeholder } {...rest} name="" id="" cols="30" rows="10" />
      }
      
    </Container>
  )
}