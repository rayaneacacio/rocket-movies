import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { BiArrowBack } from 'react-icons/bi'
import { FiCamera } from 'react-icons/fi';

import avatarPlaceholderSvg from "../../assets/avatar_placeholder.svg";

import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/button-text';

import { Container, Header, Avatar, Form } from './style';

export function Profile(){
  const { user, updateUser } = useAuth();

  const [ name, setName ] = useState(user.name);
  const [ email, setEmail ] = useState(user.email);
  const [ oldPassword, setOldPassword ] = useState("");
  const [ newPassword, setNewPassword ] = useState("");

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholderSvg;
  const [ avatar, setAvatar ] = useState(avatarURL);
  const [ avatarFile, setAvatarFile ] = useState(null);

  const navigate = useNavigate();

  function navigateBack(){
    navigate(-1);
  }

  async function updateProfile(){
    const userNewData = {
      name,
      email,
      oldPassword,
      newPassword,
    };

    const userDataUpdated = Object.assign(user, userNewData);

    await updateUser({ userDataUpdated, avatarFile });
  }

  function changeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header>
        <ButtonText icon={ <BiArrowBack /> } title="Voltar" onClick={ navigateBack } />
      </Header>

      <Avatar>
        <img src={ avatar } alt="foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" onChange={ changeAvatar } />
        </label>
      </Avatar>
      
      <Form>
        <Input placeholder="Nome" type="text" value={ name } onChange={(e) => setName(e.target.value)} />
        <Input placeholder="E-mail" type="text" value={ email } onChange={(e) => setEmail(e.target.value)}  />
        <Input placeholder="Senha" type="password" onChange={(e) => setOldPassword(e.target.value)} />
        <Input placeholder="Nova senha" type="password" onChange={(e) => setNewPassword(e.target.value)} />
      </Form>
     
      <Button title="Salvar" onClick={ updateProfile } />

    </Container>
  )
}