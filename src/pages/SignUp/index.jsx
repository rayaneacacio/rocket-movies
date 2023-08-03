import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { BiArrowBack } from 'react-icons/bi'

import { PageTitle } from '../../components/page-title';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/button-text';

import { Container, Form, Image } from "./style";

export function SignUp(){
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    event.preventDefault();

    if(!name || !email || !password){
      return alert("preencha todos os campos");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("usuário cadastrado com sucesso");
      navigateBack();

    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("nao foi possível cadastrar");
      }
      
    })
  }

  function navigateBack(){
    navigate("/");
  }

  return (
    <Container>

      <div>
        <PageTitle />

        <Form>
          <h2>Crie sua conta</h2>

          <Input placeholder="Nome" type="text" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="E-mail" type="text" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />

          <Button title="Cadastrar" onClick={ handleSignUp } />

          <ButtonText icon={ <BiArrowBack /> } title="Voltar para o login" onClick={ navigateBack } />
        </Form>
      </div>
      
      <Image />

    </Container>
  )
}