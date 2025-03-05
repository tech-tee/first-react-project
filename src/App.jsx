import React from 'react';
import TopHeader from './components/TopHeader/TopHeader.jsx';  
import MainHeader from './components/MainHeader/MainHeader.jsx'; 
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Body1 from './components/Body1/Body1.jsx';
import CertificationSection from './components/CertificationSection/CertificationSection.jsx';
import ServicesSection from './components/ServicesSection/ServicesSection.jsx';
import IndSection from './components/IndSection/IndSection.jsx';
import PrdSection from './components/PrdSection/PrdSection.jsx';
import CaseSection from './components/CaseSection/CaseSection.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import ClientSection from './components/ClientSection/ClientSection.jsx';
import ConSection from './components/ConSection/ConSection.jsx';

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
