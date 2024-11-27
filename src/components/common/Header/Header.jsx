import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Change to true when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <HeaderContent isScrolled={isScrolled}>
        <LogoContainer to="/" isScrolled={isScrolled}>
          <LogoImage src="/logo.svg" alt="FeeBee" isScrolled={isScrolled} />
          <LogoText isScrolled={isScrolled}>
            Fee<SpanBee>Bee</SpanBee>
          </LogoText>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/" $isActive={location.pathname === "/"} isScrolled={isScrolled}>
            Home
          </NavLink>
          <NavLink to="/services" $isActive={location.pathname.includes("/services")} isScrolled={isScrolled}>
            Services
          </NavLink>
          <NavLink to="/about" $isActive={location.pathname === "/about"} isScrolled={isScrolled}>
            About
          </NavLink>
          <NavLink to="/work" $isActive={location.pathname === "/work"} isScrolled={isScrolled}>
            Work
          </NavLink>
          <NavLink to="/blog" $isActive={location.pathname === "/blog"} isScrolled={isScrolled}>
            Blog
          </NavLink>
          <NavLink to="/contact" $isActive={location.pathname === "/contact"} isScrolled={isScrolled}>
            Contact
          </NavLink>
        </NavLinks>
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled 
    ? 'rgba(235, 245, 255, 0.85)' 
    : 'rgba(235, 245, 255, 0.95)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.isScrolled 
    ? '0 2px 10px rgba(0,0,0,0.1)' 
    : 'none'};
  transition: all 0.3s ease;
  height: ${props => props.isScrolled ? '60px' : '80px'};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  transition: all 0.3s ease;
  transform: scale(${props => props.isScrolled ? 0.9 : 1});
`;

const LogoImage = styled.img`
  height: ${props => props.isScrolled ? '30px' : '40px'};
  width: auto;
  transition: all 0.3s ease;
`;

const LogoText = styled.h1`
  font-size: ${props => props.isScrolled ? '1.5rem' : '1.8rem'};
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
`;

const SpanBee = styled.span`
  color: #007bff;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.$isActive ? '#007bff' : '#333'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-size: ${props => props.isScrolled ? '0.9rem' : '1rem'};
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #007bff;
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #007bff;
    
    &:after {
      transform: scaleX(1);
    }
  }
`;

export default Header; 