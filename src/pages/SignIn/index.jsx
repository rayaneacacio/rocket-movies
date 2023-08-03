import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageTitle } from "../../components/page-title";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/button-text";

import { Container, Form, Image } from "./style";

export function SignIn(){
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();
  
  function handleSignIn(event){
    event.preventDefault();
    signIn({ email, password });
  }

  function navigateToSignUp(){
    navigate("/register");
  }

  return (
    <Container>
      <div>

        <PageTitle />

        <Form>
          <h2>Faça seu login</h2>

          <Input placeholder="E-mail" type="text" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />

          <Button title="Entrar" onClick={ handleSignIn } />

          <ButtonText title="Criar conta" onClick={ navigateToSignUp } />

        </Form>

      </div>

      <Image />
    </Container>
  )
}