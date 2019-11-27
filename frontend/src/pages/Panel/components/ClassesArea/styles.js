import styled from 'styled-components';
import { List } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NList = styled(List)`
  width: 100% !important;
  cursor: pointer;

  .anticon {
    margin: 0 10px;
  }

  .ant-list-item-meta-description {
    font-style: italic;
    color: rgba(0, 0, 0, 0.25);
  }

  .ant-list-item-meta-title {
    font-weight: bold;
  }

  .ant-list-item:nth-child(2n + 2) {
    background-color: #ededed;
  }
`;
