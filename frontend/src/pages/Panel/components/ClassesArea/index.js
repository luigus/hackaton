import React, { Component } from 'react';
import { List, Icon } from 'antd';

import { Container, Content, NList } from './styles';

export default class ClassesArea extends Component {
  state = {
    data: [
      {
        title: 'Módulo 1',
        description: 'Lógica de Programação',
      },
      {
        title: 'Módulo 2',
        description: 'Noções Básicas de Programação',
      },
      {
        title: 'Módulo 3',
        description: 'Algoritmo',
      },
      {
        title: 'Módulo 4',
        description: 'Ética de Programação',
      },
    ],
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    // const response = {};
    // this.setState({ data });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Content>
          <NList
            style={{ width: '80%' }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Icon type="left" />
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Content>
      </Container>
    );
  }
}
