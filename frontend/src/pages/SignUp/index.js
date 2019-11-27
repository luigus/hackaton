import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import locale from 'antd/es/date-picker/locale/pt_BR';

import {
  Container,
  Title,
  NForm,
  NButton,
  NDatePicker,
  FormContent,
} from './styles';

class SignUpForm extends Component {
  state = {
    states: [
      { id: 1, label: 'AC' },
      { id: 2, label: 'AL' },
      { id: 3, label: 'AP' },
      { id: 4, label: 'AM' },
      { id: 5, label: 'BA' },
      { id: 6, label: 'CE' },
      { id: 7, label: 'DF' },
      { id: 8, label: 'ES' },
      { id: 9, label: 'GO' },
      { id: 10, label: 'MA' },
      { id: 11, label: 'MT' },
      { id: 12, label: 'MS' },
      { id: 13, label: 'MG' },
      { id: 14, label: 'PA' },
      { id: 15, label: 'PB' },
      { id: 16, label: 'PR' },
      { id: 17, label: 'PE' },
      { id: 18, label: 'PI' },
      { id: 19, label: 'RJ' },
      { id: 20, label: 'RN' },
      { id: 21, label: 'RS' },
      { id: 22, label: 'RO' },
      { id: 23, label: 'RR' },
      { id: 24, label: 'SC' },
      { id: 25, label: 'SP' },
      { id: 26, label: 'SE' },
      { id: 27, label: 'TO' },
    ],
    series: [
      { id: 1, label: '1º Ano Ensino Médio' },
      { id: 2, label: '2º Ano Ensino Médio' },
      { id: 3, label: '3º Ano Ensino Médio' },
    ],
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;

    const { states, series } = this.state;

    return (
      <Container>
        <Title>EducTech</Title>

        <NForm className="login-form">
          <Form.Item label="Nome">
            {getFieldDecorator('name', {})(<Input />)}
          </Form.Item>

          <Form.Item label="E-mail">
            {getFieldDecorator('email', {})(<Input />)}
          </Form.Item>

          <Form.Item label="Data de Nascimento">
            <NDatePicker format={'DD/MM/YYYY'} locale={locale} placeholder="" />
          </Form.Item>

          <Form.Item label="Estado">
            <Select>
              {states.map(item => (
                <Option key={item.id} value={item.id}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Cidade">
            {getFieldDecorator('city', {})(<Input />)}
          </Form.Item>

          <Form.Item label="Escola">
            {getFieldDecorator('school', {})(<Input />)}
          </Form.Item>

          <Form.Item label="Série">
            <Select>
              {series.map(item => (
                <Option key={item.id} value={item.id}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Senha">
            {getFieldDecorator('password', {})(<Input.Password />)}
          </Form.Item>

          <Form.Item>
            <NButton type="primary" htmlType="submit">
              Cadastrar
            </NButton>
          </Form.Item>
        </NForm>
      </Container>
    );
  }
}

const SignUp = Form.create({ name: 'signup_form' })(SignUpForm);

export default SignUp;
