import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import plasticSurgery from '@/assets/plastic-surgery.jpg';
import dental from '@/assets/dental.jpg';
import weightManagement from '@/assets/weight-management.jpg';
import neurosurgery from '@/assets/neurosurgery.jpg';
import rehabilitation from '@/assets/rehabilitation.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('Cirugía Plástica y Medicina Estética', 'Plastic Surgery and Aesthetic Medicine'),
      description: t(
        'Procedimientos estéticos avanzados realizados por cirujanos certificados con tecnología de última generación.',
        'Advanced aesthetic procedures performed by board-certified surgeons with state-of-the-art technology.'
      ),
      image: plasticSurgery,
      link: '/services/plastic-surgery',
      procedures: t(
        'Rinoplastia, Liposucción, Aumento de senos, Lifting facial, BBL',
        'Rhinoplasty, Liposuction, Breast augmentation, Facelift, BBL'
      ),
    },
    {
      title: t('Odontología Integral y Estética', 'Comprehensive and Aesthetic Dentistry'),
      description: t(
        'Tratamientos dentales completos desde odontología general hasta procedimientos cosméticos avanzados.',
        'Complete dental treatments from general dentistry to advanced cosmetic procedures.'
      ),
      image: dental,
      link: '/services/dental',
      procedures: t(
        'Implantes, Carillas, Ortodoncia, Blanqueamiento, Rehabilitación oral',
        'Implants, Veneers, Orthodontics, Whitening, Oral rehabilitation'
      ),
    },
    {
      title: t('Tratamientos para la Obesidad', 'Obesity Treatments'),
      description: t(
        'Programas integrales de control de peso incluyendo cirugía bariátrica y acompañamiento nutricional.',
        'Comprehensive weight management programs including bariatric surgery and nutritional support.'
      ),
      image: weightManagement,
      link: '/services/weight-management',
      procedures: t(
        'Manga gástrica, Bypass gástrico, Balón gástrico, Programas nutricionales',
        'Gastric sleeve, Gastric bypass, Gastric balloon, Nutritional programs'
      ),
    },
    {
      title: t('Neurocirugía Especializada', 'Specialized Neurosurgery'),
      description: t(
        'Intervenciones neuroquirúrgicas avanzadas con equipos de alta tecnología y especialistas experimentados.',
        'Advanced neurosurgical interventions with high-tech equipment and experienced specialists.'
      ),
      image: neurosurgery,
      link: '/services/neurosurgery',
      procedures: t(
        'Cirugía de columna, Tumores cerebrales, Epilepsia, Neurocirugía funcional',
        'Spine surgery, Brain tumors, Epilepsy, Functional neurosurgery'
      ),
    },
    {
      title: t('Terapia MAINLI – Activación Neuronal', 'MAINLI Therapy – Neural Activation'),
      description: t(
        'Terapia innovadora para activación neuronal y mejora de función cognitiva y motora.',
        'Innovative therapy for neural activation and improvement of cognitive and motor function.'
      ),
      image: rehabilitation,
      link: '/services/mainli',
      procedures: t(
        'Rehabilitación neurológica, Estimulación cognitiva, Terapia motora',
        'Neurological rehabilitation, Cognitive stimulation, Motor therapy'
      ),
    },
    {
      title: t('Programa NEUROWAVES – Psilocibina', 'NEUROWAVES Program – Psilocybin'),
      description: t(
        'Tratamiento terapéutico asistido con psilocibina para salud mental y bienestar emocional.',
        'Psilocybin-assisted therapeutic treatment for mental health and emotional well-being.'
      ),
      image: rehabilitation,
      link: '/services/neurowaves',
      procedures: t(
        'Terapia para depresión, Ansiedad, TEPT, Crecimiento personal',
        'Therapy for depression, Anxiety, PTSD, Personal growth'
      ),
    },
    {
      title: t('Rehabilitación Integral', 'Comprehensive Rehabilitation'),
      description: t(
        'Programas completos de rehabilitación física y neurológica con equipos multidisciplinarios.',
        'Complete physical and neurological rehabilitation programs with multidisciplinary teams.'
      ),
      image: rehabilitation,
      link: '/services/rehabilitation',
      procedures: t(
        'Fisioterapia, Terapia ocupacional, Rehabilitación neurológica, Ortopedia',
        'Physical therapy, Occupational therapy, Neurological rehabilitation, Orthopedics'
      ),
    },
    {
      title: t('Servicios Médicos Legales', 'Legal Medical Services'),
      description: t(
        'Evaluaciones médicas especializadas para procesos legales y peritajes médico-legales.',
        'Specialized medical evaluations for legal processes and medical-legal expert opinions.'
      ),
      image: neurosurgery,
      link: '/services/legal-medical',
      procedures: t(
        'Evaluaciones médicas, Peritajes, Informes médico-legales',
        'Medical evaluations, Expert opinions, Medical-legal reports'
      ),
    },
    {
      title: t('Turismo Médico y Bienestar', 'Medical Tourism and Wellness'),
      description: t(
        'Experiencia completa que combina atención médica de calidad con turismo en Medellín.',
        'Complete experience combining quality medical care with tourism in Medellín.'
      ),
      image: plasticSurgery,
      link: '/services/medical-tourism',
      procedures: t(
        'Coordinación completa, Alojamiento, Transporte, Tours, Acompañamiento',
        'Complete coordination, Accommodation, Transportation, Tours, Accompaniment'
      ),
    },
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              {t('Nuestros Servicios Médicos', 'Our Medical Services')}
            </h1>
            <p className="text-xl opacity-90">
              {t(
                'Atención médica especializada con los más altos estándares de calidad',
                'Specialized medical care with the highest quality standards'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-accent mb-2">
                      {t('Procedimientos:', 'Procedures:')}
                    </p>
                    <p className="text-sm text-muted-foreground">{service.procedures}</p>
                  </div>
                  <Link to={service.link}>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 w-full justify-start">
                      {t('Ver Detalles', 'View Details')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('¿Necesitas Más Información?', 'Need More Information?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t(
              'Nuestro equipo está listo para responder tus preguntas y ayudarte a elegir el servicio adecuado',
              'Our team is ready to answer your questions and help you choose the right service'
            )}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full">
              {t('Contáctanos', 'Contact Us')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
