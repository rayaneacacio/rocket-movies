import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useNotes } from '../../hooks/notes';
import { api } from "../../services/api.js";

import avatarPlaceholderSvg from "../../assets/avatar_placeholder.svg";

import { BoxText } from '../box-text';
import { ButtonText } from '../button-text';

import { Container, Span } from './style';

export function Header(){
  const { user, signOut } = useAuth();
  const { getNotes, searchNotes } = useNotes();

  const [ title, setTitle ] = useState("");

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholderSvg;

  const navigate = useNavigate();

  function logOut(){
    signOut();
    navigate("/");
  }

  function navigateToProfile(){
    navigate("/profile");
  }

  useEffect(() => {
    if(title) {
      searchNotes({ title });
      return
    }

    getNotes();
    
  }, [ title ]);

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div>
        <BoxText $text placeholder="Pesquisar pelo título" onChange={(e) => setTitle(e.target.value)} />
      </div>
      
      <Span>
        <div>
          <p> { user.name } </p>
          <ButtonText title="sair" onClick={ logOut } />
        </div>

        <img src={avatarURL} alt="foto do usuário" onClick={ navigateToProfile } />
      </Span>
    </Container>
  )
}