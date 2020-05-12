import React from 'react';
import Intro from '../../components/Intro';
import FormLogin from '../../components/Forms/Login';
import { Container, ContainerContent } from './styles';

const Login = () => {
  return (
    <Container>
      <ContainerContent>
        <Intro />
        <FormLogin />
      </ContainerContent>
    </Container>
  )
}

export default Login;