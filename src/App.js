import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import MainLayout from './layouts/MainLayout';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
// Import Services pages
import Services from './pages/Services';
import ERPSolutions from './pages/Services/ERPSolutions';
import DigitalTransformation from './pages/Services/DigitalTransformation';
import Digitalization from './pages/Services/Digitalization';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            
            {/* Services Routes */}
            <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
            <Route path="/services/erp" element={<MainLayout><ERPSolutions /></MainLayout>} />
            <Route path="/services/digital-transformation" element={<MainLayout><DigitalTransformation /></MainLayout>} />
            <Route path="/services/digitalization" element={<MainLayout><Digitalization /></MainLayout>} />
            
            <Route path="/work" element={<MainLayout><Work /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
          </Routes>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 60px; /* New header height */
  min-height: calc(100vh - 120px); /* Adjusted for new header height */
`;

export default App;
