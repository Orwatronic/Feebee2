import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'ERP Solutions',
      shortDesc: 'Streamline your operations',
      hoverTitle: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions to integrate and optimize your business processes.',
      image: '/images/erp-solution.jpg'
    },
    {
      title: 'Digital Transformation',
      shortDesc: 'Transform your business',
      hoverTitle: 'Digital Transformation Strategy',
      description: 'Strategic digital transformation solutions to modernize your organization.',
      image: '/images/digital-transform.jpg'
    },
    {
      title: 'Digitalization',
      shortDesc: 'Digitize your workflows',
      hoverTitle: 'Digital Process Solutions',
      description: 'Convert your traditional processes into efficient digital workflows.',
      image: '/images/digitalization.jpg'
    },
    {
      title: 'Cloud and DevOps',
      shortDesc: 'Optimize your infrastructure',
      hoverTitle: 'Cloud and DevOps Solutions',
      description: 'Streamline development and deployment with automated workflows and cloud-based tools.',
      image: '/images/cloud-devops.jpg'
    },
    {
      title: 'Cyber Security',
      shortDesc: 'Protect your assets',
      hoverTitle: 'Advanced Security Solutions',
      description: 'Comprehensive security measures to protect your data and systems.',
      image: '/images/cyber-security.jpg'
    },
    {
      title: 'Software Development',
      shortDesc: 'Custom solutions',
      hoverTitle: 'Custom Software Solutions',
      description: 'Build robust and scalable applications tailored to your business needs.',
      image: '/images/software-dev.jpg'
    }
  ];

  return (
    <ServicesWrapper>
      <ServicesHero>
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your digital journey</p>
      </ServicesHero>

      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceContent>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceInfo>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
              </ServiceInfo>
            </ServiceContent>
            <HoverContent>
              <h3>{service.hoverTitle}</h3>
              <p>{service.description}</p>
              <ServiceLink to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Learn More →
              </ServiceLink>
            </HoverContent>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding-top: 60px;
`;

const ServicesHero = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #f8f9fa;
  margin-bottom: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceContent = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
  background: white;
  display: flex;
  flex-direction: column;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ServiceInfo = styled.div`
  padding: 2rem;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.5;
  }
`;

const HoverContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  background: #007bff;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  ${ServiceCard}:hover & {
    transform: translateY(0);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const ServiceLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  
  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }
`;

export default Services;
