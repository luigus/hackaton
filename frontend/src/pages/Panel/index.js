import React, { Component } from 'react';

import UserArea from './components/UserArea';
import ContentArea from './components/ContentArea';
import ClassesArea from './components/ClassesArea';
import { Container, Content, VerticalDivider } from './styles';

export default class Panel extends Component {
  render() {
    return (
      <Container>
        <Content>
          <UserArea />
          <VerticalDivider />
          <ContentArea />
          <VerticalDivider />
          <ClassesArea />
        </Content>
      </Container>
    );
  }
}
