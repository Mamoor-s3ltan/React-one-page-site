import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../assets/zama-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  // Optional: Set RTL/LTR on first load
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const navLinks = [
    { name: t('navbar.home'), href: '#hero' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="w-[100px] h-auto">
          <img src={logo} alt="Logo" className="w-full h-auto object-fill" />
        </div>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-white hover:text-blue-600 transition hover:border-b-2">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-blue-600 transition"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
