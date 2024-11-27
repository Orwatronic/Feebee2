import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Your Company</h3>
          <p>Innovative Solutions in ERP and Digital Transformation</p>
        </FooterSection>
        
        <FooterSection>
          <h4>Quick Links</h4>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <h4>Contact</h4>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </FooterBottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
  width: 100%;
  max-width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3, h4 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #007bff;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default Footer;