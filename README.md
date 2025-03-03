 {[ 
            { label: "Home", dropdown: false },
            { label: "About Us", dropdown: true, options: [] }, // You'll provide items here
            { label: "Product & Services", dropdown: true, options: [] }, // You'll provide items here
            { label: "Case Study", dropdown: true, options: [] }, // You'll provide items here
            { label: "Solutions", dropdown: true, options: [] }, // You'll provide items here
            { label: "Resources", dropdown: true, options: [] }, // You'll provide items here
            { label: "Contact", dropdown: false }
          ].map((item) => (
            <div className={`nav-item ${dropdownOpen === item.label ? "active" : ""}`} key={item.label}>
              <button className="nav-button" onClick={() => toggleDropdown(item.label)}>
                {item.label} {item.dropdown && <ChevronDown size={16} />}
              </button>
              {item.dropdown && dropdownOpen === item.label && (
                <div className="dropdown-container">
                  {item.options.map((option, index) => (
                    <a href="#" key={index}>{option}</a>
                  ))}