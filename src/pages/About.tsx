import { CheckCircle2, Globe, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import medellinCity from '@/assets/medellin-city.jpg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('Atención Humanizada', 'Humanized Care'),
      description: t(
        'Cada paciente es único. Brindamos atención personalizada y comprensiva en cada etapa del proceso.',
        'Every patient is unique. We provide personalized and compassionate care at every stage of the process.'
      ),
    },
    {
      icon: Target,
      title: t('Excelencia Médica', 'Medical Excellence'),
      description: t(
        'Colaboramos solo con los mejores profesionales médicos y centros acreditados de Colombia.',
        'We partner only with the best medical professionals and accredited centers in Colombia.'
      ),
    },
    {
      icon: Globe,
      title: t('Conexión Cultural', 'Cultural Connection'),
      description: t(
        'Entendemos ambas culturas y facilitamos la comunicación para una experiencia sin barreras.',
        'We understand both cultures and facilitate communication for a barrier-free experience.'
      ),
    },
  ];

  const advantages = [
    t('Coordinación completa desde Estados Unidos', 'Complete coordination from the United States'),
    t('Equipo médico certificado internacionalmente', 'Internationally certified medical team'),
    t('Instalaciones de última generación', 'State-of-the-art facilities'),
    t('Costos hasta 70% más accesibles', 'Costs up to 70% more affordable'),
    t('Seguimiento post-tratamiento', 'Post-treatment follow-up'),
    t('Asistencia en alojamiento y transporte', 'Assistance with accommodation and transportation'),
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              {t('Sobre Alliance Health Institute', 'About Alliance Health Institute')}
            </h1>
            <p className="text-xl opacity-90">
              {t(
                'Tu aliado confiable en turismo médico internacional',
                'Your trusted ally in international medical tourism'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                {t('Nuestra Misión', 'Our Mission')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'En Alliance Health Institute, con sede en Miami, nos dedicamos a conectar pacientes de Estados Unidos con servicios médicos de clase mundial en Medellín, Colombia. Nuestra misión es hacer que la atención médica de alta calidad sea accesible, segura y conveniente para todos.',
                  'At Alliance Health Institute, based in Miami, we are dedicated to connecting patients from the United States with world-class medical services in Medellín, Colombia. Our mission is to make high-quality healthcare accessible, safe, and convenient for everyone.'
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Entendemos que buscar atención médica en el extranjero puede ser intimidante. Por eso, nos comprometemos a acompañarte en cada paso del camino, desde la primera consulta hasta el seguimiento post-tratamiento, brindándote la tranquilidad y seguridad que mereces.',
                  'We understand that seeking medical care abroad can be intimidating. That\'s why we commit to accompanying you every step of the way, from the first consultation to post-treatment follow-up, providing you with the peace of mind and security you deserve.'
                )}
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img
                src={medellinCity}
                alt="Medellín City"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('Nuestros Valores', 'Our Values')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Los principios que guían cada decisión y acción',
                'The principles that guide every decision and action'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <value.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {t('¿Por Qué Confiar en Nosotros?', 'Why Trust Us?')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t(
                  'Diferenciadores que nos hacen tu mejor opción',
                  'Differentiators that make us your best choice'
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('Avanzando la Salud a Través del Conocimiento', 'Advancing Health Through Knowledge')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {t(
              'Nuestro equipo bilingüe de coordinadores médicos y profesionales de la salud está comprometido con tu bienestar. Con oficinas en Miami y conexiones directas en Medellín, estamos siempre cerca cuando nos necesites.',
              'Our bilingual team of medical coordinators and healthcare professionals is committed to your well-being. With offices in Miami and direct connections in Medellín, we are always close when you need us.'
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
