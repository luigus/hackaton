import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  color: ${colors.textPrimary};
  background: ${colors.secundary};
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 64px;
`;
