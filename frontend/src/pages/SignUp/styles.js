import styled from 'styled-components';

import { Form, Button, DatePicker } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  background-color: ${colors.secundary};
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  color: ${colors.text};
  text-align: center;
`;

export const Scrollbar = styled(PerfectScrollbar)`
  padding: 0 20px;
  width: 95%;
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 10px !important;

  .ant-form-item-label {
    line-height: 15px;
  }
`;

export const NButton = styled(Button)`
  width: 100%;
`;

export const NDatePicker = styled(DatePicker)`
  width: 100%;
`;
