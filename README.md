My first react app

a {
    text-decoration: none;
}

.dropdown, .sub-dropdown {
    display: none;
}

.nav-items > .parent:hover > .dropdown,
.nav-items > .parent:hover > .sub-dropdown {
    display: block;
}

.nav ul {
    list-style-type: none;
    display: flex;
    gap: 10px;
}

.nav ul li {
    position: relative;
}

.nav ul li a {
    color: #0A2863;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav ul li:hover > a {
    color: red;
}

/* New Dropdown Styling */
.parent {
    position: relative;
}

.parent > .dropdown {
    position: absolute;
    top: 100%;  /* Right below the nav item */
    left: 0;
    min-width: 250px;
    background-color: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 1000;
    padding: 15px;
    display: none;
}

.parent:hover > .dropdown {
    display: block;  /* Show on hover */
}

.dropdown a {
    display: block;
    padding: 8px 10px;
    font-size: 14px;
    color: #0A2863;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.dropdown a:last-child {
    border-bottom: none;
}

.dropdown a:hover {
    background-color: rgba(218, 33, 36, 0.1);  /* Light red on hover */
    color: #DA2124;
}

.sub-dropdown {
    position: absolute;
    left: 100%;
    top: 0;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button, .logo-text {
    display: none;
}

.hamburger {
    display: flex;
}

.menu-toggle:checked ~ .close-button {
    display: block;
}

.menu-toggle:checked ~ .nav .logo-text {
    display: block;
}

.menu-toggle {
    display: none;
}

.nav {
    text-decoration: none;
    display: flex;
    gap: 20px;
    flex-direction: row;
}

.nav > .nav-items {
    margin-top: 40px;
}

.nav > div {
    margin: 0;
    padding: 0;
}

.main-header .logo {
    margin-right: 12px;
}

.parent {
    padding-right: 20px;
    color: #0A2863;
}

.nav-items > .parent > a {
    color: #0A2863;
    list-style-type: none;
}

.nav-items > .parent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-right: 20px;
}

.nav-items > .parent::after {
    content: '';
    border: solid #0A2863;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: translateY(-50%) rotate(45deg);
    position: absolute;
    right: 0;
    top: 50%;
    transition: transform 0.3s ease;
}

.nav .parent a:hover {
    color: red;
    position: relative;
    border-top: 2px solid red;
    padding-top: 5px;
}

.logo img {
    max-width: 210px;
    width: 100%;
    height: auto;
    transition: width 0.3s ease;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 130px;
}

.nav > .logo > .logo-text {
    display: none;
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
}

.searchbutton {
    max-width: 15px;
    width: 100%;
    height: 15px;
    margin-left: 20px;
    margin-top: 45px;
}

.cta-button {
    background-color: #DA2124;
    padding: 15px;
    border-radius: 5px;
    border: none;
    margin-top: 25px;
    margin-left: 5px;
    margin-right: 10px;
    width: 140px;
    height: 50px;
}

.cta-button > span {
    font-size: 16px;
    font-weight: 700;
    color: white;
}

.cta-button:hover {
    background-color: black;
}

