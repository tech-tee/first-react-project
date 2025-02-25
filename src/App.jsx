import React from 'react';
import TopHeader from './components/TopHeader/TopHeader.jsx';  
import MainHeader from './components/MainHeader/MainHeader.jsx'; 
import HeroSection from './components/HeroSection.jsx';
import Body1 from './components/Body1.jsx';
import CertificationSection from './components/CertificationSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import IndSection from './components/IndSection.jsx';
import PrdSection from './components/PrdSection.jsx';
import CaseSection from './components/CaseSection.jsx';
import TechStack from './components/TechStack.jsx';
import ClientSection from './components/ClientSection.jsx';
import ConSection from './components/ConSection.jsx';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <MainHeader />
      <HeroSection />
      <Body1 />
      <CertificationSection />
      <ServicesSection />
      <IndSection />
      <PrdSection />
      <CaseSection />
      <TechStack />
      <ClientSection />
      <ConSection />
    </div>
  );
}

export default App;
