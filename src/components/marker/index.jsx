import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

import { Container } from './style';

export function Marker({ title, $new = false, $edit = false, onClick, ...rest }) {
  return (
    <Container>
      {
        $new &&
        <div className="newMarker">
          <input placeholder={ title } {...rest} />
          <button onClick={ onClick } {...rest}> { <AiOutlinePlus /> } </button>
        </div>
      }

      {
        $edit &&
        <div>
          <span> { title } </span>
          <button onClick={ onClick }> { <AiOutlineClose /> } </button>
        </div>
      }

      {
        !$new && !$edit &&
        <div>
          <span> { title } </span>
        </div>
      }
    </Container>
  )
}