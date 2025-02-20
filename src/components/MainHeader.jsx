import { useState } from "react";
import "./MainHeader.css";
import roundSquare from "../assets/images/rounded-square.png";

const MainHeader = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo"><img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Logo" /></h1>
        <ul className="nav-links">
          <NavItem label="Home" />
          <NavItem label="About Us" dropdown>
            <DropdownMenu className="about-us-menu">
              <DropdownItem title="Who we are" description="Our history, mission, vision, and values." />
              <DropdownItem title="What we do" description="Learn more about the wide range of IT services we offer." />
              <DropdownItem title="Why Speedlink" description="We provide ICT solutions that make your business stand out." />
              <DropdownItem title="Meet our Team" description="Meet our decent, hardworking team members." />
              <DropdownItem title="Our partners & top Clients" description="View our partner companies and top clients." />
            </DropdownMenu>
          </NavItem>
          <NavItem label="Services" dropdown>
            <DropdownMenu mega>
                <div className="mega-menu">
                  <Category title="IT Services" items={["Software Application Development", "Web design/development", "Software installations"]} className="section-1" />
                  <Category title="Networking Services" items={["Fiber-to-the-home", "Routing and Switching", "Voice Over Internet Protocol - VOIP", "Internet Service Provider - ISP"]} className="section-2" />
                  <Category title="Technical Security" items={["Video Surveillance (CCTV)", "Intrusion Prevention Systems", "Fire detection systems", "Alarm zs"]} className="section-3" />
                  <Category title="Cloud Services" items={["Storage Infrastructure", "Cloud hosting", "Cloud-based ERP/CRM"]} className="section-4" />
                  <Category title="Digital Marketing" items={["Social Media Marketing", "Digital Marketing", "Media Planning and Buying", "Search Engine Optimization"]} className="section-5" />
                  <Category title="Certified Training" items={["Mikrotik Certification", "CCTV Installation", "Web app development", "Web design and development"]} className="section-6" />
              </div>
            </DropdownMenu>
          </NavItem>
          <NavItem label="Case Study" dropdown>
            <CaseStudyMenu>
              <CaseStudyOption title="Integration of Secured and Reliable Examination Platform" />
              <CaseStudyOption title="Hybrid Learning Management" />
            </CaseStudyMenu>
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ label, dropdown, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span className="nav-label">{label} {dropdown && "▼"}</span>
      {open && children}
    </li>
  );
};

const DropdownMenu = ({ mega, children }) => {
  return <div className={mega ? "dropdown mega" : "dropdown"}>{children}</div>;
};

const DropdownItem = ({ title, description }) => {
  return (
    <div className="dropdown-item">
      <strong>{title}</strong>
      {description && <p>{description}</p>}
    </div>
  );
};

const Category = ({ title, items, className }) => {
  return (
    <div className={`category ${className}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={roundSquare} alt="icon" className="icon" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CaseStudyMenu = ({ children }) => {
  return <div className="case-study-menu">{children}</div>;
};

const CaseStudyOption = ({ title }) => {
  return <div className="case-study-option">{title}</div>;
};



export default MainHeader;
