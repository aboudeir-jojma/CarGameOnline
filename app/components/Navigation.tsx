"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Car, Menu, X, Info, Shield, FileText, Mail, Globe } from "lucide-react";

export default function Navigation() {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const menuItems = [
    { href: "/about", label: t('nav.about'), icon: Info },
    { href: "/privacy", label: t('nav.privacy'), icon: Shield },
    { href: "/terms", label: t('nav.terms'), icon: FileText },
    { href: "/", label: t('nav.home'), icon: Car },
  ];

  const languageItems = [
    { code: "en", label: t('nav.english'), icon: Globe },
    { code: "fr", label: t('nav.french'), icon: Globe },
  ];

  const navOpacity = scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-black';

  return (
    <nav className={`text-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navOpacity}`}>
    <div className="max-w-7xl mx-auto px-4 py-2">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 ml-18">
            <Link href="/" onClick={closeMenu}>
              <img src="/logo.png" alt="Logo"  className="h-10 sm:h-13 md:h-15  w-auto max-w-[280px] object-contain" />
              

            </Link>
          </div>

          {/* Bouton hamburger - visible sur tous les écrans */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu déroulant - visible sur tous les écrans */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-black border border-gray-700 shadow-2xl z-40 w-56 rounded-lg mt-2 mr-2">
            <div className="py-3">
              <div className="flex flex-col">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center gap-4 px-5 py-3 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 hover:text-yellow-300 transition-all duration-200 text-left border-l-4 border-transparent hover:border-yellow-400 hover:translate-x-1"
                    >
                      <Icon className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-yellow-300 transition-colors" />
                      <span className="font-medium text-gray-200 group-hover:text-white">{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Language Switcher Section */}
              <div className="border-t border-gray-700 mt-3 pt-3">
                <div className="px-5 mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {t('nav.language')}
                  </span>
                </div>
                <div className="flex flex-col">
                  {languageItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = i18n.language === item.code;
                    return (
                      <button
                        key={item.code}
                        onClick={() => changeLanguage(item.code)}
                        className={`group flex items-center gap-4 px-5 py-3 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 hover:text-yellow-300 transition-all duration-200 text-left border-l-4 ${
                          isActive
                            ? 'border-yellow-400 bg-yellow-500/10 text-yellow-300'
                            : 'border-transparent hover:border-yellow-400 hover:translate-x-1'
                        }`}
                      >
                        <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${
                          isActive
                            ? 'text-yellow-300'
                            : 'text-gray-400 group-hover:text-yellow-300'
                        }`} />
                        <span className={`font-medium ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-200 group-hover:text-white'
                        }`}>
                          {item.label}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Effet lumineux en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        )}
      </div>
    </nav>
  );
}
