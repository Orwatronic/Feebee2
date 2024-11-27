import React from 'react';
import styled from 'styled-components';

const Home = () => {
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
    <HomeWrapper>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Welcome to <span>Fee</span>Bee
          </HeroTitle>
          <HeroSubtitle>
            Transforming Business Through Digital Innovation
          </HeroSubtitle>
          <HeroText>
            Empowering enterprises with cutting-edge digital solutions for tomorrow's challenges
          </HeroText>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>Our Services</SectionTitle>
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
      </ServicesSection>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  margin-top: 60px;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
  margin-top: -60px;
  padding-top: 60px;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  padding: 2rem;

  h1, h2, p {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1rem;
  letter-spacing: -1px;
  
  span {
    color: #007bff;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

const HeroText = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #333;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #007bff;
    margin: 1.5rem auto;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2.5rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  position: relative;
  height: 400px;
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
  height: 60%;
  object-fit: cover;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ServiceInfo = styled.div`
  padding: 1.5rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.4;
  }
`;

const HoverContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5rem;
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
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100%;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const ServiceLink = styled.a`
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

export default Home;
