import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import plasticSurgery from '@/assets/plastic-surgery.jpg';

const PlasticSurgery = () => {
  const { t } = useLanguage();

  const procedures = [
    t('Rinoplastia (Cirugía de Nariz)', 'Rhinoplasty (Nose Surgery)'),
    t('Liposucción y Lipoescultura', 'Liposuction and Body Contouring'),
    t('Aumento y Reducción de Senos', 'Breast Augmentation and Reduction'),
    t('Lifting Facial (Ritidectomía)', 'Facelift (Rhytidectomy)'),
    t('BBL (Brazilian Butt Lift)', 'BBL (Brazilian Butt Lift)'),
    t('Abdominoplastia (Tummy Tuck)', 'Abdominoplasty (Tummy Tuck)'),
    t('Blefaroplastia (Cirugía de Párpados)', 'Blepharoplasty (Eyelid Surgery)'),
    t('Otoplastia (Cirugía de Orejas)', 'Otoplasty (Ear Surgery)'),
  ];

  const benefits = [
    t('Cirujanos certificados por juntas internacionales', 'Board-certified surgeons'),
    t('Tecnología quirúrgica de última generación', 'State-of-the-art surgical technology'),
    t('Instalaciones acreditadas y modernas', 'Accredited and modern facilities'),
    t('Evaluación médica completa preoperatoria', 'Complete preoperative medical evaluation'),
    t('Seguimiento post-operatorio personalizado', 'Personalized post-operative follow-up'),
    t('Atención bilingüe en todo momento', 'Bilingual care at all times'),
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
              {t('Cirugía Plástica y Medicina Estética', 'Plastic Surgery and Aesthetic Medicine')}
            </h1>
            <p className="text-xl opacity-90">
              {t(
                'Transforma tu apariencia con procedimientos estéticos realizados por especialistas certificados',
                'Transform your appearance with aesthetic procedures performed by certified specialists'
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
                src={plasticSurgery}
                alt={t('Cirugía Plástica', 'Plastic Surgery')}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                {t('Cirugía Plástica y Medicina Estética', 'Plastic Surgery and Aesthetic Medicine')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Procedimientos realizados por especialistas certificados que buscan mejorar la apariencia y bienestar físico del paciente, manteniendo estándares internacionales de seguridad y ética médica. Incluye cirugías de contorno corporal, rejuvenecimiento facial, rinoplastia, liposucción, abdominoplastia, aumento o reducción mamaria, así como tratamientos no invasivos como bótox, rellenos dérmicos, láser facial y rejuvenecimiento con plasma rico en plaquetas.',
                  'Procedures performed by certified specialists that seek to improve the appearance and physical well-being of the patient, maintaining international standards of safety and medical ethics. Includes body contouring surgeries, facial rejuvenation, rhinoplasty, liposuction, abdominoplasty, breast augmentation or reduction, as well as non-invasive treatments such as botox, dermal fillers, facial laser and platelet-rich plasma rejuvenation.'
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
                  'Amplia gama de cirugías estéticas y procedimientos no invasivos',
                  'Wide range of aesthetic surgeries and non-invasive procedures'
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
            {t('¿Listo para Transformar tu Apariencia?', 'Ready to Transform Your Appearance?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t(
              'Agenda tu evaluación gratuita y descubre cómo podemos ayudarte',
              'Schedule your free evaluation and discover how we can help you'
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

export default PlasticSurgery;
