import React from 'react';
import logo from '../../assets/logo.png';
import ilustration from '../../assets/ilustration.svg';
import { Container, Logo, Ilustration, Info } from './styles';

const Intro = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Info>Desfrute a liberdade de ter suas anotações em qualquer lugar.</Info>
      <Ilustration src={ilustration} />
    </Container>
  )
}

export default Intro