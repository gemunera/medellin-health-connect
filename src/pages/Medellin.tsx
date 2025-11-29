import { CheckCircle2, Plane, Hotel, Shield, Stethoscope, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import medellinCity from '@/assets/medellin2.avif';

const Medellin = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      title: t('Costos Competitivos', 'Competitive Costs'),
      description: t(
        'Ahorra hasta 70% comparado con procedimientos similares en Estados Unidos sin comprometer la calidad.',
        'Save up to 70% compared to similar procedures in the United States without compromising quality.'
      ),
    },
    {
      icon: Stethoscope,
      title: t('Excelencia Médica', 'Medical Excellence'),
      description: t(
        'Médicos certificados internacionalmente con formación en las mejores universidades del mundo.',
        'Internationally certified doctors trained at the world\'s best universities.'
      ),
    },
    {
      icon: Shield,
      title: t('Seguridad Garantizada', 'Guaranteed Safety'),
      description: t(
        'Instalaciones acreditadas que cumplen con estándares internacionales de salud y seguridad.',
        'Accredited facilities that meet international health and safety standards.'
      ),
    },
    {
      icon: Hotel,
      title: t('Experiencia Integral', 'Comprehensive Experience'),
      description: t(
        'Asistencia completa con alojamiento, transporte y coordinación de todo tu viaje médico.',
        'Complete assistance with accommodation, transportation, and coordination of your entire medical trip.'
      ),
    },
    {
      icon: Plane,
      title: t('Destino Accesible', 'Accessible Destination'),
      description: t(
        'Vuelos directos desde principales ciudades de Estados Unidos con tiempos de viaje cortos.',
        'Direct flights from major US cities with short travel times.'
      ),
    },
  ];

  const advantages = [
    t('Capital médica de Latinoamérica', 'Medical capital of Latin America'),
    t('Clima primaveral todo el año', 'Spring-like weather year-round'),
    t('Infraestructura moderna y segura', 'Modern and safe infrastructure'),
    t('Hospitalidad y calidez colombiana', 'Colombian hospitality and warmth'),
    t('Cultura vibrante y gastronómica', 'Vibrant culture and cuisine'),
    t('Actividades turísticas diversas', 'Diverse tourist activities'),
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${medellinCity})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl text-left space-y-6 animate-fade-in text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              {t('Medellín: Tu Destino Médico Ideal', 'Medellín: Your Ideal Medical Destination')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {t(
                'La ciudad de la eterna primavera te ofrece servicios médicos de clase mundial en un entorno moderno y acogedor',
                'The city of eternal spring offers you world-class medical services in a modern and welcoming environment'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('¿Por Qué Elegir Medellín?', 'Why Choose Medellín?')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Descubre las ventajas de realizar tu tratamiento médico en Colombia',
                'Discover the advantages of having your medical treatment in Colombia'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <benefit.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <benefit.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* City Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {t('La Ciudad de la Innovación', 'The City of Innovation')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t(
                  'Medellín combina tecnología médica avanzada con una experiencia cultural única',
                  'Medellín combines advanced medical technology with a unique cultural experience'
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

      {/* Medical Tourism Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t('Tu Viaje Médico Completo', 'Your Complete Medical Journey')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                'En Alliance Health Institute coordinamos cada detalle de tu viaje. Desde tu llegada al aeropuerto hasta tu seguimiento post-tratamiento, nuestro equipo bilingüe te acompaña en cada paso. Trabajamos con los mejores hoteles, servicios de transporte y por supuesto, las clínicas más prestigiosas de Medellín.',
                'At Alliance Health Institute, we coordinate every detail of your trip. From your arrival at the airport to your post-treatment follow-up, our bilingual team accompanies you every step of the way. We work with the best hotels, transportation services, and of course, the most prestigious clinics in Medellín.'
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">1</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t('Evaluación', 'Evaluation')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('Consulta gratuita y plan personalizado', 'Free consultation and personalized plan')}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">2</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t('Coordinación', 'Coordination')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('Organizamos viaje, alojamiento y citas', 'We organize travel, accommodation and appointments')}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">3</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t('Seguimiento', 'Follow-up')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('Acompañamiento continuo post-tratamiento', 'Continuous post-treatment support')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('Conoce Más Sobre Medellín', 'Learn More About Medellín')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t(
              'Agenda una videollamada con nuestro equipo para conocer en detalle cómo podemos ayudarte',
              'Schedule a video call with our team to learn in detail how we can help you'
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Medellin;
