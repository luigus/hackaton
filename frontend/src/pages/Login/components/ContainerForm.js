import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { Container, Buttons } from './styles.js';

class ContainerLoginForm extends React.Component {
  handleSubmit = e => {};

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} style={{ width: '70%' }}>
          <Form.Item label="E-mail">
            {getFieldDecorator(
              'email',
              {}
            )(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="E-mail"
              />
            )}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Buttons>
              <Link to="/panel" style={{ width: '100%' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                  size="large"
                >
                  Log in
                </Button>
              </Link>
              <Link to="/signup" style={{ width: '100%' }}>
                <Button
                  type="default"
                  htmlType="submit"
                  style={{ width: '100%', marginTop: '20px' }}
                  size="large"
                >
                  register now!
                </Button>
              </Link>
            </Buttons>
          </Form.Item>
        </Form>
      </Container>
    );
  }
}

const LoginForm = Form.create({ name: 'login_form' })(ContainerLoginForm);

export default LoginForm;
