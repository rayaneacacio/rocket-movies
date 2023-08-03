import { Container } from './style';

export function Button({ icon, title, ...rest }){
  return (
    <Container { ...rest }>
      {
        icon &&
        <div>
          { icon }
        </div>
      }
      { title }
    </Container>
  )
}