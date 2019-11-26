import React, { Component } from 'react';

import { Container, Title } from './styles';
import LoginForm from './components/ContainerForm';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Title>EducTech</Title>
        <LoginForm />
      </Container>
    );
  }
}
