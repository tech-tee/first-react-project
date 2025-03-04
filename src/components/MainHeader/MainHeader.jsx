import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import "./MainHeader.css";
import roundSquare from "../../assets/images/black-square.png";

/* Category Component */
const Category = ({ title, items, className }) => (
  <div className={`mega-category ${className}`}>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
      <li key={index}><img src={roundSquare} className="rounSquare"/><a href="#">{item}</a></li>
      ))}
    </ul>
  </div>
);

function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(null);
const [mobileDropdown, setMobileDropdown] = useState(null);
const [isVisible, setIsVisible] = useState(true);  // Keep only one declaration
const [lastScrollY, setLastScrollY] = useState(0);  // Keep only one declaration
const [scroll, setScroll] = useState(false);  // This is fine

const toggleDropdown = (menu) => {
  setDropdownOpen((prev) => (prev === menu ? null : menu));
};

// For Mobile Dropdowns
const toggleMobileDropdown = (menu) => {
  setMobileDropdown((prev) => (prev === menu ? null : menu));
};

// Detect Scroll Direction for Navbar Visibility
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show navbar on scroll up, hide on scroll down
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Add background color after 50px scroll
    setScroll(currentScrollY >= 50);

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "show" : "hide"}`}>
      <div className="container">
        <a href="#" className="logo">
          <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Logo" className="logo-img" />
        </a>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="menu">
          <div className="nav-item">
            <button className="nav-button">Home</button>
          </div>

          <div className="nav-item" onMouseEnter={() => setDropdownOpen("About Us")} onMouseLeave={() => setDropdownOpen(null)}>
            <button className="nav-button" onClick={() => toggleDropdown("About Us")}>About Us <ChevronDown size={16} /></button>
            {dropdownOpen === "About Us" && (
              <div className="dropdown-container about-us-menu">
              <div className="dropdown-item"><a href="#"><strong>Who we are</strong><br/><span>Our history, mission, vision, and values.</span></a></div>
              <div className="dropdown-item"><a href="#"><strong>What we do</strong><br /><span>Learn more about the wide range of IT services we offer.</span></a></div>
              <div className="dropdown-item"><a href="#"><strong>Why Speedlink</strong><br /><span>We provide ICT solutions that make your business stand out.</span></a></div>
              <div className="dropdown-item"><a href="#"><strong>Meet our Team</strong><br /><span>Meet our decent, hardworking team members.</span></a></div>
              <div className="dropdown-item"><a href="#"><strong>Our partners & top Clients</strong><br /><span>View our partner companies and top clients.</span></a><div className="abt-seperator"></div></div>
            </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => setDropdownOpen("Service")} onMouseLeave={() => setDropdownOpen(null)}>
            <button className="nav-button" onClick={() => toggleDropdown("Service")}>Service <ChevronDown size={16} /></button>
            {dropdownOpen === "Service" && (
              <div className="dropdown-container mega-menu">
                <Category title="IT Services" items={["Software Application Development", "Web design/development", "Software installations"]} className="section-1" />
                <Category title="Networking Services" items={["Fiber-to-the-home", "Routing and Switching", "VOIP", "ISP"]} className="section-2" />
                <Category title="Technical Security" items={["CCTV", "Intrusion Prevention", "Fire detection", "Alarms"]} className="section-3" />
                <Category title="Cloud Services" items={["Storage", "Cloud hosting", "Cloud ERP/CRM"]} className="section-4" />
                <Category title="Digital Marketing" items={["Social Media", "Digital Marketing", "Media Planning", "SEO"]} className="section-5" />
                <Category title="Certified Training" items={["Mikrotik", "CCTV Installation", "Web app development", "Web design"]} className="section-6" />
              </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => setDropdownOpen("Case Study")} onMouseLeave={() => setDropdownOpen(null)}>
            <button className="nav-button" onClick={() => toggleDropdown("Case Study")}>
              Case Study <ChevronDown size={16} />
            </button>
            {dropdownOpen === "Case Study" && (
              <div className="dropdown-container case-study-menu">
                <a href="#">Integration of Secured and Reliable Examination Platform</a>
                <a href="#">Hybrid Learning Management</a>
              </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => setDropdownOpen("Products")} onMouseLeave={() => setDropdownOpen(null)}>
            <button className="nav-button" onClick={() => toggleDropdown("Products")}>
              Products <ChevronDown size={16} />
            </button>
            {dropdownOpen === "Products" && (
              <div className="dropdown-container products-menu">
                <a href="#">Digi School</a>
                <a href="#">Speeducation</a>
                <a href="#">Speed ERP</a>
                <a href="#">SpeedAdmit</a>
              </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => setDropdownOpen("Resources")} onMouseLeave={() => setDropdownOpen(null)}>
            <button className="nav-button" onClick={() => toggleDropdown("Resources")}>
              Resources <ChevronDown size={16} />
            </button>
            {dropdownOpen === "Resources" && (
              <div className="dropdown-container resources-menu">
                <a href="#">Blog</a>
                <a href="#">Tech News</a>
                <a href="#">Gallery</a>
                <a href="#">Download Brochure</a>
              </div>
            )}
          </div>
          <div className="search-container">
          <span className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
          </div>
          <button className="sign-up">Get in touch</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
          {/* Close Button */}
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          {/* Search Bar */}
          <div className="mobile-search">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
          </div>

          {/* Mobile Menu Items */}
          {[
  { 
    label: "Home", 
    dropdown: false 
  },
  { 
    label: "About Us", 
    dropdown: true, 
    options: ["Who we are" ,"What we do" ,"Meet our Team" , "Why we stand out" , "Our Clients and Partners"] 
  },
  { label: "Product & Services", dropdown: true, options: ["Digital Services" , "Cloud Services" , "Networking Sevrvices" , "Certified Training Centre"] }, // Next to update
  { label: "Case Study", dropdown: true, options: [] }, // Next to update
  { label: "Solutions", dropdown: true, options: [] }, // Next to update
  { label: "Resources", dropdown: true, options: [] }, // Next to update
  { label: "Contact", dropdown: false }
].map((item) => (
<div className={`nav-item ${mobileDropdown === item.label ? "active" : ""}`} key={item.label}>
  <button className="nav-button" onClick={() => toggleMobileDropdown(item.label)}>
    {item.label} {item.dropdown && <ChevronDown size={16} />}
  </button>
  
  {item.dropdown && mobileDropdown === item.label && (
    <div className="dropdown-container">
      {item.options.map((option, index) => (
        <div key={index} className="abt-us-mobile-item">
          <ChevronDown size={14} className="chevron-icon" /> {/* Right chevron added */}
          <a href="#">{option.name || option}</a> {/* Ensuring correct rendering */}
        </div>
      ))}
    </div>
  )}
</div>
))}


          {/* Get in Touch Button */}
          <button className="sign-up">Get in Touch</button>
        </div>
      )}
    </nav>
  );
}

export default MainHeader;
