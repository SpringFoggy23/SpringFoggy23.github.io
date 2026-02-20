import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, BookOpen, User, Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle theme effect
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Projects', path: '/projects', icon: <FolderGit2 size={20} /> },
    { name: 'Reading', path: '/reading', icon: <BookOpen size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-icon">♒</span> Aqua
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-links ${isActive ? 'active-link' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span className="link-text">{link.name}</span>
              </NavLink>
            </li>
          ))}
          <li className="nav-item">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Evening Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
