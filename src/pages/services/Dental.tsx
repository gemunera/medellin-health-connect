import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import dental from '@/assets/dental.jpg';

const Dental = () => {
  const { t } = useLanguage();

  const procedures = [
    t('Implantes dentales', 'Dental implants'),
    t('Carillas de porcelana', 'Porcelain veneers'),
    t('Ortodoncia (brackets y alineadores)', 'Orthodontics (braces and aligners)'),
    t('Blanqueamiento dental', 'Teeth whitening'),
    t('Rehabilitación oral completa', 'Complete oral rehabilitation'),
    t('Diseño de sonrisa', 'Smile design'),
    t('Tratamientos funcionales de la mordida', 'Functional bite treatments'),
    t('Odontología estética digital', 'Digital aesthetic dentistry'),
  ];

  const benefits = [
    t('Odontólogos especialistas con experiencia internacional', 'Specialist dentists with international experience'),
    t('Tecnología digital de última generación', 'State-of-the-art digital technology'),
    t('Diseño estético personalizado', 'Personalized aesthetic design'),
    t('Enfoque en funcionalidad y confort', 'Focus on functionality and comfort'),
    t('Materiales de alta calidad', 'High-quality materials'),
    t('Atención bilingüe especializada', 'Specialized bilingual care'),
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Back Button */}
      <section className="py-6 bg-background border-b">
        <div className="container mx-auto px-4">
          <Link to="/services">
            <Button variant="ghost" className="text-accent hover:text-accent/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('Volver a Servicios', 'Back to Services')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              {t('Odontología Integral y Estética', 'Comprehensive and Aesthetic Dentistry')}
            </h1>
            <p className="text-xl opacity-90">
              {t(
                'Servicios odontológicos de alta precisión con tecnología digital avanzada',
                'High-precision dental services with advanced digital technology'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img
                src={dental}
                alt={t('Odontología', 'Dentistry')}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                {t('Odontología Integral y Estética', 'Comprehensive and Aesthetic Dentistry')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Servicios odontológicos de alta precisión que combinan tecnología digital y diseño estético. Incluye ortodoncia, implantología, blanqueamiento, carillas, diseño de sonrisa, rehabilitación oral y tratamientos funcionales de la mordida. Todos los procedimientos son realizados por odontólogos especialistas con experiencia internacional, priorizando estética, funcionalidad y confort del paciente.',
                  'High-precision dental services that combine digital technology and aesthetic design. Includes orthodontics, implantology, whitening, veneers, smile design, oral rehabilitation and functional bite treatments. All procedures are performed by specialist dentists with international experience, prioritizing aesthetics, functionality and patient comfort.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                {t('Procedimientos Disponibles', 'Available Procedures')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t(
                  'Soluciones dentales integrales con tecnología de vanguardia',
                  'Comprehensive dental solutions with cutting-edge technology'
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {procedures.map((procedure, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{procedure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                {t('¿Qué Incluye Nuestro Servicio?', 'What Does Our Service Include?')}
              </h2>
            </div>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('¿Listo para Mejorar tu Sonrisa?', 'Ready to Improve Your Smile?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t(
              'Agenda tu evaluación dental y descubre cómo podemos ayudarte',
              'Schedule your dental evaluation and discover how we can help you'
            )}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full">
              {t('Agendar Consulta', 'Schedule Consultation')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dental;
