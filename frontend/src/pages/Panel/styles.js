import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 64px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: ${colors.secundary};
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid #e8e8e8;
  height: 100%;
`;
