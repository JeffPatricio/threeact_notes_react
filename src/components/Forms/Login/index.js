import React, { useState, useEffect } from 'react';
import { postApi, getApi } from '../../../services';
import { Container, Title, Input, Submit, Form, ContainerActions, Action } from './styles';

const FormLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault();
    await getApi('/docs');
  }

  return (
    <Container>
      <Title>Entre para continuar</Title>
      <Form>
        <Input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <Input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <Submit onClick={submitLogin}>Entrar</Submit>
      </Form>
      <ContainerActions>
        <Action>Criar conta</Action>
        <Action>Esqueci a senha</Action>
      </ContainerActions>
    </Container>
  )
}

export default FormLogin