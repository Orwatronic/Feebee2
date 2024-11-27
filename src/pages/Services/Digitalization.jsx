import React from 'react';
import styled from 'styled-components';

const Digitalization = () => {
  return (
    <DigitalizationWrapper>
      <HeroSection>
        <h1>Digitalization Services</h1>
        <p>Convert traditional processes into efficient digital workflows</p>
      </HeroSection>

      <ContentSection>
        <MainContent>
          <h2>Modernize Your Business Processes</h2>
          <p>Our digitalization services help businesses convert analog processes into digital formats, improving efficiency and reducing costs.</p>

          <ServicesGrid>
            <ServiceCard>
              <h3>Document Digitization</h3>
              <p>Convert physical documents into searchable digital formats.</p>
              <ul>
                <li>Document Scanning</li>
                <li>OCR Processing</li>
                <li>Digital Archive Creation</li>
              </ul>
            </ServiceCard>

            <ServiceCard>
              <h3>Process Automation</h3>
              <p>Automate manual workflows for increased efficiency.</p>
              <ul>
                <li>Workflow Automation</li>
                <li>Business Process Automation</li>
                <li>RPA Implementation</li>
              </ul>
            </ServiceCard>

            <ServiceCard>
              <h3>Data Management</h3>
              <p>Organize and manage your digital data effectively.</p>
              <ul>
                <li>Data Migration</li>
                <li>Digital Asset Management</li>
                <li>Data Security Solutions</li>
              </ul>
            </ServiceCard>
          </ServicesGrid>

          <ProcessSection>
            <h2>Our Digitalization Process</h2>
            <ProcessSteps>
              <Step>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <h4>Assessment</h4>
                  <p>Evaluate current processes and identify digitalization opportunities</p>
                </StepContent>
              </Step>
              <Step>
                <StepNumber>2</StepNumber>
                <StepContent>
                  <h4>Planning</h4>
                  <p>Develop a comprehensive digitalization strategy</p>
                </StepContent>
              </Step>
              <Step>
                <StepNumber>3</StepNumber>
                <StepContent>
                  <h4>Implementation</h4>
                  <p>Execute the digitalization plan with minimal disruption</p>
                </StepContent>
              </Step>
              <Step>
                <StepNumber>4</StepNumber>
                <StepContent>
                  <h4>Training</h4>
                  <p>Train your team on new digital processes</p>
                </StepContent>
              </Step>
            </ProcessSteps>
          </ProcessSection>

          <CTASection>
            <h3>Ready to Digitalize Your Business?</h3>
            <p>Contact us to discuss your digitalization needs.</p>
            <CTAButton>Get Started</CTAButton>
          </CTASection>
        </MainContent>
      </ContentSection>
    </DigitalizationWrapper>
  );
};

const DigitalizationWrapper = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
`;

const ServiceCard = styled.div`
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

const ProcessSection = styled.div`
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-lg);
  background: var(--background-light);
  border-radius: 10px;

  h2 {
    text-align: center;
    margin-bottom: var(--spacing-lg);
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  background: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  h4 {
    margin-bottom: var(--spacing-xs);
    color: var(--text-color);
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

export default Digitalization;

