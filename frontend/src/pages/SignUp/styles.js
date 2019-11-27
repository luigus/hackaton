import styled from 'styled-components';
import colors from '../../styles/colors';
import { Form, Button, DatePicker } from 'antd';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 500px;
  margin: 0 auto;
  background-color: ${colors.secundary};
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  color: ${colors.text};
  text-align: center;
`;

export const NForm = styled(Form)`
  flex: 1;
  width: 80%;
`;

export const NButton = styled(Button)`
  width: 100%;
`;

export const NDatePicker = styled(DatePicker)`
  width: 100%;
`;
