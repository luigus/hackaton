import React, { Component } from 'react';
import { Divider } from 'antd';

import { Container, Description, Content, Title, Text } from './styles';

export default class ContentArea extends Component {
  state = {
    data: [{}],
  };

  componentDidMount() {
    // this.fetchData();
  }

  render() {
    return (
      <Container>
        <Description>
          <h2>Descrição</h2>
          <p>Trocando roda de carro</p>
        </Description>
        <Divider />
        <Content>
          <Title>Problema</Title>
          <Text>
            Um planeta (do grego πλανήτης [planεːtεːs] viajante) é um corpo
            celeste que orbita uma estrela ou um remanescente de estrela, com
            massa suficiente para se tornar esférico pela sua própria gravidade,
            mas não ao ponto de causar fusão termonuclear, e que tenha limpo de
            planetesimais a sua região vizinha (dominância orbital).[1][2] O
            termo planeta é antigo, com ligações com a história, ciência,
            mitologia e religião. Os planetas eram vistos por muitas culturas
            antigas como divinos ou emissários de deuses. À medida que o
            conhecimento científico evoluiu, a percepção humana sobre os
            planetas mudou, incorporando diversos tipos de objetos. Em 2006, a
            União Astronômica Internacional (UAI) adotou oficialmente uma
            resolução definindo planetas dentro do Sistema Solar, a qual tem
            sido elogiada e criticada, permanecendo em discussão entre alguns
            cientistas.
          </Text>
        </Content>
      </Container>
    );
  }
}
