import React, { Component } from 'react';
import { List, Avatar } from 'antd';

import { Container, Content } from './styles';
import avatar from '../../../../assets/images/avatar.jpeg';

export default class UserArea extends Component {
  state = {
    data: [{}],
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    const response = {
      name: 'Tiago de Alencar',
      city: 'Fortaleza',
      school: 'Dom Bosco',
      level: 'Nerd',
      score: '1370',
      active_days: '27',
    };
    const data = [
      { title: 'Name:', description: response.name },
      { title: 'City:', description: response.city },
      { title: 'School:', description: response.school },
      { title: 'Level:', description: response.level },
      { title: 'Score:', description: response.score },
      { title: 'Active days:', description: response.active_days },
    ];
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Avatar size={96} src={avatar} style={{ marginTop: '25px' }} />
        {/* <Img src={avatar} /> */}
        <Content>
          <List
            style={{ width: '80%' }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
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
