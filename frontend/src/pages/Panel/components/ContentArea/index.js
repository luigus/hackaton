import React, { Component } from 'react';
import { Divider, Card } from 'antd';

import { Container, Description, Content, Title, Text } from './styles';
import ProblemImage from '../../../../assets/images/gamification-info.jpg';

export default class ContentArea extends Component {
  render() {
    return (
      <Container>
        <Description>
          <h2>Descrição</h2>
          <p>Lógica de Programação</p>
        </Description>
        <Divider />
        <Content>
          <Title>Problema</Title>
          <Card cover={<img src={ProblemImage} alt="Problem Description" />} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Content>
      </Container>
    );
  }
}
