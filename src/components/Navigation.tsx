import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('Inicio', 'Home') },
    { path: '/about', label: t('Quiénes Somos', 'About Us') },
    { path: '/services', label: t('Servicios', 'Services') },
    { path: '/medellin', label: t('Medellín', 'Medellín') },
    { path: '/contact', label: t('Contacto', 'Contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground backdrop-blur-sm border-b border-primary-foreground/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Alliance Health Institute" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative hover:text-accent ${
                  isActive(item.path) 
                    ? 'text-accent after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-accent' 
                    : 'text-primary-foreground/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              {t('Agendar Cita', 'Schedule Appointment')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-primary-foreground/90 hover:bg-primary-foreground/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2 mx-4"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{language === 'es' ? 'English' : 'Español'}</span>
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mx-4">
                {t('Agendar Cita', 'Schedule Appointment')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
