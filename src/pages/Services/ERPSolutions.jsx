import React from 'react';
import styled from 'styled-components';

const ERPSolutions = () => {
  return (
    <ERPWrapper>
      <HeroSection>
        <h1>ERP Solutions</h1>
        <p>Streamline your business operations with our comprehensive ERP solutions</p>
      </HeroSection>

      <ContentSection>
        <MainContent>
          <h2>Transform Your Business Operations</h2>
          <p>Our ERP solutions help businesses streamline their operations, improve efficiency, and drive growth through integrated systems and processes.</p>
          
          <FeaturesList>
            <Feature>
              <h3>Financial Management</h3>
              <p>Streamline accounting, budgeting, and financial reporting processes.</p>
            </Feature>
            <Feature>
              <h3>Supply Chain Management</h3>
              <p>Optimize inventory, procurement, and supply chain operations.</p>
            </Feature>
            <Feature>
              <h3>Human Resources</h3>
              <p>Manage employee data, payroll, and HR processes efficiently.</p>
            </Feature>
          </FeaturesList>

          <CTASection>
            <h3>Ready to Transform Your Business?</h3>
            <p>Contact us for a free consultation about our ERP solutions.</p>
            <CTAButton>Get Started</CTAButton>
          </CTASection>
        </MainContent>
      </ContentSection>
    </ERPWrapper>
  );
};

const ERPWrapper = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: var(--spacing-lg) var(--spacing-md);
  background: var(--background-light);

  h1 {
    margin-bottom: var(--spacing-sm);
  }

  p {
    color: var(--text-light);
    font-size: var(--font-md);
  }
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
`;

const MainContent = styled.div`
  h2 {
    margin-bottom: var(--spacing-md);
    color: var(--text-color);
  }

  > p {
    margin-bottom: var(--spacing-lg);
    color: var(--text-light);
    font-size: var(--font-md);
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
`;

const Feature = styled.div`
  padding: var(--spacing-md);
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
  }

  p {
    color: var(--text-light);
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--background-light);
  border-radius: 10px;

  h3 {
    margin-bottom: var(--spacing-sm);
  }

  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-light);
  }
`;

const CTAButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-size: var(--font-sm);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: var(--primary-dark);
  }
`;

export default ERPSolutions;
