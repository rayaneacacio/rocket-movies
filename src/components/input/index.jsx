import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Container } from './style';

export function Input({ placeholder, ...rest }){
  return (
    <Container>
      
      <div>
        { placeholder === "Nome" ? <FiUser /> : null }
        { placeholder === "E-mail" ? <FiMail /> : null }
        { placeholder === "Senha" ? <FiLock /> : null }
        { placeholder === "Nova senha" ? <FiLock /> : null }
      </div>

      <input type="text" placeholder={placeholder}  {...rest} />
    
    </Container>
  )
}