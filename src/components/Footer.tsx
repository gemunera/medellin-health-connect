import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Alliance Health Institute" className="h-16 w-auto" />
            <p className="text-sm opacity-90">
              {t(
                'Conectamos pacientes de Estados Unidos con servicios médicos de clase mundial en Medellín, Colombia.',
                'Connecting US patients with world-class medical services in Medellín, Colombia.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t('Enlaces Rápidos', 'Quick Links')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('Inicio', 'Home')}</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">{t('Quiénes Somos', 'About Us')}</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">{t('Servicios', 'Services')}</Link></li>
              <li><Link to="/medellin" className="hover:text-accent transition-colors">{t('Medellín', 'Medellín')}</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t('Contacto', 'Contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Miami */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t('Oficina Miami', 'Miami Office')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Miami, Florida, USA</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (305) XXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@alliancehealthinstitute.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Medellín */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t('Oficina Medellín', 'Medellín Office')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Medellín, Colombia</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+57 XXX XXX XXXX</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Alliance Health Institute. {t('Todos los derechos reservados.', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
