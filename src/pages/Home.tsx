import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-medical.jpg';
import plasticSurgery from '@/assets/plastic-surgery.jpg';
import dental from '@/assets/dental.jpg';
import weightManagement from '@/assets/weight-management.jpg';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('Cirugía Plástica', 'Plastic Surgery'),
      description: t(
        'Procedimientos estéticos realizados por cirujanos certificados',
        'Aesthetic procedures performed by board-certified surgeons'
      ),
      image: plasticSurgery,
      link: '/services/plastic-surgery',
    },
    {
      title: t('Odontología Integral', 'Comprehensive Dentistry'),
      description: t(
        'Cuidado dental completo con tecnología de vanguardia',
        'Complete dental care with cutting-edge technology'
      ),
      image: dental,
      link: '/services/dental',
    },
    {
      title: t('Control de Peso', 'Weight Management'),
      description: t(
        'Programas personalizados para el manejo del peso',
        'Personalized weight management programs'
      ),
      image: weightManagement,
      link: '/services/weight-management',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t('Seguridad Garantizada', 'Guaranteed Safety'),
      description: t(
        'Instalaciones médicas acreditadas internacionalmente',
        'Internationally accredited medical facilities'
      ),
    },
    {
      icon: Users,
      title: t('Atención Bilingüe', 'Bilingual Care'),
      description: t(
        'Equipo médico y coordinadores fluidos en español e inglés',
        'Medical team and coordinators fluent in Spanish and English'
      ),
    },
    {
      icon: Award,
      title: t('Experiencia Probada', 'Proven Experience'),
      description: t(
        'Miles de pacientes satisfechos de Estados Unidos',
        'Thousands of satisfied patients from the United States'
      ),
    },
    {
      icon: Heart,
      title: t('Atención Humanizada', 'Humanized Care'),
      description: t(
        'Acompañamiento personalizado en cada etapa',
        'Personalized support at every stage'
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight">
              {t(
                'Servicios Médicos de Clase Mundial en Medellín',
                'World-Class Medical Services in Medellín'
              )}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t(
                'Conectamos pacientes de Estados Unidos con los mejores servicios médicos de Colombia',
                'Connecting US patients with Colombia\'s finest medical services'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full">
                  {t('Solicita Evaluación Gratuita', 'Request Free Evaluation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t('Explorar Servicios', 'Explore Services')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('¿Por Qué Elegir Alliance Health Institute?', 'Why Choose Alliance Health Institute?')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Tu puente confiable entre Estados Unidos y los mejores servicios médicos de Colombia',
                'Your trusted bridge between the United States and Colombia\'s best medical services'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('Nuestros Servicios Destacados', 'Our Featured Services')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Ofrecemos una amplia gama de servicios médicos especializados',
                'We offer a wide range of specialized medical services'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                      {t('Más Información', 'Learn More')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('Ver Todos los Servicios', 'View All Services')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('¿Listo para Comenzar tu Viaje Médico?', 'Ready to Start Your Medical Journey?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t(
              'Agenda tu evaluación gratuita con nuestro equipo de coordinadores',
              'Schedule your free evaluation with our team of coordinators'
            )}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full">
              {t('Contáctanos Ahora', 'Contact Us Now')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
