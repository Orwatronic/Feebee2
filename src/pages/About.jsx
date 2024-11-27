import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <h1>About Us</h1>
      <p>Coming Soon...</p>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  padding: var(--spacing-lg);
  text-align: center;
`;

export default About;
