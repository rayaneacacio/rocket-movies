import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Container } from './style';

export function Stars({ scoring, width, height }){
  const [ stars, setStars ] = useState(0);
  
  const starStyle = { width: width, height: height };

  useEffect(() => {
    setStars(Number(scoring));
    
  }, [ scoring ]);

  return (
    <Container>
      { Array.from({length: stars}, (star, index) => (<AiFillStar key={ index } style={ starStyle } />)) }
      { Array.from({length: 5-stars}, (star, index) => (<AiOutlineStar key={ index } style={ starStyle } />)) }
    </Container>
  )
}