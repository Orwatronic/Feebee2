import React from 'react';
import styled from 'styled-components';

const DigitalTransformation = () => {
  return (
    <TransformationWrapper>
      <HeroSection>
        <h1>Digital Transformation</h1>
        <p>Transform your business for the digital age with innovative solutions</p>
      </HeroSection>

      <ContentSection>
        <MainContent>
          <h2>Accelerate Your Digital Journey</h2>
          <p>We help organizations embrace digital technologies to create new — or modify existing — business processes, culture, and customer experiences.</p>

          <TransformationGrid>
            <TransformationCard>
              <h3>Strategy Development</h3>
              <p>Create a comprehensive digital transformation roadmap aligned with your business goals.</p>
              <ul>
                <li>Digital Maturity Assessment</li>
                <li>Technology Stack Planning</li>
                <li>Change Management Strategy</li>
              </ul>
            </TransformationCard>

            <TransformationCard>
              <h3>Process Optimization</h3>
              <p>Streamline and automate business processes for maximum efficiency.</p>
              <ul>
                <li>Workflow Automation</li>
                <li>Process Reengineering</li>
                <li>Integration Solutions</li>
              </ul>
            </TransformationCard>

            <TransformationCard>
              <h3>Technology Implementation</h3>
              <p>Deploy cutting-edge technologies to drive innovation.</p>
              <ul>
                <li>Cloud Migration</li>
                <li>AI & Machine Learning</li>
                <li>IoT Integration</li>
              </ul>
            </TransformationCard>
          </TransformationGrid>

          <BenefitsSection>
            <h2>Benefits of Digital Transformation</h2>
            <BenefitsList>
              <BenefitItem>Enhanced Customer Experience</BenefitItem>
              <BenefitItem>Improved Operational Efficiency</BenefitItem>
              <BenefitItem>Data-Driven Decision Making</BenefitItem>
              <BenefitItem>Increased Competitive Advantage</BenefitItem>
            </BenefitsList>
          </BenefitsSection>

          <CTASection>
            <h3>Ready to Start Your Digital Transformation?</h3>
            <p>Let's discuss how we can help transform your business.</p>
            <CTAButton>Schedule a Consultation</CTAButton>
          </CTASection>
        </MainContent>
      </ContentSection>
    </TransformationWrapper>
  );
};

const TransformationWrapper = styled.div`
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

const TransformationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
`;

const TransformationCard = styled.div`
  padding: var(--spacing-md);
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
  }

  p {
    margin-bottom: var(--spacing-sm);
    color: var(--text-light);
  }

  ul {
    list-style-type: none;
    
    li {
      margin-bottom: var(--spacing-xs);
      color: var(--text-light);
      &:before {
        content: "→";
        margin-right: 8px;
        color: var(--primary-color);
      }
    }
  }
`;

const BenefitsSection = styled.div`
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-lg);
  background: var(--background-light);
  border-radius: 10px;

  h2 {
    text-align: center;
    margin-bottom: var(--spacing-md);
  }
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
`;

const BenefitItem = styled.div`
  text-align: center;
  padding: var(--spacing-sm);
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: var(--text-color);
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

export default DigitalTransformation;