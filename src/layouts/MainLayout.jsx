import React from 'react';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default MainLayout;
