
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

const AppTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  
`;

export {
  AppContainer,
  AppTitle
};
